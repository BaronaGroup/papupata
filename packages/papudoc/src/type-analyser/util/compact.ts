export default function compact<T>(arr: T[]): Exclude<T, null | undefined>[] {
  return arr.filter((arr) => arr) as any
}
