import { JSONAPI, JSONApiType, OpenApiConfig } from '../common-types'
import * as fs from 'fs'
import convertJSONAPIType from '../json-to-schema'

export function generateOpenApi(config: OpenApiConfig, apis: JSONAPI[]) {
  const openAPI = { ...config.base }
  if (!openAPI.paths) openAPI.paths = {}

  for (const api of apis) {
    const path = fixPath(api.path)
    if (!openAPI.paths[path]) openAPI.paths[path] = {}
    openAPI.paths[path][api.method.toLowerCase()] = {
      description: api.description,
      summary: api.name,
      'x-papupata-name': api.name,
      operationId: api.name,
      deprecated: api.deprecated || undefined,
      responses: {
        200: {
          description: 'Success',
          content: {
            [determineContentType(api.response)]: {
              schema: asSchema(api.response),
            },
          },
        },
        ...getAlternativeResponses(api),
      },
      parameters: [
        ...api.pathParams.map((param) => ({
          name: param.name,
          in: 'path',
          schema: getSchema(param),
          required: true,
          description: param.description,
          deprecated: param.deprecated || undefined,
        })),
        ...api.query.map((q) => ({
          name: q.name,
          in: 'query',
          required: !q.optional && !q.isArray,
          schema: getSchema(q),
          description: q.description,
          deprecated: q.deprecated || undefined,
        })),
      ],
      requestBody: api.body
        ? {
            content: {
              [determineContentType(api.body)]: {
                schema: asSchema(api.body),
              },
            },
          }
        : undefined,
    }
  }

  fs.writeFileSync(config.filename, JSON.stringify(openAPI, null, 2), 'utf-8')

  function determineContentType(type: JSONApiType | null | undefined) {
    const vagueTypes = ['undefined', 'null', 'void', 'unknown', 'any']
    const textTypes = ['string', 'number', 'boolean', 'stringLiteral', 'numberLiteral', 'booleanLiteral']
    if (!type || vagueTypes.includes(type.type)) return '*/*'
    if (textTypes.includes(type.type)) return config.textContentType || 'text/plain'
    return config.objectContentType || 'application/json'
  }
}

function asSchema(type: JSONApiType | null | undefined) {
  if (!type) return undefined
  return convertJSONAPIType(type, 'OpenAPI')
}

function fixPath(path: string) {
  return path.replace(/(?<=\/):([^/]+)/, '{$1}')
}

function getAlternativeResponses(api: JSONAPI) {
  const sorted = api.alternativeResponses.sort((a, b) => b.code - a.code)
  const responses: any = {}
  for (const entry of sorted) {
    responses[entry.code] = { description: entry.description ?? 'No description.' }
  }
  return responses
}

function getSchema(parameter: JSONAPI['query'][number] | JSONAPI['pathParams'][number]): any {
  if ('isArray' in parameter && parameter.isArray) {
    return {
      type: 'array',
      items: getSchema({ ...parameter, isArray: false }),
    }
  }
  const { enum: enumType, pattern } = parameter
  const common = { enum: enumType, pattern }

  switch (parameter.type) {
    case 'string':
      return { ...common, type: 'string', ...common }
    case 'boolean':
      return { ...common, type: 'string', enum: common.enum ?? ['true', 'false'] }
    case 'number':
      return { ...common, type: 'string', pattern: common.pattern || '^[0-9]+(.[0-9]+)?$' }
    case 'date':
      return {
        ...common,
        type: 'string',
        pattern: common.pattern ?? '^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d.\\d\\d\\d(Z|[+-]\\d\\d(:?\\d\\d)?)$',
      }
    default:
      throw new Error('OpenAPI conversion cannot handle type ' + parameter.type)
  }
}
