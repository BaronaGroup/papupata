# Papupata

Typescript typed API requests.

## Requirements

- node 10+ (older versions could be supported easily if there is demand for it)
- typescript 3.4+

## Versioning

Until 1.0 is reached, minor version updates can be breaking, patches should not. From then on, semver will be used.

## Documentation

See https://baronagroup.github.io/papupata/

## Development

Code styles are done using prettier. Run tests with `npm test`. The example application can and should be expanded to demonstrate how various features work.

## Releasing

The release procedure is currently done manually.
After developing and testing your feature, follow the following steps:

1. Manually bump the version in the `package.json` file for the package you want to release. Follow [semantic versioning](https://semver.org/).
2. Run `npm publish --dry-run` and inspect the contents of the package that is about to be published to see if it looks ok.
3. Set up npm authentication (e.g. `npm login` or by using a token).
4. Run `npm publish` to publish the new version.
5. Verify that you are able to see it in [npm](https://www.npmjs.com/package/papupata).
