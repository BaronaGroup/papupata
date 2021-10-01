import { OpenAPIV3 } from 'openapi-types'
import { SingleFileConfig } from './config'

interface ConversionState {
  integerUsed: boolean
  enumUsed: boolean
}

const initialConversionState = (): ConversionState => ({ integerUsed: false, enumUsed: false })

const methods = [
  { openapi: 'get' as const, papupata: 'declareGetAPI' },
  { openapi: 'put' as const, papupata: 'declarePutAPI' },
  { openapi: 'post' as const, papupata: 'declarePostAPI' },
  { openapi: 'patch' as const, papupata: 'declarePatchAPI' },
  { openapi: 'delete' as const, papupata: 'declareDeleteAPI' },
]

export default async function generate(
  openapi: OpenAPIV3.Document,
  config: SingleFileConfig,
  filePath: string
): Promise<string> {
  const builder = new Builder()
  const nameRegistry = new NameRegistry()
  const state = initialConversionState()
  const extraImportsFromMain = new SlowString('')
  builder.push(`// Generated using papupata-from-openapi\n`)
  builder.push('import { APIDeclaration')
  builder.push(extraImportsFromMain)
  builder.push("} from 'papupata'\n")
  const extraImports = new SlowString('')
  builder.push(extraImports)
  builder.push(`const declarationBase = new APIDeclaration()\n;`)

  builder.push(`export const ${config.exportName ?? 'generatedAPI'} = {`)
  builder.push(`_papupataApiDeclaration: declarationBase,\n`) // no risk of conflict as sanitising gets rid of underscores from actual APIs
  if (openapi.paths) {
    for (const path of Object.keys(openapi.paths)) {
      const pathItem = handleRef(openapi.paths[path]!)
      for (const method of methods) {
        if (method.openapi in pathItem) {
          const singlePath = pathItem[method.openapi]!

          const name = nameRegistry.create(
            singlePath.operationId,
            path === '/' ? 'root' : path,
            method.openapi,
            singlePath.summary
          )
          const pathItemSummary = 'summary' in pathItem ? pathItem.summary : undefined
          const pathItemDescription = 'description' in pathItem ? pathItem.description : undefined
          if (pathItemSummary || pathItemDescription || singlePath.summary || singlePath.summary) {
            builder.push('/**\n')
            if (singlePath.summary || pathItemSummary)
              builder.push(`* @summary ${singlePath.summary || pathItemSummary}\n`)
            if (singlePath.description || pathItemDescription)
              builder.push(`* @description ${singlePath.description || pathItemDescription}\n`)
            builder.push('*/\n')
          }
          builder.push(`"${name}": declarationBase.${method.papupata}('`)
          const slowPath = new SlowString(path)
          builder.push(slowPath)
          builder.push(`')`)

          if (singlePath.parameters) {
            const parameters = handleRef(singlePath.parameters).map(handleRef)
            const pathParams = parameters.filter((x) => x.in === 'path')
            if (pathParams.length) {
              builder.push('.params({')
              for (const param of pathParams) {
                if (!param.required) {
                  throw new Error(
                    'Cannot handle optional path parameters at this time; ' + param.name + ' is optional.'
                  )
                }
                builder.push(`${param.name}:`)
                builder.push(!param.schema ? 'String' : convertSimpleSchema(handleRef(param.schema), state))
                builder.push(',')
                slowPath.value = slowPath.value.replace(`{${param.name}}`, `:${param.name}`)
              }
              builder.push('})\n')
            }
            const queryParameters = parameters.filter((x) => x.in === 'query')

            for (const [container, params] of [
              ['query', queryParameters.filter((x) => x.required)] as const,
              ['optionalQuery', queryParameters.filter((x) => !x.required)] as const,
            ]) {
              if (params.length) {
                builder.push(`.${container}({`)
                for (const param of params) {
                  builder.push(`${param.name}:`)
                  builder.push(!param.schema ? 'String' : convertSimpleSchema(handleRef(param.schema), state))
                  builder.push(',')
                }
                builder.push('})\n')
              }
            }
          }

          if ('requestBody' in singlePath && singlePath.requestBody) {
            const body = singlePath.requestBody
            builder.push('.body<')
            if ('content' in body && body.content) {
              if (body.content['application/json']) {
                const schema = body.content['application/json'].schema

                if (schema) builder.push(convertSchema(handleRef(schema), state))
                else builder.push('undefined')
              } else if (body.content['text/plain'] || body.content['text/html']) {
                builder.push('string')
              } else {
                builder.push('unknown')
              }
            }
            builder.push('>()')
          }

          builder.push(`.response<`)
          const usableResponses = Object.keys(singlePath.responses).filter((x) => x.match(/^2\d\d$/))

          if (usableResponses.length === 0) {
            builder.push('unknown')
          } else {
            for (const code of usableResponses) {
              builder.push('|')

              const response = handleRef(singlePath.responses[code])
              if (!response) {
                builder.push('unknown')
                /* } else if ('schema' in response && response.schema) {
                builder.push(convertSchema(response.schema as any, state, 0))*/
              } else if ('content' in response && response.content) {
                if (response.content['application/json']) {
                  const schema = response.content['application/json'].schema
                  if (schema) builder.push(convertSchema(handleRef(schema), state))
                  else builder.push('unknown')
                } else if (response.content['text/plain'] || response.content['text/html']) {
                  builder.push('string')
                } else {
                  builder.push('unknown')
                }
              }
            }
          }
          builder.push(`>(),\n\n`)
        }
      }
    }
  }

  builder.push('}')

  if (state.integerUsed || state.enumUsed) {
    extraImports.value += `import { ${state.integerUsed ? 'Integer, ' : ''} ${
      state.enumUsed ? 'StringEnum, ' : ''
    } } from 'papupata/queryTypes'
`
  }

  const built = builder.build()
  try {
    const prettier = require('prettier')
    const loadedConfig = await prettier.resolveConfig(filePath)
    return prettier.format(built, { ...loadedConfig, filepath: process.cwd() + '/output.ts' })
  } catch (err) {
    if (process.argv.includes('--debug')) {
      console.error(err.stack)
    }
    return built
  }
}

class Builder {
  private elems: Array<{ toString(): string }> = []

  public push(elem: { toString(): string }) {
    this.elems.push(elem)
  }

  public build() {
    return this.elems.map((x) => x.toString()).join('')
  }
}

class Name {
  private segments: string[]
  constructor(public registry: NameRegistry, segments: Array<string | undefined | null>) {
    this.segments = sanitizeParts(segments)
  }

  toString(length?: number): string {
    if (length) return camelcase(this.segments.slice(0, length).join(' ')).trim()
    for (let i = 1; i <= this.segments.length; ++i) {
      const candidate = this.toString(i)
      if (this.registry.names.every((n) => n === this || n.toString(i) !== candidate)) {
        return candidate
      }
    }
    return this.segments.join('')
  }
}

class NameRegistry {
  public names: Name[] = []

  public create(...parts: Array<string | undefined | null>) {
    const created = new Name(this, [...parts, this.names.length.toString()])
    this.names.push(created)
    return created
  }
}

function sanitizeParts(parts: Array<string | undefined | null>): string[] {
  return parts
    .filter((x): x is string => !!x)
    .map((str) => camelcase(str.replace(/[^a-zA-Z0-9]/g, ' ').replace(/\s{2,}/g, ' ')))
}

function camelcase(input: string) {
  return input.replace(/\s+[^\s]/g, (x) => x[x.length - 1].toUpperCase())
}

function convertSimpleSchema(schema: OpenAPIV3.SchemaObject, state: ConversionState): string {
  switch (schema.type) {
    case 'string':
      if (schema.enum) {
        state.enumUsed = true
        return `StringEnum([${schema.enum.map((x) => `'${x.replace(/'/g, "\\'")}'`).join(', ')}])`
      }
      return 'String'
    case 'number':
      return 'Number'
    case 'boolean':
      return 'Boolean'
    case 'array':
      return `[${convertSimpleSchema(handleRef(schema.items), state)}]`
    case 'integer':
      state.integerUsed = true
      return 'Integer'
    case 'object': {
      return 'String'
    }
    default:
      throw new Error('Cannot handle schema type ' + schema.type + ' from ' + JSON.stringify(schema))
  }
}

function convertSchema(schema: OpenAPIV3.SchemaObject, state: ConversionState): string {
  const numParts = (schema.allOf ? 1 : 0) + (schema.anyOf ? 1 : 0) + (schema.type ? 1 : 0)

  if (numParts > 1) {
    throw new Error('Cannot handle more than one of allOf, anyOf and type in a single schema at this time.')
  }

  if (schema.allOf) {
    return schema.allOf.map((nested) => `(${convertSchema(handleRef(nested), state)})`).join(' & ')
  }

  if (schema.anyOf) {
    return schema.anyOf.map((nested) => `(${convertSchema(handleRef(nested), state)})`).join(' | ')
  }
  switch (schema.type) {
    case 'string':
      if (schema.enum) {
        return `(${schema.enum.map((x) => `'${x.replace(/'/g, '\\')}'`).join(' | ')})`
      }
      return 'string'
    case 'number':
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'array':
      return `Array<${convertSchema(handleRef(schema.items), state)}>`
    case 'integer':
      return 'number'
    case 'object': {
      const builder = new Builder()
      builder.push('{')
      if (schema.properties) {
        for (const propName of Object.keys(schema.properties)) {
          const prop = schema.properties[propName]
          builder.push(`"${propName}": ${convertSchema(handleRef(prop), state)},
          `)
        }
      }
      builder.push('}')
      return builder.build()
    }
    default:
      throw new Error('Cannot handle schema type ' + schema.type + ' from ' + JSON.stringify(schema))
  }
}

function handleRef<T>(x: T): Exclude<T, { $ref: any }> {
  if ((x as any).$ref) throw new Error('Cannot handle refs at this time')
  return x as any
}

class SlowString {
  constructor(public value: string) {}

  toString() {
    return this.value
  }
}
