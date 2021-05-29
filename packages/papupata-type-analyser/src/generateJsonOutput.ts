import { JSONApiType } from '@papupata/common-types'
import TSType, { RenderContext } from './typeAnalyzer/TsType'
import uniqueId from './util/uniqueId'

export default function generateJsonOutput(type: TSType): JSONApiType {
  const renderContext: RenderContext = {
    useCanonicalNames: false,
    inlineInterfaces: true,
    types: [type],
    linkedTypes: [],

    renderNestedTypeString(this: RenderContext) {
      throw new Error('String renderering not supported with this context')
    },

    renderNestedJSON(this: RenderContext, type: TSType) {
      return type.toJSON(this)
    },
  }

  const topLevelTypes: JSONApiType[] = []
  while (renderContext.types.length) {
    const toRender = renderContext.types.shift()
    topLevelTypes.push(toRender!.toJSON(renderContext))
  }
  if (topLevelTypes.length === 0) return topLevelTypes[0]

  return {
    type: 'typeNamingWrapper',
    mainType: topLevelTypes[0],
    namedTypes: topLevelTypes.slice(1),
    name: uniqueId(),
  }
}
