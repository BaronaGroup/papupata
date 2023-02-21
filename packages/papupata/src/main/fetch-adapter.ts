import { MakeRequestAdapter } from './index'
import qs from 'qs'

const fetchAdapter: MakeRequestAdapter = async (method: string, url: string, query: any, body: any) => {
  const queryString = qs.stringify(query)
  let urlWithQuery = url + (queryString ? '?' + queryString : '')
  // @ts-ignore TS2304 -- expecting global fetch
  const response = await fetch(urlWithQuery, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(['get', 'head'].includes(method)
      ? {}
      : {
          body: JSON.stringify(body),
        }),
  })
  let contentType = response.headers.get('Content-Type')
  let responseBody: any
  if (contentType && contentType.includes('application/json')) {
    responseBody = await response.json()
  } else {
    responseBody = await response.text()
  }

  if (response.status >= 400) {
    throw new Error(JSON.stringify(responseBody))
  }
  return responseBody
}

export default fetchAdapter
