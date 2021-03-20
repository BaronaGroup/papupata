import { TypedQueryType } from './main/responderTypes'
import toPairs from 'lodash/toPairs'
import fromPairs from 'lodash/fromPairs'
import PapupataValidationError from './PapupataValidationError'

export enum Mode {
  REQUIRED,
  OPTIONAL,
  LEGACY_BOOL,
}

export default function handleQueryParameterTypes(query: any, types: TypedQueryType, mode: Mode) {
  return {
    ...query,
    ...fromPairs(toPairs(types).map(([name, type]) => [name, convertValue(name, query[name], type, mode)])),
  }
}

function convertValue(name: string, value: any, targetType: any, mode: Mode): any {
  if (mode === Mode.OPTIONAL && value === undefined) return undefined
  if (!targetType) return value

  if (Array.isArray(targetType)) {
    const valueAsArray: any[] = Array.isArray(value) ? value : [value]
    return valueAsArray.map((item) => convertValue(name, item, targetType[0], mode))
  }

  switch (targetType) {
    case Boolean: {
      const bool = Array.isArray(value) ? value[0] : value
      if (bool !== 'false' && bool !== 'true' && bool !== '' && (bool !== undefined || mode !== Mode.LEGACY_BOOL)) {
        throw new PapupataValidationError(`${bool} is not a valid boolean for ${name}`)
      }
      return bool === 'true'
    }
    case String: {
      const str = Array.isArray(value) ? value[0] : value
      return str
    }
    default:
      throw new Error('Type conversion to ' + targetType + ' not supported.')
  }
}
