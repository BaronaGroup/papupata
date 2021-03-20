// This type is used in failure cases to give a better error message, technically it could just be replaced with "never"
export type DeclareRoutePartsAsConstArraysPlease = { 'must-be-const': never }

export type StringTupleElementTypes<T extends readonly string[]> = T extends ReadonlyArray<infer U> ? U : never

export type ActualTypeMap<TKeys extends string, TValues> = {
  [key in TKeys]: string extends TKeys ? DeclareRoutePartsAsConstArraysPlease : TValues
}

export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type ConvertLegacyQuery<T extends readonly string[], TOutputType> = {
  [K in StringTupleElementTypes<T>]: TOutputType
}
