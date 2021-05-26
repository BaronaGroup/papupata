import { Response } from 'express'

interface ExtendedResponse extends Response {
  sentData: any
  sentPromise: Promise<void>
  __papupata204setup: boolean | undefined
}

export default function createMockResponse(): ExtendedResponse {
  let sent = false,
    resData: any = null,
    headers: any = {},
    resolveSent: () => void

  const sentPromise = new Promise<void>((resolve) => {
    resolveSent = resolve
  })

  const implemented: Partial<ExtendedResponse> = {
    send(data) {
      this.end(data)
      return this
    },
    status(code) {
      implemented.statusCode = code
      return this
    },

    sendStatus(status) {
      implemented.statusCode = status
      this.end()
      return this
    },
    statusCode: 200,

    redirect(statusOrTarget: number | string, statusOrTarget2?: string | number) {
      if (typeof statusOrTarget === 'number') {
        this.status(statusOrTarget)
        this.set('Location', statusOrTarget2?.toString())
      } else {
        this.status(statusOrTarget2 || 301)
        this.set('Location', statusOrTarget)
      }
    },

    json(data) {
      this.end(data)
      return this
    },

    jsonp(data) {
      this.end(data)
      return this
    },

    end(data?: any) {
      if (sent) throw new Error('Response already sent')
      sent = true
      resData = data
      resolveSent()
      return this
    },

    get sentData() {
      return resData
    },

    set(header: any, value?: any) {
      headers[header] = value
      return this
    },

    get(header) {
      return headers[header]
    },

    get headersSent() {
      return sent
    },
    sentPromise,
    __papupata204setup: undefined,
  }
  return new Proxy(implemented, {
    get(target, key) {
      if (key in target) {
        return (target as any)[key]
      }
      throw new Error(key.toString() + ' not implemented in mock response')
    },
  }) as ExtendedResponse
}
