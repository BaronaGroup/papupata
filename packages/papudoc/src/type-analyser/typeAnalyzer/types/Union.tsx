import TsType, { Complexity, RenderContext } from '../TsType'
import ts from 'typescript'
import { AnalyserContext } from '../typeAnalyzer'
import { JSONApiType } from '../../../common-types'

export default class Union extends TsType {
  private innerTypes: TsType[]

  constructor(type: ts.Type, contextualName: string[], ctx: AnalyserContext) {
    super(contextualName, type)
    this.innerTypes = (type as ts.UnionOrIntersectionType).types.map((type, i) =>
      ctx.analyse([...contextualName, i.toString()], type)
    )
  }

  get complexity(): Complexity {
    return Complexity.Expression
  }

  toTypeString(ctx: RenderContext): string {
    const needsParens = (inner: string) => !inner.match(/^[a-zA-Z0-9_]$/)

    return this.innerTypes
      .map((innerType) => {
        const inner = ctx.renderNestedTypeString(innerType)
        return needsParens(inner) ? `(${inner})` : inner
      })
      .join(' | ')
  }

  toJSON(ctx: RenderContext): JSONApiType {
    return {
      type: 'union',
      unionOf: this.innerTypes.map((inner) => ctx.renderNestedJSON!(inner)),
      name: this.name,
    }
  }
}
