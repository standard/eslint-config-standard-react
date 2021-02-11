const { ESLint } = require('eslint')
const test = require('tape')
const config = require('../eslintrc.json')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', async function (t) {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: config
  })
  const results = await eslint.lintFiles(path.resolve(__dirname, '../TestComponent.jsx'))

  t.equal(results[0].errorCount, 0)
  t.end()
})
