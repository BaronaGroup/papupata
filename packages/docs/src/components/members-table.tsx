import { Section, SectionHeading } from './api-components'
import React, { createContext, ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { IncludeAvailableFromContext } from './IncludeAvailableFromContext'

const Row = styled.tr``
const NameColumnBase = styled.td``
const TypeColumn = styled.td``
const DataTypeColumn = styled.td``
const DescriptionColumn = styled.td``
const RequiredColumnStyles = styled.td``
const AvailableFromColumn = styled.td``

function RequiredColumn({ children }: { children: ReactNode }) {
  const { includeRequiredColumn } = useContext(MemberContext)
  if (!includeRequiredColumn && children) throw new Error('Being asked to show required cell, yet it does not exist')
  return includeRequiredColumn ? <RequiredColumnStyles>{children}</RequiredColumnStyles> : null
}

const MemberContext = createContext({ context: '', includeRequiredColumn: false })

const NameColumn: React.FC<{ name: ReactNode }> = ({ name, children }) => {
  const { context } = useContext(MemberContext)
  return (
    <NameColumnBase>
      <Link to={`/api/${context}/${name}`}>{children || name}</Link>
    </NameColumnBase>
  )
}

export const Members: React.FC<{ context: string; includeRequiredColumn?: boolean; includeAvailableFrom?: boolean }> = ({
  children,
  context,
  includeRequiredColumn,
  includeAvailableFrom
}) => (
    <Section>
      <MemberContext.Provider value={{ context, includeRequiredColumn: !!includeRequiredColumn }}>
        <IncludeAvailableFromContext.Provider value={!!includeAvailableFrom}>
          <SectionHeading>Members</SectionHeading>
          <table>
            <thead>
              <th>Name</th>
              <th>Type</th>
              <th>Data type/return type</th>
              <th>Description</th>
              {includeRequiredColumn && <th>Required</th>}
              {includeAvailableFrom && <th>Introduced in</th>}
            </thead>
            <tbody>{children}</tbody>
          </table>
        </IncludeAvailableFromContext.Provider>
      </MemberContext.Provider>
    </Section>
  )
export const MethodMember: React.FC<{ name: string; dataType: any; required?: any; displayName?: any; availableFrom?: string }> = ({
  children,
  name,
  dataType,
  required,
  displayName,
  availableFrom
}) => {
  const includeAvailableFrom = React.useContext(IncludeAvailableFromContext)
  return (
    <Row>
      <NameColumn name={name}>{displayName}</NameColumn>
      <TypeColumn>method</TypeColumn>
      <DataTypeColumn>{dataType}</DataTypeColumn>
      <DescriptionColumn>{children}</DescriptionColumn>
      <RequiredColumn>{required === true ? 'Yes' : required === false ? 'No' : required}</RequiredColumn>
      {includeAvailableFrom ? <AvailableFromColumn>{availableFrom}</AvailableFromColumn> : ''}
    </Row>
  )
}

export const PropertyMember: React.FC<{ name: ReactNode; dataType: any; required?: any; availableFrom?: string; link?: boolean }> = ({
  children,
  name,
  dataType,
  required,
  availableFrom,
  link
}) => {
  const includeAvailableFrom = React.useContext(IncludeAvailableFromContext)

  return (
    <Row>
      {link ? <NameColumn name={name}>{name}</NameColumn> : <NameColumnBase>{name}</NameColumnBase>}
      <TypeColumn>property</TypeColumn>
      <DataTypeColumn>{dataType}</DataTypeColumn>
      <DescriptionColumn>{children}</DescriptionColumn>
      <RequiredColumn>{required === true ? 'Yes' : required === false ? 'No' : required}</RequiredColumn>
      {includeAvailableFrom ? <AvailableFromColumn>{availableFrom}</AvailableFromColumn> : ''}
    </Row>
  )
}

export const ExposedTypeMember: React.FC<{ name: string }> = ({ children, name }) => (
    <Row>
      <NameColumnBase>{name}</NameColumnBase>
      <TypeColumn>property</TypeColumn>
      <DataTypeColumn>n/a</DataTypeColumn>
      <DescriptionColumn>{children}. Type type itself must be accessed using the typeof operator.</DescriptionColumn>
    </Row>
  )
