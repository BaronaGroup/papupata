import { TypedQueryType } from './main/responderTypes'
import toPairs from 'lodash/toPairs'
import fromPairs from 'lodash/fromPairs'
import PapupataValidationError from './PapupataValidationError'
import { integerToken, regexStringToken, StringEnum, stringEnumToken, StringMatching } from './customQueryTypes'

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
      if (!singleValue.match(/^((-|\+)?(\d+)(\.\d+)?)|-?Infinity|NaN$/)) {
        throw new PapupataValidationError(`${singleValue} is not a valid number for ${name}`)
      }
      return +singleValue
    case Date:
      return new Date(singleValue)
    default:
      if ('type' in targetType)
        switch (targetType.type) {
          case regexStringToken: {
            const actualType: ReturnType<typeof StringMatching> = targetType
            if (!singleValue.match(actualType.regex)) {
              throw new PapupataValidationError(`${singleValue} failed validation for ${name}`)
            }
            return singleValue
          }
          case integerToken: {
            if (!singleValue.match(/^(-|\+)?(\d+)$/)) {
              throw new PapupataValidationError(`${singleValue} is not a valid number for ${name}`)
            }
            return +singleValue
          }
          case stringEnumToken:
            const actualType: ReturnType<typeof StringEnum> = targetType
            if (!actualType.values.includes(singleValue)) {
              throw new PapupataValidationError(`${singleValue} failed validation for ${name}`)
            }
            return singleValue
        }
      throw new Error('Type conversion to ' + targetType + ' not supported.')
  }
}
