import { JSONAPI } from '@papupata/common-types'

export type Tag = {
  name: string
  text?: string
}

type SupportedTag = 'description' | 'param' | 'papudoc-alternative-response'

export function getTagText(tags: Tag[], type: SupportedTag) {
  return getTagTexts(tags, type)?.[0]
}

export function getTagTexts(tags: Tag[], type: SupportedTag) {
  return processUses(tags)
    .filter((tag) => {
      return tag.name === type
    })
    .map((tag) => tag.text)
}

export function getAlternativeResponses(tags: Tag[]) {
  return getTagTexts(tags, 'papudoc-alternative-response').reduce((agg, response) => {
    const [, codeStr, description] = response?.match(/^(\d+) (.+)/) ?? [undefined, undefined, undefined]
    if (!codeStr) throw new Error('Invalid alternative response: ' + response)
    const code = +codeStr
    if (agg.some((entry) => entry.code === code)) return agg
    return [...agg, { code, description: description?.trim() }]
  }, [] as JSONAPI['alternativeResponses'])
}

function processUses(inTags: Tag[]) {
  const outTags = [...inTags]

  for (;;) {
    const use = outTags.findIndex((tag) => tag.name === 'papudoc-use')
    if (use === -1) break
    const used = outTags
      .filter((tag) => {
        return tag.name === 'papudoc-define' && tag.text?.startsWith(outTags[use].text + ' ')
      })
      .map(({ text: define }) => {
        const [isMatch, , defName, defValue] = define?.match(/^([\w\d_-]+)\s+([^\s]+)\s+(.+)/) ?? [null, '', '', '']
        if (!isMatch) throw new Error('Invalid define: ' + define)
        if (defName?.startsWith('@')) {
          return { name: defName.substring(1), text: defValue ?? undefined }
        } else {
          return { name: 'papupata-define-variable', text: `${defName} ${defValue}` }
        }
      })
    outTags.splice(use, 1, ...used)
  }

  return outTags
}
