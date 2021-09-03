import * as fs from 'fs'
import * as path from 'path'
import { OpenApiConfig } from './common-types'
import getRequireableFilename from './getRequirableFilename'

const MAX_DEPTH = 100

export interface PapudocConfig {
  outDir?: string
  sourceFiles: string[]
  baseDir?: string
  tsConfigFilename?: string
  JSONOutput?: string
  htmlOutput?: boolean
  apidocOutput?: string
  openApiOutput?: OpenApiConfig
  globalTags?: { name: string; value?: string }[]
}

const standaloneConfigFilenames = [
  'papudoc-config.ts',
  'papudoc-config.js',
  'papudoc-config.json',
  'papudoc.ts',
  'papudoc.js',
  'papudoc.json',
]

export function loadConfig(filename?: string): PapudocConfig {
  const actualFilename = filename || findConfig()

  const baseDir = path.dirname(getRequireableFilename(process.cwd(), actualFilename))
  if (actualFilename.endsWith('package.json')) {
    return {
      ...JSON.parse(fs.readFileSync(actualFilename, 'utf8')).papudoc,
      baseDir,
    }
  }
  if (actualFilename.endsWith('.json')) {
    return { ...JSON.parse(fs.readFileSync(actualFilename, 'utf8')), baseDir }
  }
  if (actualFilename.match(/\.[jt]sx?$/)) {
    const exported = require(getRequireableFilename(process.cwd(), actualFilename))
    if (exported.default)
      return {
        ...exported.default,
        baseDir,
      }
    return { ...exported, baseDir }
  }

  throw new Error('Unknown config extension in ' + actualFilename)
}

function findConfig(findFrom = process.cwd(), atDepth = 0): string {
  if (atDepth === MAX_DEPTH) throw new Error('Failed to find papudoc config.')

  const found = standaloneConfigFilenames.map((fn) => path.join(findFrom, fn)).find((fn) => fs.existsSync(fn))

  if (found) return found

  const packageJson = path.join(findFrom, 'package.json')
  if (fs.existsSync(packageJson)) {
    const packageData = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
    if (packageData.papudoc) return packageJson
  }

  return findConfig(path.join(findFrom, '..'), atDepth + 1)
}
