import { Analysis, AnalyzedAPI } from './analyzer'
import { integerToken, JSONAPI, JSONAPISet, regexStringToken, stringEnumToken, TypedQueryType } from '../common-types'
import { getAlternativeResponses } from './tags'

type QueryParameter = JSONAPI['query'][number]

export default function generateJsonOutput(analysis: Analysis): JSONAPISet {
  return analysis.map((api) => {
    return {
      name: api.api.path.join('.'),
      description: api.description,
      path: api.url,
      method: api.method,
      query: composeQueryParameters(api),
      pathParams: Object.entries(api.params).map(([name, type]) => ({
        name,
        ...getType(type),
        ...tagDetails(name, api),
      })),
      body: api.bodyJSONType,
      response: api.responseJSONType,
      alternativeResponses: getAlternativeResponses(api.tags),
      deprecated: api.tags.some((t) => t.name === 'deprecated'),
    }
  })
}

function composeQueryParameters(analysis: AnalyzedAPI) {
  return [
    ...Object.entries(analysis.query).map(([name, q]) => ({
      name,
      optional: false,
      ...getType(q),
      ...tagDetails(name, analysis),
    })),
    ...Object.entries(analysis.optionalQuery).map(([name, q]) => ({
      name,
      optional: true,
      ...getType(q),
      ...tagDetails(name, analysis),
    })),
    ...Object.entries(analysis.boolQuery).map(([name, q]) => ({
      name,
      optional: false,
      ...getType(q),
      ...tagDetails(name, analysis),
    })),
  ]
}

function tagDetails(name: string, analysis: AnalyzedAPI) {
  const tags = analysis.parameterTags.find((t) => t.name === name)
  if (!tags) return {}

  return {
    description: tags.tags.find((t) => t.name === 'description')?.text,
    deprecated: !!tags.tags.find((t) => t.name === 'deprecated'),
  }
}

function getType(type: TypedQueryType[string]): Omit<QueryParameter, 'name' | 'optional'> {
  if (type === String) return { type: 'string' }
  if (type === Boolean) return { type: 'boolean' }
  if (type === Number) return { type: 'number' }
  if (type === Date) return { type: 'date' }
  if (Array.isArray(type)) {
    return { ...getType(type[0]), isArray: true }
  }
  if ('type' in type) {
    switch (type.type) {
      case regexStringToken: {
        const regexStr = type.regex.toString()
        return {
          type: 'string',
          pattern: regexStr.substring(1, regexStr.length - 1),
        }
      }
      case integerToken:
        return { type: 'number', pattern: '^[0-9]+$' }
      case stringEnumToken:
        return { type: 'string', enum: type.values.map((v) => v.toString()) }
    }
  }
  throw new Error('Cannot handle type ' + type)
}
