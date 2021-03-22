import React from 'react'
import '../../../prepare'
import DeclareAPIPage from '../../../components/DeclareAPIPage'

export default function declarePatchAPI() {
  return <DeclareAPIPage method="patch" availableFrom={'1.5.0'} />
}
