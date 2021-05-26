import '../../prepare'
import * as React from 'react'
import Container from '../../components/Container'
import { GuideContent, Overview } from '../../components/guides'
import Page from '../../components/Page'
import IndexLayout from '../../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: sharing API declarations</h1>
        <Overview>Sharing is caring. You care about the users of your API, right? This guide is very much work in progress.</Overview>
        <GuideContent
          content={[
            {
              heading: 'Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    For the time being sharing API declarations is not super convenient. You'll probably want to have your API declarations
                    either in a separate npm package, or maybe as a git submodule.
                  </p>
                  <p>Guidelines for generally available API declarations:</p>
                  <ul>
                    <li>Avoid referencing libraries in your API declarations</li>
                    <li>If you must reference libraries, consider making them peer dependencies to avoid type incompatibilities</li>
                    <li>Do not reference your own types elsewhere in the file system</li>
                  </ul>
                  <p>
                    You'll want to make sure that the package you create has both typescript d.td definition files as well as the compiled
                    .js files. Alternatively you can manage with just .ts files, but then the consumers have to find a way to get their
                    typescript compilation working with the module, which can be tricky.
                  </p>
                </>
              )
            },
            {
              heading: 'The future',
              anchor: 'future',
              content: (
                <>
                  <p>
                    Work is being put into creating a tool that extracts the API declarations from your existing code, while rewriting the
                    types in such a way that they do not refer to any libraries or internal components. Not available yet unfortunately.
                    Ideally it will solve all of the problems with the current sharing mechanisms.
                  </p>
                </>
              )
            }
          ]}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
