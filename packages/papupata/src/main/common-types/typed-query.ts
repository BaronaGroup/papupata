import { integerToken, regexStringToken, stringEnumToken } from './customQueryTypes'

type TypedQueryFieldType =
  | typeof String
  | typeof Number
  | typeof Boolean
  | typeof Date
  | { type: typeof regexStringToken; regex: RegExp }
  | { type: typeof integerToken }
  | { type: typeof stringEnumToken; values: ReadonlyArray<any> }

export type TypedQueryType = {
  [key: string]: TypedQueryFieldType | [TypedQueryFieldType]
}
