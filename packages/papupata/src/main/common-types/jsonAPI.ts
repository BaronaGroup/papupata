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
  deprecated?: boolean
}

interface PathParameter {
  name: string
  type: StringParameterTypes
  pattern?: string
  enum?: string[]
  description?: string
  deprecated?: boolean
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
  deprecated?: boolean
}

export type JSONAPISet = JSONAPI[]
