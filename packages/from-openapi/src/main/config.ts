import * as path from 'path'
import * as fs from 'fs'

const configFilenames = ['.papupata-from-openapi.json', '.papupata-from-openapi.js']

export type PapupataFromOpenapiConfig = {
  baseDirectory: string
  openapi: PapupataFromOpenapiConfigFile
}

export type SingleFileConfig = {
  openapiLocation: string
  outputTo: string | null // null for stdout
  exportName?: string
}
type PapupataFromOpenapiConfigFile = SingleFileConfig[]

export function loadConfig(): PapupataFromOpenapiConfig {
  const commandLineConfig = getConfigFromCommandLine()
  if (commandLineConfig) return commandLineConfig
  const configFile = findConfig()
  const configData = loadConfigFrom(configFile)
  return {
    baseDirectory: path.dirname(configFile),
    openapi: configData,
  }
}

function loadConfigFrom(filename: string): PapupataFromOpenapiConfigFile {
  if (filename.endsWith('.json')) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'))
  } else {
    const exported = require(filename)
    return exported.default ?? exported
  }
}

function findConfig() {
  const arg = process.argv.find((arg) => arg.startsWith('--config'))
  if (arg) {
    if (arg === '--config') {
      return process.argv[process.argv.indexOf(arg) + 1]
    } else {
      return arg.substring('--config='.length)
    }
  }
  const dir = process.cwd()
  return findConfigFrom(dir)
}

function findConfigFrom(dir: string): string {
  for (const candidate of configFilenames) {
    const fn = path.join(dir, candidate)
    if (fs.existsSync(fn)) return fn
  }
  const parent = path.resolve(dir, '..')
  if (parent !== dir) {
    return findConfigFrom(parent)
  }
  throw new Error('Failed to find config file.')
}

function getConfigFromCommandLine(): PapupataFromOpenapiConfig | null {
  const appArgs = process.argv.slice(2)

  const configTemp: PapupataFromOpenapiConfig = {
    baseDirectory: process.cwd(),
    openapi: [],
  }

  for (let i = 0; i < appArgs.length; ++i) {
    const arg = appArgs[i]
    if (arg.startsWith('-')) {
      switch (arg.split('=')[0]) {
        case '--config':
          return null // use the config file
        case '-e':
        case '--exportName':
          if (!configTemp.openapi.length) throw new Error('--exportName / -e must given after the source file')
          configTemp.openapi[0].exportName = arg.split('=')[1] ?? appArgs[++i]
      }
    } else {
      if (!configTemp.openapi.length) {
        configTemp.openapi.push({
          openapiLocation: arg,
          outputTo: null,
        })
      } else if (!configTemp.openapi[0].outputTo) {
        configTemp.openapi[0].outputTo = arg === '-' ? null : arg
      } else {
        throw new Error('Unexpected argument ' + arg)
      }
    }
  }
  if (!configTemp.openapi.length) return null
  return configTemp
}
