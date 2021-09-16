import ts = require('typescript')
import typeAnalyzer from './typeAnalyzer/typeAnalyzer'
import TsType, { RenderContext } from './typeAnalyzer/TsType'

export type ExposeTypesAs = 'Inline' | 'GeneratedNames' | 'CanonicalNames'

export default function generateStringOutput(
  type: ts.Type,
  checker: ts.TypeChecker,
  contextualName: string[],
  exposeTypesAs: ExposeTypesAs
) {
  const tree = typeAnalyzer(contextualName, type, checker)
  const renderContext =
    exposeTypesAs === 'Inline'
      ? createStringInlineRenderContext(tree)
      : createStringReferencingRenderContext(tree, exposeTypesAs === 'CanonicalNames')
  let output = ''
  while (renderContext.types.length) {
    const toRender = renderContext.types.shift()
    output += toRender!.toTypeString(renderContext)
  }
  return output
}

function createStringInlineRenderContext(rootType: TsType): RenderContext {
  return {
    useCanonicalNames: false,
    inlineInterfaces: true,
    types: [rootType],
    linkedTypes: [],

    renderNestedTypeString(this: RenderContext, type) {
      return type.toTypeString(this)
    },
  }
}

function createStringReferencingRenderContext(rootType: TsType, useCanonicalNames: boolean): RenderContext {
  return {
    useCanonicalNames,
    inlineInterfaces: true,
    types: [rootType],
    linkedTypes: [],
    renderNestedTypeString(this: RenderContext, type) {
      // TODO: add support for references
      return type.toTypeString(this)
    },
  }
}
