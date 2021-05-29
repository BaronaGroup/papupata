import React from 'react'
import styled from 'styled-components'
import { Banner } from './Banner'

const Container = styled(Banner)`
  border-color: yellowgreen;
  background-color: #ffd892;
  outline-color: #ffd892;
  margin: 20px;
`

export const MightChange: React.FC = ({ children }) => <Container>{children || 'Beware! There is a good chance this will be changed before 1.0 release!'}</Container>
