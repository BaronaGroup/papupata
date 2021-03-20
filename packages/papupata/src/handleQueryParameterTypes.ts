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
  if (value === undefined) {
    if (mode === Mode.OPTIONAL) return undefined
    if (mode === Mode.REQUIRED) throw new PapupataValidationError(`${name} is required`)
  }

  if (!targetType) return value

  if (Array.isArray(targetType)) {
    const valueAsArray: any[] = Array.isArray(value) ? value : [value]
    return valueAsArray.map((item) => convertValue(name, item, targetType[0], mode))
  }

  const singleValue = Array.isArray(value) ? value[0] : value

  switch (targetType) {
    case Boolean: {
      const bool = singleValue
      if (bool !== 'false' && bool !== 'true' && bool !== '' && (bool !== undefined || mode !== Mode.LEGACY_BOOL)) {
        throw new PapupataValidationError(`${bool} is not a valid boolean for ${name}`)
      }
      return bool === 'true'
    }
    case String: {
      return singleValue
    }
    case Number:
      if (!singleValue.match(/^(-|\+)?(\d+)(\.\d+)?$/)) {
        throw new PapupataValidationError(`${singleValue} is not a valid number for ${name}`)
      }
      return +singleValue
    default:
      throw new Error('Type conversion to ' + targetType + ' not supported.')
  }
}
