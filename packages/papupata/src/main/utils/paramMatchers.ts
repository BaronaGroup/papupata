import { TypedQueryType } from '../responderTypes'

export const paramMatchers = (params: TypedQueryType) =>
  Object.keys(params).map((param) => ({
    name: param,
    matcher: new RegExp(`(^|/):${param}($|/)`),
  }))
