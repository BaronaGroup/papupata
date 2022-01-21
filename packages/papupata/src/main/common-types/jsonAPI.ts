import type { JSONApiType } from './jsonAPIType'

type StringParameterTypes = 'string' | 'boolean' | 'number' | 'date'

interface QueryParameter {
  name: string
  optional: boolean
  isArray?: boolean
  type: StringParameterTypes
  pattern?: string
  enum?: string[]
  description?: string
}

interface PathParameter {
  name: string
  type: StringParameterTypes
  pattern?: string
  enum?: string[]
  description?: string
}

export interface JSONAPI {
  name: string
  description?: string
  path: string
  method: string
  query: QueryParameter[]
  pathParams: PathParameter[]
  body?: JSONApiType | null
  response?: JSONApiType | null
  alternativeResponses: Array<{
    code: number
    description?: string
  }>
}

export type JSONAPISet = JSONAPI[]
