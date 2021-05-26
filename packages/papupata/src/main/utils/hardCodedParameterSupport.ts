import qs from 'qs'
import { Request as ExpressRequest } from 'express'
enum Variant {
  SPECIFIC_VALUE,
  PRESENT,
  NOT_PRESENT,
  NOT_SPECIFIC_VALUE,
}

interface Query {
  [name: string]: string
}

export function getQueryWithHardCodedParameters(hardCoded: HardCodedParameters, queryParams: Query): Query {
  if (!hardCoded.length) return queryParams

  const output = { ...queryParams }
  for (const parameter of hardCoded) {
    switch (parameter.variant) {
      case Variant.SPECIFIC_VALUE:
        if (parameter.name in queryParams && queryParams[parameter.name] !== parameter.value) {
          throw new Error(
            `The parameter ${parameter.name}, if present, is required to have the value "${parameter.value}" (given: "${
              output[parameter.name]
            }").`
          )
        }
        output[parameter.name] = parameter.value
        break
      case Variant.NOT_SPECIFIC_VALUE:
        if (output[parameter.name] === parameter.value) {
          throw new Error(`The parameter ${parameter.name} is not allowed to have the value ${parameter.value}.`)
        }
    }
  }
  return output
}

export type HardCodedParameters = Array<
  { name: string } & (
    | {
        variant: Variant.SPECIFIC_VALUE | Variant.NOT_SPECIFIC_VALUE
        value: string
      }
    | { variant: Variant.PRESENT | Variant.NOT_PRESENT }
  )
>

export function verifyHardCodedQueryParameterDeclarationLegality(
  hardCoded: HardCodedParameters,
  requiredQueryParamNames: readonly string[],
  optionalQueryParameterNames: readonly string[]
) {
  for (const hc of hardCoded) {
    switch (hc.variant) {
      case Variant.PRESENT:
        if (!requiredQueryParamNames.includes(hc.name)) {
          throw new Error(`Parameter ${hc.name} is required, yet not present as a declared query parameter`)
        }
        break
      case Variant.NOT_PRESENT:
        if (requiredQueryParamNames.includes(hc.name) || optionalQueryParameterNames.includes(hc.name)) {
          if (specificValueExistsFor(hc.name, hardCoded)) {
            // Forbidden can be combined with hard coded values, allowing for either option to be used
          } else {
            throw new Error('Parameter ' + hc.name + ' is forbidden, but present in the query parameter declarations.')
          }
        }
        break
      case Variant.SPECIFIC_VALUE:
        if (requiredQueryParamNames.includes(hc.name)) {
          throw new Error(
            'Parameter ' +
              hc.name +
              ' has a specific value and is not allowed to be required to be entered into the invocation.'
          )
        }
        break
    }
  }
}

export function extractHardCodedParameters(
  pathWithHardCodedQuery: string
): { path: string; hardCodedParameters: HardCodedParameters } {
  const questionMarkAt = pathWithHardCodedQuery.indexOf('?')
  if (questionMarkAt === -1) return { path: pathWithHardCodedQuery, hardCodedParameters: [] }

  const path = pathWithHardCodedQuery.slice(0, questionMarkAt)
  const fragments = pathWithHardCodedQuery.slice(questionMarkAt + 1).split('&')

  const hardCodedParameters = fragments.map((fragment) => {
    if (fragment.startsWith('!')) {
      return { name: fragment.substring(1), variant: Variant.NOT_PRESENT as const }
    }
    if (!fragment.includes('=')) {
      return { name: fragment, variant: Variant.PRESENT as const }
    } else {
      const parsed = qs.parse(fragment)
      const name = Object.keys(parsed)[0]
      const value = parsed[name]
      if (typeof value !== 'string') {
        throw new Error('Hard coded parameters must be strings')
      }
      if (name.endsWith('!')) {
        return {
          name: name.substring(0, name.length - 1),
          value,
          variant: Variant.NOT_SPECIFIC_VALUE as const,
        }
      } else {
        return {
          name,
          value,
          variant: Variant.SPECIFIC_VALUE as const,
        }
      }
    }
  })
  return { path, hardCodedParameters }
}

export function matchesHardCodedParameters(request: ExpressRequest, hardCoded: HardCodedParameters): boolean {
  if (!hardCoded.length) return true
  const { query } = request
  return hardCoded.every((hc) => {
    switch (hc.variant) {
      case Variant.SPECIFIC_VALUE:
        const rawQueryValue = query[hc.name]
        const queryValue = Array.isArray(rawQueryValue) ? rawQueryValue[rawQueryValue.length - 1] : rawQueryValue
        if (queryValue === hc.value) return true
        const queryValueStr = typeof queryValue === 'string' ? queryValue : undefined
        return queryValue !== undefined && specificValueExistsFor(hc.name, hardCoded, queryValueStr)
      case Variant.NOT_PRESENT:
        if (query[hc.name] === undefined) return true
        return specificValueExistsFor(hc.name, hardCoded) // specific value logic will take over from here if applicable

      case Variant.PRESENT:
        return query[hc.name] !== undefined
      case Variant.NOT_SPECIFIC_VALUE:
        return query[hc.name] !== hc.value
      default:
        throw new Error('Internal error')
    }
  })
}

function specificValueExistsFor(name: string, hardCoded: HardCodedParameters, value?: string) {
  return hardCoded.some(
    (hc) => hc.name === name && hc.variant === Variant.SPECIFIC_VALUE && (value === undefined || hc.value === value)
  )
}
