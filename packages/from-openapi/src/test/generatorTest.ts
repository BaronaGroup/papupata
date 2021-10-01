import { loadOpenapi } from '../main/loadOpenapi'
import generate from '../main/generate'
import SwaggerParser from '@apidevtools/swagger-parser'

export function generatorTest(filename: string) {
  return async () => {
    expect(
      await generate(
        (await SwaggerParser.dereference(
          await loadOpenapi(
            {
              baseDirectory: __dirname,
              openapi: [],
            },
            filename
          )
        )) as any,
        { openapiLocation: 'irrelevant', outputTo: 'irrelevant' },
        filename
      )
    ).toMatchSnapshot()
  }
}
