import Page from '../../components/Page'
import Container from '../../components/Container'
import { GuideContent, Overview } from '../../components/guides'
import IndexLayout from '../../layouts'
import * as React from 'react'
import { Example, Examples, Parameter, Parameters } from '../../components/api-components'
import { MightChange } from '../../components/MightChange'

export default function PapupataFromOpenapi() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Conversion from OpenAPI</h1>
          <Overview>
            It is not an uncommon need to utilise APIs declared with OpenAPI, or even to implement them. An experimental tool exists for
            generating papupata API declarations from an OpenAPI 3 document.
          </Overview>
          <MightChange>This is an experimental tool, its functionality is lacking and they way it is used might still change!</MightChange>
          <GuideContent
            content={[
              {
                heading: 'Getting Started',
                anchor: 'getting-started',
                content: (
                  <>
                    The tool is provided as a package called "papupata-from-openapi". You can install it into your repository if you want
                    more control over the version of it being used, or you can run it directly with npx.
                    <Examples>
                      <Example>{`npm install papupata-from-openapi`}</Example>
                      <Example>{`npx papupata-from-openapi`}</Example>
                    </Examples>
                    For programmatic usage, installing it is of course the way to go.
                  </>
                )
              },
              {
                heading: 'Command-line',
                anchor: 'cli',
                content: (
                  <>
                    <Example>{`npx papupata-from-openapi`}</Example>
                    <Example>{`npx papupata-from-openapi [--config=<configfile>]`}</Example>
                    <Example>{`npx papupata-from-openapi <openapi> [<output>] [--exportName=<name>] `}</Example>
                    <Parameters>
                      <Parameter name={'config'} dataType={'filename'}>
                        If given, the referenced file is used as the config file for papupata-from-openapi. If not given, and there are no
                        other command line parameters a config is searched for from the current directory and its ancestors.
                      </Parameter>
                      <Parameter name={'openapi'} dataType={'filename/URL'}>
                        Reference to an OpenAPI document to convert, either as a filename or an URL. Has no effect when config file is used.
                      </Parameter>
                      <Parameter name={'output'} dataType={'filename'}>
                        The filename where the converted API declaration is to be stored. If omitted, it is printed to standard output. Has
                        no effect when config file is used.
                      </Parameter>
                      <Parameter name={'exportName'} dataType={'string'}>
                        The name used for the export of API declarations in the generated file. If the export name ends with an empty set of
                        parenthesis, a function that returns a new copy of the API declaration is exported instead of just a const that has
                        one instance of it. Has no effect when config file is used.
                      </Parameter>
                    </Parameters>
                  </>
                )
              },
              {
                heading: 'Configuration',
                anchor: 'config',
                content: (
                  <>
                    <p>
                      Configuration can be done using either command-line parameters, or using a config file. You can specify a config file
                      using the command-line parameter --config. If you do not, and the command line does not indicate a conversion, a
                      config file is automatically searched for.
                    </p>
                    <p>
                      The search starts from the current directory, and goes towards the root directory until it finds a configuration file,
                      or concludes that it cannot.
                    </p>
                    <p>
                      The configuration file can be called either .papupata-from-openapi.js or .papupata-from-openapi.json. A .js file
                      should be valid javascript the current version of node can execute, and it should export the configuration itself. The
                      JSON file should just contain the configuration.
                    </p>
                    <p>The configuration itself should be an array of all the conversions that are to take place.</p>
                    <Example>{`
                      [
                        {
                          "openapiLocation": "https://example.com/openapi.yaml",
                          "outputTo": "./relative/api.ts",
                          "exportName": "exampleAPI"
                        }
                      ]
                    `}</Example>
                    <p>Each entry has the following fields:</p>
                    <Parameters>
                      <Parameter name={'openapiLocation'} dataType={'filename/URL'}>
                        Reference to an OpenAPI document to convert, either as a filename or an URL.
                      </Parameter>
                      <Parameter name={'outputTo'} dataType={'filename'}>
                        The filename where the converted API declaration is to be stored. no effect when config file is used.
                      </Parameter>
                      <Parameter name={'exportName'} dataType={'string'}>
                        The name used for the export of API declarations in the generated file. If the export name ends with an empty set of
                        parenthesis, a function that returns a new copy of the API declaration is exported instead of just a const that has
                        one instance of it.
                      </Parameter>
                    </Parameters>
                    <p>All relative paths are resolved relative to the configuration file.</p>
                  </>
                )
              },

              {
                heading: 'API',
                anchor: 'api',
                content: <>At this time no documented API is provided. One will be added in future releases.</>
              },
              {
                heading: 'Limitations',
                anchor: 'config',
                content: (
                  <>
                    <ul>
                      <li>At this time only OpenAPI 3 documents are supported</li>
                      <li>There are no doubt numerous improvements that could be done to the schema-to-typescript conversion</li>
                      <li>Recursive references are not supported</li>
                    </ul>
                  </>
                )
              }
            ]}
          />
        </Container>
      </Page>
    </IndexLayout>
  )
}
