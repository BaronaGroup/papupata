import * as path from 'path'

export default function getRequireableFilename(dir: string, filename: string) {
  if (filename.startsWith('/')) return filename // absolute
  return path.join(dir, filename)
}
