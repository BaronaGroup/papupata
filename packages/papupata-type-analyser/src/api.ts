import generateJsonOutput from './generateJsonOutput'
import { JSONApiType } from '@papupata/common-types'
import ts from 'typescript'
import { prepareTsTypeConverter } from './typeAnalyzer/typeAnalyzer'
import TSTypeClass from './typeAnalyzer/TsType'
import generateStringOutput, { ExposeTypesAs } from './generateStringOutput'

export function generateTypeJSON(
  type: ts.Type,
  typeChecker: ts.TypeChecker,
  contextualName: string[] = []
): JSONApiType {
  const converter = prepareTsTypeConverter(typeChecker)

  return generateJsonOutput(converter(contextualName, type))
}

export function generateTypeString(
  type: ts.Type,
  typeChecker: ts.TypeChecker,
  contextualName: string[] = [],
  exposeTypeAs: ExposeTypesAs = 'Inline'
): string {
  return generateStringOutput(type, typeChecker, contextualName, exposeTypeAs)
}

export type TSType = typeof TSTypeClass
