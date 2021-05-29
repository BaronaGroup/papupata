import TsType, { Complexity } from '../TsType'
import ts from 'typescript'
import { JSONApiType } from '@papupata/common-types'

export default class EnumLiteralType extends TsType {
  constructor(type: ts.Type) {
    super([], type)
  }

  toTypeString(): string {
    return Array.from(((this.type.getSymbol()?.exports?.entries?.() as any) as [string, any][]) ?? [])
      .map((entry, i) => {
        const initializer = entry[1].valueDeclaration?.initializer
        return !initializer ? i : initializer.kind === 8 ? +initializer.text : "'" + initializer.text + "'"
      })
      .join(' | ')
  }

  toJSON(): JSONApiType {
    const { type } = this
    const options = Array.from(((type.getSymbol()?.exports?.entries?.() as any) as [string, any][]) ?? []).map(
      (entry, i) => {
        const initializer = entry[1].valueDeclaration?.initializer
        return {
          label: entry[0],
          value: !initializer ? i : initializer.kind === 8 ? +initializer.text : initializer.text,
        }
      }
    )
    const name = type.getSymbol()?.name!
    if (options.some((o) => typeof o.value === 'number')) {
      return { name, type: 'numberEnum', options }
    }

    return { name, type: 'stringEnum', options }
  }

  get complexity(): Complexity {
    return Complexity.Expression
  }
}
