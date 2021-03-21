import React, { ReactNode, useCallback, useState } from 'react'
import styled from 'styled-components'

export type VariantVersion = '*' | SelectableVersion
type SelectableVersion = '1.x' | '2.x'

interface Props {
  isRecommendation?: boolean
  variants: {
    [K in VariantVersion]?: ReactNode
  }
}

const Container = styled.div`
  border-left: 4px solid #663399;
  padding: 5px 0 5px 10px;
`

const Note = styled.div`
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9em;
`

export default function VersionVariants({ variants, isRecommendation }: Props) {
  const [selectedVersion, setSelectedVersion] = useState<SelectableVersion>('2.x')
  const updateSelectedVersion = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(e.target.value as any)
  }, [])

  return (
    <Container>
      <select value={selectedVersion} onChange={updateSelectedVersion}>
        <option value="1.x">Papupata 1.x</option>
        <option value="2.x">Papupata 2.x</option>
      </select>
      {isRecommendation && <Note>Older styles are still supported in later versions, just not preferred.</Note>}
      {(Object.keys(variants) as VariantVersion[])
        .filter((variant) => isApplicable(selectedVersion, variant))
        .map((variant) => (
          <div key={variant}>{variants[variant]}</div>
        ))}
    </Container>
  )
}

function isApplicable(version: SelectableVersion, variant: VariantVersion) {
  if (variant === '*') return true
  return variant === version
}
