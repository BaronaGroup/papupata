import React from 'react'
import styled from 'styled-components'
import { NavEntries } from './NavEntries'
import NewNav from './NewNav'

const Container = styled.div`
  border-right: 1px solid #aaa;
  margin-right: 30px;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 30px;
`
const Heading = styled.h2``

const Method: React.FC = ({ children }) => {
  return <span>{children}()</span>
}

const Type = styled.span`
  font-style: italic;
`

/*const WIP = styled.span`
  color: red;
  font-weight: lighter;
`*/

const Property = styled.span``

export const guides: NavEntries = {
  '/guides/declaring': {
    label: 'Declaring APIs',
    children: {
      '/guides/declaring': {
        label: 'Basics',
        description:
          'This guide will help you declare APIs whether to model the APIs your application is going to implement them, call them or both.'
      },
      '/guides/declaring/query-based-variants': {
        label: 'Query-based variants',
        description: 'Sometimes APIs differ from each other just by their query parameters. This can be presented in papupata, as well.'
      }
    }
  },
  '/guides/metadata': {
    label: 'Accessing metadata',
    description: 'This guide will help you access metadata from any declared APIs.'
  },
  '/guides/sharing': {
    label: 'Sharing APIs declarations',
    description: 'This guide will help you share your API declarations.'
  },
  '/guides?client': {
    label: 'Clients',
    children: {
      '/guides/client/setup': {
        label: 'Setting up papupata',
        description: 'This guide will go through all the basic configuration needed to call APIs declared with papupata.'
      },
      '/guides/client/calling': {
        label: 'Calling APIs',
        description: 'This guide will go through the specifics of how to call APIs using papupata'
      },
      '/guides/client/customRequestAdapters': {
        label: 'Custom request adapters',
        description:
          'This guide gives you an undestanding of how to change the way papupata does its requests, for example by adding authentication headers.'
      },
      '/guides/client/testing': {
        label: 'Testing',
        description: 'This guide will help you with testing client code that calls APIs using papupata'
      }
    }
  },
  '/guides?server': {
    label: 'Servers',
    children: {
      '/guides/server/setup': {
        label: 'Setting up papupata',
        description: 'This guide will go through all the basic configuration needed to start implementing APIs with papupata.'
      },
      '/guides/server/implementing': {
        label: 'Implementing APIs',
        description: 'This guide will go trough all the specifics of actually implementing APIs.'
      },
      '/guides/server/interactingWithExpress': {
        label: 'Interacting with express',
        description:
          'This guide will help you with incorporating papupata with an existing express application, using the existing middleware and implementations.'
      },
      '/guides/server/middleware': {
        label: 'Middleware',
        description:
          'Middleware can be used to change the behaviour of APIs. This guide covers how to use and implement middeware in papupata.'
      },
      '/guides/server/testing': {
        label: 'Testing',
        description: 'This guide will help you with testing server code that implements APIs with papupata.'
      }
    }
  },
  '/guides/migrationToV2': 'Migrating to papupata 2.x'
}

export default function NavMenu() {
  const entries: NavEntries = {
    '/what-is-papupata': 'What is papupata?',
    '/getting-started': 'Getting started',
    '/concepts': 'Concepts and terms',
    '/guides': {
      label: 'Guides',
      children: guides
    },
    '/api-reference': {
      label: 'API Reference',
      children: {
        '/api/APIDeclaration': {
          label: 'class APIDeclaration',
          children: {
            '/api/APIDeclaration/configure': <Method>configure</Method>,
            '/api/APIDeclaration/declareDeleteAPI': <Method>declareDeleteAPI</Method>,
            '/api/APIDeclaration/declareGetAPI': <Method>declareGetAPI</Method>,
            '/api/APIDeclaration/declarePostAPI': <Method>declarePostAPI</Method>,
            '/api/APIDeclaration/declarePatchAPI': <Method>declarePatchAPI</Method>,
            '/api/APIDeclaration/declarePutAPI': <Method>declarePutAPI</Method>,
            '/api/APIDeclaration/getConfig': <Method>getConfig</Method>,
            '/api/APIDeclaration/unmockAll': <Method>unmockAll</Method>,
            '/api/APIDeclaration/updateConfig': <Method>updateConfig</Method>
          }
        },
        '/api/PartiallyDeclaredAPI': {
          label: 'PartiallyDeclaredAPI',
          children: {
            '/api/PartiallyDeclaredAPI/params': <Method>params</Method>,
            '/api/PartiallyDeclaredAPI/query': <Method>query</Method>,
            '/api/PartiallyDeclaredAPI/optionalQuery': <Method>optionalQuery</Method>,
            '/api/PartiallyDeclaredAPI/queryBool': <Method>queryBool</Method>,
            '/api/PartiallyDeclaredAPI/body': <Method>body</Method>,
            '/api/PartiallyDeclaredAPI/response': <Method>response</Method>,
            '/api/PartiallyDeclaredAPI/TypeMapping': <Type>TypeMapping</Type>
          }
        },
        '/api/DeclaredAPI': {
          label: 'DeclaredAPI',
          children: {
            '/api/DeclaredAPI/invoke': <Method>invoke</Method>,
            '/api/DeclaredAPI/getURL': <Method>getURL</Method>,
            '/api/DeclaredAPI/implement': <Method>implement</Method>,
            '/api/DeclaredAPI/implementation': <Property>implementation</Property>,
            '/api/DeclaredAPI/implementationMiddleware': <Property>implementationMiddleware</Property>,
            '/api/DeclaredAPI/implementWithMiddleware': <Method>implementWithMiddleware</Method>,
            '/api/DeclaredAPI/implementWithExpressMiddleware': <Method>implementWithExpressMiddleware</Method>,
            '/api/DeclaredAPI/implementWithPapupataMiddleware': <Method>implementWithPapupataMiddleware</Method>,
            '/api/DeclaredAPI/mock': <Method>mock</Method>,
            '/api/DeclaredAPI/mockOnce': <Method>mockOnce</Method>,
            '/api/DeclaredAPI/unmock': <Method>unmock</Method>,
            '/api/DeclaredAPI/method': <Property>method</Property>,
            '/api/DeclaredAPI/apiDeclaration': <Property>apiDeclaration</Property>,
            '/api/DeclaredAPI/apiUrlParameters': <Property>apiUrlParameters</Property>,
            '/api/DeclaredAPI/path': <Property>path</Property>,
            '/api/DeclaredAPI/ResponseType': <Type>ResponseType</Type>,
            '/api/DeclaredAPI/ServerResponseType': <Type>ServerResponseType</Type>,
            '/api/DeclaredAPI/BodyType': <Type>BodyType</Type>,
            '/api/DeclaredAPI/CallArgsType': <Type>CallArgsType</Type>,
            '/api/DeclaredAPI/RequestType': <Type>RequestType</Type>
          }
        },
        '/api/convertExpressMiddleware': 'convertExpressMiddleware',
        '/api/skipHandlingRoute': 'skipHandlingRoute',
        '/api/handleUndefinedResponsesMiddleware': 'handleUndefinedResponsesMiddleware',
        '/api/fetchAdapter': 'fetchAdapter',
        '/api/requestPromiseAdapter': 'requestPromiseAdapter',
        '/api/supertestAdapter': 'supertestAdapter',
        '/api/supertestInvoker': 'supertestInvoker',
        '/api/invokeImplementationAdapter': 'invokeImplementationAdapter',
        '/api/testInvoker': 'testInvoker'
      }
    }
  }
  return (
    <Container>
      <Heading>Table of contents</Heading>
      <NewNav entries={entries} />
    </Container>
  )
}
