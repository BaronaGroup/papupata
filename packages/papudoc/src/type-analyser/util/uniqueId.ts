import { randomBytes } from 'crypto'

export default function uniqueId() {
  return randomBytes(32).toString('hex')
}
