import { JSONAPISet } from '@papupata/common-types'
import { analyze } from './analyzer'
import { ExtractorConfig } from './config'
import generateJsonOutput from './generateJsonOutput'

export function generateAPISetJSON(config: ExtractorConfig, apiObjects: any[]): JSONAPISet {
  const analysis = analyze(config, apiObjects)
  return generateJsonOutput(analysis)
}
