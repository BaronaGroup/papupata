import '../../../prepare'
import ImplementBase from './implementBase'
import { Example } from '../../../components/api-components'

export default function Implement() {
  return (
    <ImplementBase
      fnName="implement"
      variantPurpose={null}
      middlewareParameter={null}
      examples={
        <Example label="Usage in implementation">
          {`
myAPI.implement((req, res) => {
  const {q} = req.query,
    {param} = req.params,
    {key} = req.body
  res.set('x-my-header', 'Hello')
  return [param, q, key].join()
})
`}
        </Example>
      }
    />
  )
}
