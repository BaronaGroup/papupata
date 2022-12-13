import { ZodError, ZodIssue } from 'zod'

export default class PapupataValidationError extends ZodError {
  private constructor(issues: ZodIssue[]) {
    super(issues)
  }

  static fromMessageAndPath(message: string, path: Array<string | number>) {
    return new PapupataValidationError([{ code: 'custom', path, message }])
  }

  static fromZodError(error: ZodError) {
    return new PapupataValidationError(error.issues)
  }
}
