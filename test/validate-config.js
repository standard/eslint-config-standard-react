const { ESLint } = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', async t => {
  const cli = new ESLint({
      useEslintrc: false,
      overrideConfigFile: 'eslintrc.json'
  })


  const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
  const result = await cli.lintText(code)

  t.equal(result.length, 1, 'Should return a single result item')
  t.equal(result[0].errorCount, 0, 'The result item should show no errors')
  t.end()
})
