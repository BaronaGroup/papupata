import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'

// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Container = styled.div``

export const Code: React.FC<{ language: string; children: string }> = ({ language, children }) => (
    <Container>
      <SyntaxHighlighter language={language} style={docco}>
        {fixIndent(children)}
      </SyntaxHighlighter>
    </Container>
  )

function fixIndent(code: string) {
  const lines = code.split('\n')
  while (lines.length && !lines[0].trim()) {
    lines.shift()
  }
  while (lines.length && !lines[lines.length - 1].trim()) {
    lines.pop()
  }
  const [indent] = lines[0].match(/^\s+/) || ['']

  return lines.map((line) => (line.startsWith(indent) ? line.substring(indent.length) : line)).join('\n')
}
