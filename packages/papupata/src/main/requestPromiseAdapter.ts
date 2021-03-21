import { MakeRequestAdapter } from './index'
import requestPromise from 'request-promise'

export default function createRequestAdapter(bodyType: 'json' | 'form'): MakeRequestAdapter {
  return async (method: string, url: string, query: any, body: any) => {
    const isPlainBody = typeof body !== 'object'
    const actualBodyType = isPlainBody ? 'body' : bodyType === 'json' ? 'body' : bodyType
    const response = await requestPromise({
      method,
      url,
      qs: query,
      body,
      json: !isPlainBody,
      [actualBodyType]: body,
      resolveWithFullResponse: true,
      headers: {
        'Content-Type': isPlainBody ? 'text/plain' : 'application/json',
      },
    })
    if (response.headers['content-type']?.includes('application/json') && typeof response.body === 'string') {
      return JSON.parse(response.body)
    } else {
      return response.body
    }
  }
}
