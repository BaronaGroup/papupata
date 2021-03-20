export type StringTupleElementTypes<T extends readonly string[]> = T extends ReadonlyArray<infer U> ? U : never

export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type ConvertLegacyQuery<T extends readonly string[], TOutputType> = {
  [K in StringTupleElementTypes<T>]: TOutputType
}
