export type StringTupleElementTypes<T extends readonly string[]> = T extends ReadonlyArray<infer U> ? U : never

export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type ConvertLegacyQuery<T extends readonly string[], TOutputType> = {
  [K in StringTupleElementTypes<T>]: TOutputType
}

type NonArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? never : K
}[keyof T]

type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? K : never
}[keyof T]

export type PartialUnlessArray<T> = {
  [K in NonArrayKeys<T>]?: T[K]
} &
  {
    [K in ArrayKeys<T>]: T[K]
  }
