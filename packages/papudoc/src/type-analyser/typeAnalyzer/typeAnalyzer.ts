import ts from 'typescript'
import TsType from './TsType'
import NamedBuiltinType from './types/NamedBuiltinType'
import StringLiteral from './types/StringLiteral'
import BooleanLiteral from './types/BooleanLiteral'
import Union from './types/Union'
import ObjectType from './types/ObjectType'
import ArrayType from './types/ArrayType'
import TypeCache from './TypeCache'
import EnumLiteralType from './types/EnumLiteralType'

export interface AnalyserContext {
  analyse(this: AnalyserContext, contextualName: string[], type: ts.Type): TsType
  checker: ts.TypeChecker
  typeMap: TypeCache
  typeStack: Array<ts.Type | { mapperOnly: true; mapper: any }>
}
export type AnalyzeTypeFn = (type: ts.Type, checked: ts.TypeChecker) => TsType

export default function analyzeType(contextualName: string[], type: ts.Type, checker: ts.TypeChecker) {
  const ctx: AnalyserContext = {
    analyse(contextualName: string[], type: ts.Type) {
      return analyzeTypeInternal(this, contextualName, type)
    },
    checker,
    typeMap: new TypeCache(),
    typeStack: [],
  }
  return ctx.analyse(contextualName, type)
}

export function prepareTsTypeConverter(checker: ts.TypeChecker) {
  const ctx: AnalyserContext = {
    analyse(contextualName: string[], type: ts.Type) {
      return analyzeTypeInternal(this, contextualName, type)
    },
    checker,
    typeStack: [],
    typeMap: new TypeCache(),
  }
  return (contextualName: string[], type: ts.Type) => analyzeTypeInternal(ctx, contextualName, type)
}

type CreateTypeObject = (type: ts.Type) => TsType
export function analyzeTypeInternal(outerCtx: AnalyserContext, contextualName: string[], type: ts.Type) {
  const ctx: AnalyserContext = {
    ...outerCtx,
    typeStack: [...outerCtx.typeStack, type],
  }
  let cached = ctx.typeMap.get([...outerCtx.typeStack, type] as any) // TODO: fix this
  if (cached) {
    cached.refCount++
    cached.contextualNames.push(contextualName)
    return cached
  }

  const handlers: Map<ts.TypeFlags, CreateTypeObject | string> = new Map<ts.TypeFlags, CreateTypeObject | string>([
    [ts.TypeFlags.Any, 'any'],
    [ts.TypeFlags.Unknown, 'unknown'],
    [ts.TypeFlags.String, 'string'],
    [ts.TypeFlags.Number, 'number'],
    [ts.TypeFlags.Boolean, 'boolean'],
    [ts.TypeFlags.Boolean | ts.TypeFlags.Union, 'boolean'],
    [ts.TypeFlags.Enum | ts.TypeFlags.Union, 'enum'],
    [ts.TypeFlags.EnumLiteral | ts.TypeFlags.Union, () => new EnumLiteralType(type)],
    [ts.TypeFlags.Void, 'void'],
    [ts.TypeFlags.Undefined, 'undefined'],
    [ts.TypeFlags.Null, 'null'],
    [ts.TypeFlags.Never, 'never'],
    [ts.TypeFlags.BigInt, 'bigint'],
    [ts.TypeFlags.StringLiteral, () => new StringLiteral(type)],
    [ts.TypeFlags.NumberLiteral, (type as ts.LiteralType).value?.toString()], // probably should have a number literal type
    [ts.TypeFlags.BooleanLiteral, () => new BooleanLiteral(type, ctx)],
    [
      ts.TypeFlags.Object,
      () => {
        if (type.getSymbol()?.name === 'Date') return new NamedBuiltinType(type, 'Date')
        if (type.getSymbol()?.name === 'Array') return new ArrayType(type, contextualName, ctx)
        return new ObjectType(type, contextualName, ctx)
      },
    ],

    [ts.TypeFlags.Union, () => new Union(type, contextualName, ctx)],
    [ts.TypeFlags.Intersection, () => new ObjectType(type, contextualName, ctx)],
  ])

  //console.log('Handling', type.getSymbol()?.name)
  const handled = handle()
  ctx.typeMap.set([...ctx.typeStack, type] as any, handled) // TODO: fix this
  return handled

  function handle() {
    const handler = handlers.get(type.flags)
    if (handler) {
      if (typeof handler === 'string') return new NamedBuiltinType(type, handler)
      return handler(type)
    } else {
      //throw new Error('stahp')
      console.log('FLAGS', type.flags)
      return new NamedBuiltinType(type, 'unsupported-by-papudoc')
    }
  }
}
