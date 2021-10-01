import { PapupataFromOpenapiConfig } from './config'
import * as path from 'path'

export async function loadOpenapi(config: PapupataFromOpenapiConfig, location: string) {
  if (location.match(/^https?:\/\//)) {
    return location
  } else {
    return path.resolve(config.baseDirectory, location)
  }
}
