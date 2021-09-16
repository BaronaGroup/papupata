import ts = require('typescript')
import { JSONApiType } from '../../common-types'

export type CreateReference = (toType: TSType, context: string[]) => void

let unknownCounter = 0

const genericNames = ['__type', '__object']

export enum Complexity {
  Trivial,
  Expression,
  Complex,
}

export interface RenderContext {
  linkedTypes: TSType[]
  withinComplex?: boolean
  inlineInterfaces: boolean
  useCanonicalNames: boolean
  renderNestedTypeString: (type: TSType) => string
  renderNestedJSON?: (type: TSType) => JSONApiType
  types: TSType[]
}

export default abstract class TSType {
  protected type: ts.Type
  public contextualNames: string[][]
  public nameOverride: string | null = null

  constructor(contextualName: null | string[], type: ts.Type) {
    this.contextualNames = contextualName && contextualName.length ? [contextualName] : []
    this.type = type
  }
  public refCount = 1

  public get name(): string {
    if (this.nameOverride) return this.nameOverride
    const naiveName = this.type.getSymbol()?.name
    if (naiveName && !genericNames.includes(naiveName)) return naiveName
    if (this.contextualNames.length) {
      return this.contextualNames.map((n) => n.join('_')).join('_')
    }
    return (this.nameOverride = 'Unknown' + ++unknownCounter)
  }

  public get hash() {
    return this.name.replace(/[^a-zA-Z0-9]/g, '_')
  }

  public abstract get complexity(): Complexity

  public abstract toTypeString(ctx: RenderContext): string
  public abstract toJSON(ctx: RenderContext): JSONApiType
}
