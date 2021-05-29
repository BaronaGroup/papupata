import { papudoc } from 'papupata'
type Handler = (api: any) => void

export function setPapudocHandler(newHandler: Handler | null) {
  papudoc(newHandler)
}
