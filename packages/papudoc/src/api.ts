import { loadConfig, PapudocConfig } from './config'
import getRequireableFilename from 'common-utils/lib/getRequirableFilename'
import * as path from 'path'
import * as fs from 'fs'
import { generateAPISetJSON } from 'papupata-extractor'
import { JSONAPISet } from '@papupata/common-types'
import { locator } from './locator'
import { generateOpenApi } from 'papupata-openapi-generator'

export function generatePapudoc(configOrConfigFile?: string | PapudocConfig) {
  const config: PapudocConfig =
    !configOrConfigFile || typeof configOrConfigFile === 'string' ? loadConfig(configOrConfigFile) : configOrConfigFile

  const analysisSet = config.sourceFiles.map((filename) => {
    let moduleFilename = getRequireableFilename(config.baseDir || process.cwd(), filename)
    return generateAPISetJSON(
      {
        moduleFilename,
        tsConfigFilename: config.tsConfigFilename,
        baseDir: config.baseDir!,
        globalTags: config.globalTags,
      },
      locator(moduleFilename)
    )
  })

  const analysis = combineAnalysis(analysisSet)
  if (config.htmlOutput) {
    // generateFront(path.resolve(process.cwd(), config.baseDir || '', config.outDir || './papudoc'), analysis)
  }

  if (config.JSONOutput) {
    const jsonFile = path.join(process.cwd(), config.baseDir || '', config.JSONOutput)
    fs.writeFileSync(jsonFile, JSON.stringify(analysis, null, 2), 'utf8')
  }

  if (config.apidocOutput) {
    //generateAPIDoc(config.apidocOutput, analysis)
    throw new Error('APIDoc not supported')
  }

  if (config.openApiOutput) {
    generateOpenApi(config.openApiOutput, analysis)
  }
}

function combineAnalysis(analysisSet: JSONAPISet[]) {
  return ([] as JSONAPISet).concat(...analysisSet)
}
