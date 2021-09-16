import TsType, { Complexity } from '../TsType'
import ts from 'typescript'
import { JSONApiType } from '../../../common-types'

export default class StringLiteral extends TsType {
  constructor(type: ts.Type) {
    super([], type)
  }

  private get literalValue() {
    return (this.type as ts.LiteralType).value
  }

  toTypeString(): string {
    return `"${this.literalValue}"`
  }

  toJSON(): JSONApiType {
    return {
      type: 'stringLiteral',
      value: this.literalValue as string,
      name: this.name,
    }
  }

  get complexity(): Complexity {
    return Complexity.Trivial
  }
}
