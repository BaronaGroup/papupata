export type SimpleJSONApiType = {
  type: 'string' | 'number' | 'boolean' | 'undefined' | 'null' | 'void' | 'unknown' | 'never' | 'any' | 'date'
}

export interface StringLiteralApiType {
  type: 'stringLiteral'
  value: string
}

export interface NumberLiteralApiType {
  type: 'numberLiteral'
  value: number
}

export interface BooleanLiteralApiType {
  type: 'booleanLiteral'
  value: boolean
}

export interface TypeNamingWrapper {
  type: 'typeNamingWrapper'
  mainType: JSONApiType
  namedTypes: JSONApiType[]
}
export interface UnionApiType {
  type: 'union'
  unionOf: JSONApiType[]
}

export interface ArrayApiType {
  type: 'array'
  itemType: JSONApiType
}

export interface ObjectApiType {
  type: 'object'
  properties: Array<{
    name: string
    description?: string
    required: boolean
    type: JSONApiType
  }>
}

export interface StringEnumType {
  type: 'stringEnum'
  options: { label: string; value: string }[]
}

export interface NumberEnumType {
  type: 'numberEnum'
  options: { label: string; value: number }[]
}

export type EnumType = StringEnumType | NumberEnumType

export type JSONApiType = (
  | SimpleJSONApiType
  | TypeNamingWrapper
  | StringLiteralApiType
  | NumberLiteralApiType
  | BooleanLiteralApiType
  | UnionApiType
  | ArrayApiType
  | ObjectApiType
  | EnumType
) & { name: string }
