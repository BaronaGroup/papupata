import ts, { SymbolDisplayPart } from 'typescript'
import TsType, { Complexity, RenderContext } from '../TsType'
import { AnalyserContext } from '../typeAnalyzer'
import { JSONApiType } from '@papupata/common-types'
import last from '../../util/last'
import compact from '../../util/compact'

interface Property {
  name: string
  type: TsType
  required: boolean
  description?: string
}

export default class ObjectType extends TsType {
  private properties: Property[] = []

  constructor(type: ts.Type, contextualName: string[], ctx: AnalyserContext) {
    super(contextualName, type)
    const innerCtx = {
      ...ctx,
      typeStack: [...ctx.typeStack, type],
    }
    this.properties = compact(
      type.getProperties().map((member) => {
        const valueType = ctx.checker.getTypeAtLocation(
          (member as any).syntheticOrigin?.valueDeclaration || member.valueDeclaration
        )
        const memberContext = {
          ...innerCtx,
          typeStack: [
            ...innerCtx.typeStack,
            {
              mapper: (member as any).mapper,
              mapperOnly: true as const,
            },
          ],
        }
        const description =
          jsdocCompatibility(member.getJsDocTags().find((tag) => tag.name === 'description')?.text) ??
          member.getDocumentationComment(ctx.checker).find((x) => x.kind === 'text')?.text

        if (member.flags & ts.SymbolFlags.Method) return null
        let memberType = valueType

        if (valueType.flags & ts.SymbolFlags.TypeParameter) {
          const foundResolvedType = findResolvedTypeAutonest(memberContext, valueType, false)

          if (!foundResolvedType) {
            console.log('CON', contextualName)
            //console.log(type.aliasTypeArguments[0].target.typeParameters)
            //console.log(ctx.typeStack[ctx.typeStack.length - 3].resolvedProperties)
            findResolvedTypeAutonest(memberContext, valueType, true)
            //console.log(member.name, ctx.typeStack[0].types[0])
            throw new Error('stopping at d' + contextualName.join('.') + type.getSymbol()?.name)
          }
          memberType = foundResolvedType || valueType
        }

        return {
          name: member.name,
          type: memberContext.analyse([...contextualName, member.name], memberType),
          required: !(member.flags & ts.SymbolFlags.Optional),
          description,
        }
      })
    )
  }

  get complexity(): Complexity {
    return Complexity.Complex
  }

  toTypeString(ctx: RenderContext): string {
    return `{ ${this.properties
      .map((property) => {
        const desc = property.description ? `/* @description ${property.description} */` : ''
        const opt = property.required ? '' : '?'
        return `${desc}${propName(property.name)}: ${ctx.renderNestedTypeString(property.type)}${opt}`
      })
      .join(', ')} }`

    function propName(plainName: string) {
      if (plainName.match(/^[a-zA-Z0-9_]$/)) return plainName
      return `"${plainName.replace(/"/g, '\\"')}"`
    }
  }

  toJSON(ctx: RenderContext): JSONApiType {
    return {
      type: 'object',
      properties: this.properties.map((property) => ({
        name: property.name,
        description: property.description,
        required: property.required,
        type: ctx.renderNestedJSON!(property.type),
      })),
      name: this.name,
    }
  }
}

function getTypeParameterIndex(type: ts.Type, name: string) {
  const memberIterrator = type.getSymbol()?.members!.values()
  for (let i = 0; ; ++i) {
    const val = memberIterrator!.next()
    if (val.done) return -1
    if (val.value.name === name) return i
  }
}

export function findResolvedTypeAutonest(ctx: AnalyserContext, referenceType: ts.Type, debug = false): ts.Type | null {
  const found = findResolvedType(ctx, referenceType, debug)
  if (!found) return found

  if (found.flags & ts.SymbolFlags.TypeParameter) {
    return findResolvedTypeAutonest(ctx, found, debug)
  }
  return found
}

function findResolvedType(ctx: AnalyserContext, referenceType: ts.Type, debug = false): ts.Type | null {
  const lastStackEntry = last(ctx.typeStack)

  if (!lastStackEntry) return null
  const mapperType = 'mapperOnly' in lastStackEntry ? lastStackEntry : null
  const containingType = !('mapperOnly' in lastStackEntry) ? lastStackEntry : null

  for (const { sources, targets } of getMappers(mapperType || containingType, debug)) {
    const index = sources.indexOf(referenceType)
    if (debug) {
      console.log('i', index, referenceType.getSymbol()?.name)
    }
    if (index !== -1) return targets[index]
  }
  const refSymbol = referenceType.getSymbol()
  if (!refSymbol) return null
  if (debug)
    console.log(
      'frt',
      mapperType?.mapperOnly,
      containingType?.getSymbol()?.name,
      refSymbol.name,
      '[TS: ' + ctx.typeStack.map((t) => (t as any).getSymbol?.()?.name).join(':') + ']'
    )

  const containingSymbol = containingType?.getSymbol()!
  const member = containingSymbol?.members!.get(refSymbol.name as any)
  if (member === refSymbol) {
    const typeParameterIndex = getTypeParameterIndex(containingType!, refSymbol.name)
    if (debug) console.log('Found match')
    const match = (containingType as any).resolvedTypeArguments[typeParameterIndex]
    if (match.flags & ts.SymbolFlags.TypeParameter) {
      return findResolvedType(ctx, match, debug)
    }
    return match
  } else {
    if (containingType?.getBaseTypes()?.length) {
      for (const bt of containingType.getBaseTypes()!) {
        const subres = findResolvedType(
          {
            ...ctx,
            typeStack: [...ctx.typeStack.slice(0, ctx.typeStack.length - 1), bt],
          },
          referenceType,
          debug
        )
        if (subres) return subres
      }
    }
    if (ctx.typeStack.length === 1) {
      if (debug) {
        console.log('Empty stack')
        //console.log(containingType)
        //console.log('mapper', (containingType as any).mapper.mapper1)
      }
      return null
    }
    if (debug) {
      //console.log(containingType)
      //throw new Error('waitamime')
      console.log('Going in deeper')
    }
    const deeper = findResolvedType(
      {
        ...ctx,
        typeStack: ctx.typeStack.slice(0, ctx.typeStack.length - 1),
      },
      referenceType,
      debug
    )
    if (deeper) return deeper

    if (containingType) {
      for (let aliasTypeArgument of containingType.aliasTypeArguments || []) {
        const asAny: any = aliasTypeArgument

        const index = asAny.target.typeParameters.indexOf(referenceType)
        //  console.log(',,,', index)
        if (index !== -1) {
          return asAny.resolvedTypeArguments[index]
        }
        const nest2 = findResolvedType(
          { ...ctx, typeStack: [...ctx.typeStack.slice(0, ctx.typeStack.length - 1), asAny] },
          referenceType,
          debug
        )
        if (nest2) return nest2
      }
      const containingTypeAny = containingType as any
      if (containingTypeAny.types) {
        for (const type of containingTypeAny.types) {
          const nest1 = findResolvedType(
            { ...ctx, typeStack: [...ctx.typeStack.slice(0, ctx.typeStack.length - 1), type] },
            referenceType,
            debug
          )
          if (nest1) return nest1
        }
      }
    }
    //  console.log('vvv')
    return null

    //console.log(type.aliasTypeArguments[0].target.typeParameters)
    //console.log(type.aliasTypeArguments[0].resolvedTypeArguments)
  }
}
/*
const typeParameterIndex = getTypeParameterIndex(type, valueType)
//(type as any).resolvedTypeArguments[typeParameterIndex]*/

function* getMappers(
  type: ts.Type | { mapperOnly: true } | null,
  debug: boolean
): IterableIterator<ReturnType<typeof convertMapper>> {
  if (!type) {
    return null
  }
  const actual = type as any
  //if (debug) console.log('Z', actual.mapper || actual.mapper1 || actual.source || actual.sources)

  if (actual.mapper) {
    yield* getMappers(actual.mapper, debug)
    return
  }

  if (actual.source || actual.sources) {
    yield convertMapper(actual)
  }

  let index = 1
  while (actual['mapper' + index]) {
    const mapper = actual['mapper' + index]
    if (mapper.source || mapper.sources) {
      if (debug) console.log('DI', index)
      yield convertMapper(mapper)
    } else if (mapper.mapper1 || mapper.mapper) {
      if (debug) console.log('DB', index)
      yield* getMappers(mapper, debug)
    } else {
      console.log('BAD', actual)
    }

    ++index
  }

  function convertMapper(mapper: any) {
    const sources = mapper.sources || [mapper.source],
      targets = mapper.targets || [mapper.target]
    if (debug) {
      console.log('Found mappers for', sources.map((source: any) => source.getSymbol()?.name).join(','))
    }
    return { sources, targets }
  }
}

// should work with both before and after ts 4.3 where things changed
function jsdocCompatibility(param: string | undefined | SymbolDisplayPart[]) {
  if (!param) return param
  if (typeof param === 'string') return param
  return param.map((p) => p.text).join('\n')
}
