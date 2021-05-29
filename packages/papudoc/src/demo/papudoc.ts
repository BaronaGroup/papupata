import { PapudocConfig } from '../config'

const config: PapudocConfig = {
  baseDir: __dirname,
  globalTags: [],
  htmlOutput: false,
  openApiOutput: {
    filename: __dirname + '/../../output/openapi.json',
    base: {
      openapi: '3.0.0',
      info: { title: 'Demo API', version: '0.1.0' },
      servers: [{ url: 'https://example.com', description: 'Does not exist' }],
    },
  },
  sourceFiles: [__dirname + '/demoAPI.ts'],
  tsConfigFilename: __dirname + '/../../tsconfig.json',
}
export default config
