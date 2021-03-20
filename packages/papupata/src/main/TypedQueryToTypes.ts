import { integerToken, regexStringToken } from '../customQueryTypes'

type GetType<T> = T extends { new (...args: any): any }
  ? InstanceType<T> extends String
    ? string
    : InstanceType<T> extends Number
    ? number
    : InstanceType<T> extends Boolean
    ? boolean
    : InstanceType<T> extends Date
    ? Date
    : never
  : T extends { type: typeof regexStringToken; regex: RegExp }
  ? string
  : T extends { type: typeof integerToken }
  ? number
  : never

type SingleMapper<T> = T extends { new (...args: any): any } | { type: any }
  ? GetType<T>
  : T extends any[]
  ? Array<SingleMapper<T[number]>>
  : never

export type TypedQueryToTypes<T> = {
  [K in keyof T]: SingleMapper<T[K]>
}
