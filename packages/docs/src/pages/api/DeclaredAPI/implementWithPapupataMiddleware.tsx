import '../../../prepare'
import ImplementBase from './implementBase'
import { Example, Parameter } from '../../../components/api-components'

export default function ImplementWithPapupataMiddleware() {
  return (
    <ImplementBase
      fnName="implementWithPapupataMiddleware"
      variantPurpose={'This variant allows for inclusion of papupata middleware for the implementation.'}
      middlewareParameter={
        <Parameter name="middleware" dataType="Function[]">
          An array of papupata middleware functions.
        </Parameter>
      }
      availableFrom={'1.5.0'}
      examples={
        <Example label="Usage in implementation">
          {`
            myAPI.implementWithPapupataMiddleware(
              [(req, _res, _route, next) => { console.log(req.url); next() }],
              () => {
                return 'hello'
            })
          `}
        </Example>
      }
    />
  )
}
