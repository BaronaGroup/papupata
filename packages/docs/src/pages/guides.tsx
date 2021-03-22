import '../prepare'
import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Link } from 'gatsby'
import { guides } from '../components/NavMenu/NavMenu'
import { AltComponentType, NewNavList } from '../components/NavMenu/NewNav'

const Guide: AltComponentType = ({ children, label, url, description }) => (
  <div>
    <h2>{url ? <Link to={url}>{label}</Link> : label}</h2>
    <p>{description}</p>
    {children}
  </div>
)

const GuidesPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guides</h1>
        <p>These guides should help you get started. For more details, make sure to take a look at the API reference.</p>
        <NewNavList entries={guides} isCurrent={() => false} AltComponent={Guide} />
      </Container>
    </Page>
  </IndexLayout>
)

export default GuidesPage
