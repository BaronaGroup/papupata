import type { JSONApiType as JSONApiTypeImpl } from './jsonAPIType'
import type { JSONAPISet as Set, JSONAPI as API } from './jsonAPI'

export type JSONApiType = JSONApiTypeImpl
export type JSONAPI = API
export type JSONAPISet = Set

export * from './typed-query'
export * from './customQueryTypes'
export * from './OpenApiConfig'
