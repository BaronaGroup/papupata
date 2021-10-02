#!/usr/bin/env node

import SwaggerParser from '@apidevtools/swagger-parser'
import { loadConfig } from './config'
import { loadOpenapi } from './loadOpenapi'
import * as fs from 'fs'
import * as path from 'path'
import generate from './generate'

async function run() {
  const config = loadConfig()
  if (!config.openapi) {
    console.log('Nothing to do.')
    process.exit(2)
  }
  for (const openapi of config.openapi) {
    const parsed = await SwaggerParser.dereference(await loadOpenapi(config, openapi.openapiLocation))
    const generated = await generate(parsed as any, openapi, openapi.outputTo ?? process.cwd() + '/unspecified.ts')
    if (!openapi.outputTo) {
      console.log(generated)
    } else {
      const filename = path.resolve(process.cwd(), openapi.outputTo)
      fs.writeFileSync(filename, generated, 'utf-8')
      console.log('Wrote ' + filename)
    }
  }
}

run().catch((err) => {
  console.error(process.argv.includes('--debug') ? err.stack : err.message)
  process.exit(20)
})
