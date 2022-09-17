import { TypedQueryType } from './responderTypes'
import toPairs from 'lodash/toPairs'
import fromPairs from 'lodash/fromPairs'
import PapupataValidationError from './PapupataValidationError'
import { integerToken, regexStringToken, StringEnum, stringEnumToken, StringMatching } from './common-types'

export enum Mode {
  REQUIRED,
  OPTIONAL,
  LEGACY_BOOL,
}

export default function handleQueryParameterTypes(
  query: any,
  types: TypedQueryType | string[],
  mode: Mode,
  context: 'query' | 'params'
) {
  const fixedTypes = Array.isArray(types)
    ? fromPairs(types.map((type) => [type, mode === Mode.LEGACY_BOOL ? Boolean : String]))
    : types

  return {
    ...query,
    ...fromPairs(
      toPairs(fixedTypes).map(([name, type]) => [name, convertValue(name, query[name], type, mode, [context, name])])
    ),
  }
}

function convertValue(name: string, value: any, targetType: any, mode: Mode, path: Array<string | number>): any {
  if (mode === Mode.LEGACY_BOOL) {
    return value === 'true'
  }
  if (value === undefined) {
    if (Array.isArray(targetType)) return []
    if (mode === Mode.OPTIONAL) return undefined
    throw PapupataValidationError.fromMessageAndPath(`${name} is required`, path)
  }

  if (!targetType) return value

  if (Array.isArray(targetType)) {
    const valueAsArray: any[] = Array.isArray(value) ? value : [value]
    return valueAsArray.map((item, index) => convertValue(name, item, targetType[0], mode, [...path, index]))
  }

  const singleValue = Array.isArray(value) ? value[value.length - 1] : value

  if (typeof singleValue !== 'string')
    throw new Error(`Query parameters must be strings; got a ${typeof singleValue} (${singleValue})`)

  switch (targetType) {
    case Boolean: {
      const bool = singleValue
      if (bool !== 'false' && bool !== 'true' && bool !== '') {
        throw PapupataValidationError.fromMessageAndPath(`${bool} is not a valid boolean for ${name}`, path)
      }
      return bool === 'true'
    }
    case String: {
      return singleValue
    }
    case Number:
      if (!singleValue.match(/^((-|\+)?(\d+)(\.\d+)?)|-?Infinity|NaN$/)) {
        throw PapupataValidationError.fromMessageAndPath(`${singleValue} is not a valid number for ${name}`, path)
      }
      return +singleValue
    case Date: {
      const date = new Date(singleValue)
      if (isNaN(date.valueOf()))
        throw PapupataValidationError.fromMessageAndPath(`${singleValue} is not a valid date for ${name}`, path)
      return date
    }
    default:
      if ('type' in targetType)
        switch (targetType.type) {
          case regexStringToken: {
            const actualType: ReturnType<typeof StringMatching> = targetType
            if (!singleValue.match(actualType.regex)) {
              throw PapupataValidationError.fromMessageAndPath(`${singleValue} failed validation for ${name}`, path)
            }
            return singleValue
          }
          case integerToken: {
            if (!singleValue.match(/^(-|\+)?(\d+)$/)) {
              throw PapupataValidationError.fromMessageAndPath(
                `${singleValue} is not a valid integer for ${name}`,
                path
              )
            }
            return +singleValue
          }
          case stringEnumToken:
            const actualType: ReturnType<typeof StringEnum> = targetType
            if (!actualType.values.includes(singleValue)) {
              throw PapupataValidationError.fromMessageAndPath(`${singleValue} failed validation for ${name}`, path)
            }
            return singleValue
        }
      throw new Error('Type conversion to ' + targetType + ' not supported.')
  }
}
