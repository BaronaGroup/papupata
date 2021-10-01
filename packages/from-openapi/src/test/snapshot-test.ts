import { generatorTest } from './generatorTest'

describe('snapshots', () => {
  it('trivial', generatorTest('./trivial.yaml'))
  it('basic', generatorTest('./basic.yaml'))
  it('body', generatorTest('./with-body.yaml'))
  it('overview', generatorTest('./overview.yaml'))
})
