import '../../../prepare'
import ImplementBase from './implementBase'
import { Example, Parameter } from '../../../components/api-components'

export default function ImplementWithExpressMiddleware() {
  return (
    <ImplementBase
      fnName="implementWithExpressMiddleware"
      variantPurpose={'This variant allows for inclusion of express middleware for the implementation.'}
      middlewareParameter={
        <Parameter name="middleware" dataType="Function[]">
          An array of express middleware functions.
        </Parameter>
      }
      availableFrom={'1.5.0'}
      examples={
        <Example label="Usage in implementation">
          {`
            myAPI.implementWithExpressMiddleware(
              [(req, res, next) => { console.log(req.url); next() }],
              (req, res) => {
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
