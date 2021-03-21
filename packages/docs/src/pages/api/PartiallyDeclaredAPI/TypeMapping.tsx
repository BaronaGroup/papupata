import { Link } from 'gatsby'
import React from 'react'
import { AvailableFrom, Example, Examples, Purpose, Usage } from '../../../components/api-components'
import Container from '../../../components/Container'
import { FixedFont } from '../../../components/guides'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

export default function TypeMapping() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class PartiallyDeclaredAPI</h2>
          <h3>type TypeMapping</h3>
        </Container>
        <AvailableFrom version="2.0.0" />
        <Purpose>Representing the types of values.</Purpose>
        <Usage>
          <p>
            These objects are used to provide types for query and path parameters, and from there they are also exposed via apiUrlParameters
            field of a declared API.
          </p>
          <p>
            TypeMapping is an object, that is essentially a collection of key-value pairs where the key stands for the name of the parameter
            and the value stands for the type, and when applicable, any other constraints put on the field.
          </p>
          <p>
            For additional information you might want to look at the <Link to="/guide/declaring/typeMapping">TypeMapping guide</Link>
          </p>
          <Example>{`const typeMapping = { fieldName: String}`}</Example>
        </Usage>

        <h5>Valid types and constraints</h5>
        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Imported from</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>
                <NotApplicable />
              </td>
              <td>Any string, not constraints.</td>
            </tr>
            <tr>
              <td>StringMatching</td>
              <td>
                <Example>{`import { StringMatching } from 'papupata/queryTypes'`}</Example>
              </td>
              <td>
                <p>
                  A string that must match a given regular expression. Do note that the regex is NOT checked with typescript, so from its
                  point of view any string will do.
                </p>
                <Example>{`const typeMapping = { fieldName: StringMatching(/^hello/) }`}</Example>
                <p>
                  It can be identified as being an object with a "type" field that has the value you can import as regexStringToken from
                  papupata/queryTypes.
                </p>
              </td>
            </tr>
            <tr>
              <td>StringEnum</td>
              <td>
                <Example>{`import { StringEnum } from 'papupata/queryTypes'`}</Example>
              </td>
              <td>
                <p>
                  A string that must be one of the provided options. Do note that the <FixedFont>as const</FixedFont> seen in the example is
                  required in order to have typescript check the values being entered.
                </p>
                <Example>{`const typeMapping = { fieldName: StringEnum(['alpha', 'beta', 'gamma'] as const) }`}</Example>
                <p>
                  It can be identified as being an object with a "type" field that has the value you can import as stringEnumToken from
                  papupata/queryTypes.
                </p>
              </td>
            </tr>
            <tr>
              <td>Number</td>
              <td>
                <NotApplicable />
              </td>
              <td>Any number, negative numbers, decimal numbers, NaN and Infinity are all allowed.</td>
            </tr>
            <tr>
              <td>Integer</td>
              <td>
                <Example>{`import { Integer } from 'papupata/queryTypes'`}</Example>
              </td>
              <td>
                <p>
                  An integer number. Negative number are allowed, Infinity and NaN are not. Do note that these constraints are NOT checked
                  with typescript, so it appears to just accept a number.
                </p>
                <p>
                  It can be identified as being an object with a "type" field that has the value you can import as integerToken from
                  papupata/queryTypes.
                </p>
              </td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>
                <NotApplicable />
              </td>
              <td>
                Accepts the strings <FixedFont>true</FixedFont> and <FixedFont>false</FixedFont> to convert to their boolean counterparts.
                Empty strings becomes false as well.
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <NotApplicable />
              </td>
              <td>The value of the parameter is passed to the constructor of Date to produce a date. Invalid dates are rejected.</td>
            </tr>
            <tr>
              <td>Array</td>
              <td>
                <NotApplicable />
              </td>
              <td>
                <p>
                  An array of one entry that is one of the types specified above indicates an array of that type. Not applicable to path
                  parameters. An array parameter is never strictly required -- it being missing results in an empty array.
                </p>
                <Example>{`const typeMapping = { fieldName: [String]} // an array of strings`}</Example>
              </td>
            </tr>
          </tbody>
        </table>

        <Examples>
          <Example>
            {`
            import { APIDeclaration } from 'papupata'
            import { StringMatching } from 'papupata/queryTypes'

            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:id')
              .params({
                id: StringMatching(/^[0-9a-f]{24}$/)
              })
              .query({
                name: String,
                age: Number
              })
              .optionalQuery({
                wantsMarketingEmail: Boolean
              })
              .response<string>()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}

function NotApplicable() {
  return <span>Not applicable</span>
}
