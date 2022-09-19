import { TypedQueryType } from './responderTypes'
import fromPairs from 'lodash/fromPairs'
import toPairs from 'lodash/toPairs'
import { integerToken, regexStringToken, StringEnum, stringEnumToken, StringMatching } from './common-types'
import { z, ZodTypeAny } from 'zod'

export enum Mode {
  REQUIRED,
  OPTIONAL,
  LEGACY_BOOL,
}

export function parametersToZodFields(types: TypedQueryType | string[], mode: Mode) {
  const fixedTypes = Array.isArray(types)
    ? fromPairs(types.map((type) => [type, mode === Mode.LEGACY_BOOL ? Boolean : String]))
    : types

  return fromPairs(toPairs(fixedTypes).map(([name, type]) => [name, toZod(type, mode)]))
}

function toZod(targetType: any, mode: Mode): ZodTypeAny {
  if (mode === Mode.LEGACY_BOOL) {
    return z
      .string()
      .optional()
      .transform((input) => input === 'true')
  }

  if (Array.isArray(targetType)) {
    return z
      .preprocess(
        (value) => (Array.isArray(value) ? (value.length ? value : []) : value === undefined ? undefined : [value]),
        z.array(toZod(targetType[0], mode))
      )
      .default([])
  }

  return applyOptional(
    z.preprocess(
      (arg) => (Array.isArray(arg) ? arg[arg.length - 1] : arg), // for non-arrays, only the last one applie
      getZodForSingleType()
    ),
    mode
  )

  function getZodForSingleType() {
    switch (targetType) {
      case Boolean: {
        return applyOptional(z.enum(['false', 'true', ''] as const), mode).transform((value) =>
          value === undefined ? undefined : value === 'true'
        )
      }
      case String: {
        return applyOptional(z.string(), mode)
      }
      case Number:
        return applyOptional(z.string().regex(/^((-|\+)?(\d+)(\.\d+)?)|-?Infinity|NaN$/), mode).transform(
          (value) => +value
        )
      case Date: {
        return applyOptional(
          z.preprocess((arg) => {
            if ((arg && typeof arg == 'string') || arg instanceof Date) return new Date(arg)
          }, z.date()),
          mode
        )
      }
      default:
        if ('type' in targetType)
          switch (targetType.type) {
            case regexStringToken: {
              const actualType: ReturnType<typeof StringMatching> = targetType
              return applyOptional(z.string().regex(actualType.regex), mode)
            }
            case integerToken: {
              return applyOptional(
                z
                  .string()
                  .regex(/^(-|\+)?(\d+)$/)
                  .transform((v) => +v),
                mode
              )
            }
            case stringEnumToken:
              const actualType: ReturnType<typeof StringEnum> = targetType
              return applyOptional(z.enum(actualType.values as [string, ...string[]]), mode)
          }
        throw new Error('Type conversion to ' + targetType + ' not supported.')
    }
  }
}

function applyOptional(type: ZodTypeAny, mode: Mode) {
  if (mode === Mode.OPTIONAL) return type.optional()
  return type
}
