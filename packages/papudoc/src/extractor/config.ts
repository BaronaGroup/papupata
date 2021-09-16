export interface ExtractorConfig {
  moduleFilename: string
  tsConfigFilename?: string
  baseDir: string
  globalTags?: { name: string; value?: string }[]
}
