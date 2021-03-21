import { PapupataMiddleware } from './config'

const middleware204: PapupataMiddleware<any, any> = async (_req, res: any, _route, next) => {
  let statusCode = res.statusCode,
    statusCodeSet = false

  if (!res.__papupata204setup) {
    Object.defineProperty(res, 'statusCode', {
      enumerable: true,
      get() {
        return statusCode
      },
      set(newStatusCode: number) {
        statusCode = newStatusCode
        statusCodeSet = true
      },
    })
    res.__papupata204setup = true
  }

  const response = await next()
  if (response === undefined) {
    if (!res.headersSent) {
      if (!statusCodeSet) {
        res.status(204)
      }
      res.end()
    }
  } else {
    return response
  }
}

export default middleware204
