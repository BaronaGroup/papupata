import { JSONApiType } from '../common-types'

export type JsonSchemaVariant = 'OpenAPI' | 'JSONSchemaDraft07'

const schemaTypes = {
  OpenAPI: undefined,
  JSONSchemaDraft07: 'http://json-schema.org/draft-07/schema#',
}

export default function convertJSONAPIType(apiType: JSONApiType, variant: JsonSchemaVariant) {
  return {
    $schema: schemaTypes[variant],
    ...convertType(apiType),
  }
}

function convertType(apiType: JSONApiType): any {
  switch (apiType.type) {
    case 'any':
    case 'void':
      return {}
    case 'number':
    case 'boolean':
    case 'string':
      return { type: apiType.type }
    case 'stringLiteral':
      return { type: 'string', enum: [apiType.value] }
    case 'object': {
      let required = apiType.properties.filter((p) => p.required).map((p) => p.name)
      return {
        type: 'object',
        properties: fromPairs(
          apiType.properties.map((property) => [
            property.name,
            {
              ...convertType(property.type),
              description: property.description,
              deprecated: property.deprecated ? true : undefined,
            },
          ])
        ),
        required: required.length ? required : undefined,
        additionalProperties: false,
      }
    }
    case 'array':
      return {
        type: 'array',
        items: convertType(apiType.itemType),
      }
    case 'typeNamingWrapper':
      if (apiType.namedTypes.length) throw new Error('Named types not supported at this time')
      return convertType(apiType.mainType)
    case 'union':
      return {
        anyOf: apiType.unionOf.map(convertType),
      }
    case 'date':
      return {
        type: 'string',
        format: 'date-time',
      }
    case 'stringEnum':
      return { type: 'string', enum: apiType.options.map((option) => option.value) }
    case 'numberEnum':
      return { type: 'number', enum: apiType.options.map((option) => option.value) }
    default:
      throw new Error('Unhandled type: ' + apiType.type)
  }
}

function fromPairs<T>(pairs: Array<[string, T]>): { [key: string]: T } {
  const out: { [key: string]: T } = {}
  for (const pair of pairs) {
    out[pair[0]] = pair[1]
  }
  return out
}
