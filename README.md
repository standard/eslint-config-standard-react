# eslint-config-standard-react [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/standard/eslint-config-standard-react/master.svg
[travis-url]: https://travis-ci.org/standard/eslint-config-standard-react
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard-react.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard-react
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard-react.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard-react
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for React/JSX support in [JavaScript Standard Style](https://github.com/standard/standard)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Install

This module is for advanced users. You probably want to use [`standard`](https://github.com/standard/standard) instead :)

```bash
npm install eslint-config-standard-react
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

This Shareable Config adds React and JSX to the baseline JavaScript Standard Style rules
provided in `eslint-config-standard`.

Here's how to install everything you need:

```bash
npm install --save-dev babel-eslint eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

Then, add this to your `.eslintrc` file:

```
{
  "parser": "babel-eslint",
  "extends": ["standard", "standard-react"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Standard Style to check your code is to use the
[`standard`](https://github.com/standard/standard) package. This comes with a global
Node command line program (`standard`) that you can run or add to your `npm test` script
to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```markdown
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](https://github.com/standard/standard).

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
