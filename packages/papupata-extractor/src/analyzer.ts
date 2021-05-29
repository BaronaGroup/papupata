import * as ts from 'typescript'
import { JSDocTagInfo } from 'typescript'
import { generateTypeJSON, generateTypeString } from 'papupata-type-analyser'
import { ExtractorConfig } from './config'
import getRequireableFilename from 'common-utils/lib/getRequirableFilename'
import { JSONApiType, TypedQueryType } from '@papupata/common-types'
import { getTagText, getTagTexts, Tag } from './tags'

export type Analysis = ReturnType<typeof analyze>

interface FoundValue {
  symbol: ts.Symbol
  tags: Tag[]
}

export interface AnalyzedAPI {
  api: API
  url: string
  params: TypedQueryType
  query: TypedQueryType
  optionalQuery: TypedQueryType
  boolQuery: TypedQueryType
  body: string
  response: string
  responseType: ts.Type | null
  responseJSONType: JSONApiType | null

  bodyType: ts.Type | null
  bodyJSONType: JSONApiType | null
  method: string
  checker: ts.TypeChecker
  parameterDescriptions: Map<string, string | undefined>
  description?: string
  tags: Tag[]
}

export function analyze(config: ExtractorConfig, apiObjects: any[]) {
  const filename = config.moduleFilename
  let papudocIndex = -1
  const tsconfig = getTsConfigFilename(config)
  const compilerOptions: ts.CompilerOptions = ts.convertCompilerOptionsFromJson(require(tsconfig), __dirname + '/..')
    .options
  const program = ts.createProgram([filename], compilerOptions)

  const file = program.getSourceFile(filename)
  if (!file) throw new Error('Could not get file: ' + filename)

  let APIs: AnalyzedAPI[] = []
  for (const singleAPI of apiObjects) {
    handleAPI(singleAPI, getGlobalTags())
  }

  return APIs

  function getGlobalTags(): Tag[] {
    return (config.globalTags ?? []).map((tag) => ({ name: tag.name, text: tag.value }))
  }

  function handleAPI(api: any, globalTags: Tag[] = []) {
    const index = ++papudocIndex
    const call = findPapudocCall(index)
    if (!call) throw new Error('Failed to find papudoc call')

    const checker = program.getTypeChecker()

    const apiData: Array<AnalyzedAPI> = [...findAPIs(api)].map(
      (singleAPI): AnalyzedAPI => {
        /*ptr(call.arguments[0])
        function ptr(node: ts.Node, d = 1) {
          console.log('pp', Array(d).fill(' ').join(' ') + node.kind)
          node.forEachChild(child => {

            ptr(child, d + 1)
          })
        }*/
        const v = findValueAtPath(call.arguments[0], globalTags, singleAPI.path)

        if (!v) throw new Error('Failed to find value: ' + singleAPI.path.join('.'))
        const responseType = getTypeParameterFor(v.symbol, 'response')
        const bodyType = getTypeParameterFor(v.symbol, 'body')
        const bodyName = [...singleAPI.path, 'body']
        const responseName = [...singleAPI.path, 'response']
        const api: AnalyzedAPI = {
          api: singleAPI,
          url: getURL(singleAPI.route),
          ...singleAPI.route.apiUrlParameters,
          responseType,
          responseJSONType: responseType && generateTypeJSON(responseType, checker, responseName),
          bodyType,
          bodyJSONType: bodyType && generateTypeJSON(bodyType, checker, bodyName),
          response: responseType ? generateTypeString(responseType, checker, responseName, 'Inline') : 'unknown',
          body: bodyType ? generateTypeString(bodyType, checker, bodyName, 'Inline') : 'unknown',
          method: singleAPI.route.method,
          checker,
          parameterDescriptions: getParameterDescriptions(v),
          description: getTagText(convertTags(v.tags), 'description'),
          tags: convertTags(v.tags),
        }
        //console.log(api.tags)

        return api
      }
    )
    for (const api of apiData) {
      APIs.push(api)
    }
    return apiData

    function getURL(route: any) {
      route.apiDeclaration.configure({ baseURL: '' })
      const params: string[] = route.apiUrlParameters.params
      const paramObj: any = {}
      for (const param of Object.keys(params)) {
        paramObj[param] = '[' + param + ']'
      }
      return route.getURL(paramObj).replace(/%5B(.+?)%5D/g, ':$1')
    }

    function findPapudocCall(targetIndex: number) {
      let atIndex = -1
      return ts.forEachChild(file!, (node) => checkNode(node))

      function checkNode(node: ts.Node): ts.CallExpression | undefined {
        if (ts.isCallExpression(node)) {
          const identifier = node.forEachChild((child) => ts.isIdentifier(child) && child)
          if (identifier && identifier?.escapedText === 'papudoc') {
            ++atIndex
            if (atIndex === targetIndex) return node
          }
        }

        return node.forEachChild((node) => checkNode(node))
      }
    }

    function getParameterDescriptions(value: FoundValue) {
      const paramTags = getTagTexts(convertTags(value.tags), 'param')

      const entries = paramTags.map((tag) => {
        const [, key, description] = tag?.match(/^([^\s]+) (.+)/) || [, '', '']
        return [key!, description] as const
      })

      return new Map<string, string | undefined>(entries)
    }

    function findNamedCall(node: ts.Node, name: string): ts.Identifier | undefined {
      return node.forEachChild((child) => {
        if (ts.isIdentifier(child)) {
          if (child.escapedText === name) return child
        } else {
          return findNamedCall(child, name)
        }
      })
    }

    function findValueAtPath(node: ts.Node, docTags: Array<Tag>, path: string[]): FoundValue | null {
      const members = checker.getTypeAtLocation(node).getProperties()
      if (!members) return null
      const member = members.find((member) => member.escapedName === path[0])
      if (!member) return null
      const memberTags = member.getJsDocTags()
      member.getJsDocTags()

      if (path.length === 1)
        return {
          symbol: member,
          tags: [
            ...convertTags(memberTags),
            ...docTags,
            ...member.getDocumentationComment(checker).map((comment) => ({ name: 'description', text: comment.text })),
          ],
        }
      return findValueAtPath(member.valueDeclaration!, convertTags(memberTags), path.slice(1))
    }

    function getTypeParameterFor(symbol: ts.Symbol, forType: string) {
      const call = findNamedCall(symbol.valueDeclaration!, forType)
      if (call) {
        const x = call.parent.parent as ts.NodeWithTypeArguments

        //console.log('x',  call.parent.parent)
        // throw new Error('whee')
        return checker.getTypeAtLocation(x.typeArguments?.[0]!)
      }
      return null
    }
  }
}

interface API {
  path: string[]
  route: {
    apiUrlParameters: {
      query: TypedQueryType
      params: TypedQueryType
      optionalQuery: TypedQueryType
      boolQuery: TypedQueryType
    }
    method: string
  }
}

function* findAPIs(api: any, currentPath: string[] = []): IterableIterator<API> {
  if (api.__papudocIgnore) return
  for (const [key, value] of Object.entries(api) as any[]) {
    if (value?.apiUrlParameters) {
      yield {
        path: [...currentPath, key],
        route: value,
      }
    } else if (value?.__apis) {
      continue
    } else if (typeof value === 'object' && value) {
      yield* findAPIs(value, [...currentPath, key])
    }
  }
}

function getTsConfigFilename(config: ExtractorConfig) {
  if (config.tsConfigFilename) {
    return getRequireableFilename(config.baseDir, config.tsConfigFilename)
  }
  return getRequireableFilename(config.baseDir, 'tsconfig.json')
}

function convertTags(tags: Array<JSDocTagInfo | Tag>): Tag[] {
  return tags.map((tag) => ({
    name: tag.name,
    text: Array.isArray(tag.text) ? tag.text?.map((text) => text.text).join('\n') : tag.text,
  }))
}
