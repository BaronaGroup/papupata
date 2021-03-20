type GetType<T extends { new (...args: any): any }> = InstanceType<T> extends String
  ? string
  : InstanceType<T> extends Number
  ? number
  : InstanceType<T> extends Boolean
  ? boolean
  : InstanceType<T> extends Date
  ? Date
  : never

type SingleMapper<T> = T extends { new (...args: any): any }
  ? GetType<T>
  : T extends any[]
  ? Array<SingleMapper<T[number]>>
  : never

export type TypedQueryToTypes<T> = {
  [K in keyof T]: SingleMapper<T[K]>
}
