# unflatn

A fork of [unflatten][source]. Forked to address security issues in the original
project, which appears to be abandoned.

For existing users of `unflatten`, the call signature remains the same.

[![npm version](https://img.shields.io/npm/v/unflatn.svg?style=flat-square)](https://www.npmjs.com/package/unflatn)
![Coverage Status](./doc/coverage-badge.svg)
[![License](https://img.shields.io/badge/license-ISC-red.svg?style=flat-square)](LICENSE)

#### var obj = unflatten(subject, [opts])

Opposite of `flatten-obj`. Unflattens an object with delimited keys
- **subject** (*object*) - Object that needs to be unflattened
- **[opts]** (*object|string|boolean*) - Optional.

- - Provide a string as a shortcut for `{ separator: opts }`

- - Provide a boolean as a shorcut for `{ objectMode: opts }`

- - Provide an object to set both options `{ separator: '/', objectMode: true }`

- Available options:

+ **separator** (*string*) - defaults to `'.'`

+ **objectMode** (*boolean*) - defaults to `false`
- **return** (*object*) obj - Nested Javascript object

```javascript
const unflatten = require('unflatten')
unflatten({
  'a.b.c': 'd'
})
/*
{
  a: {
    b: {
      c: 'd'
    }
  }
}
*/
```

## Install

```shell
npm i unflatn
```

```shell
yarn add unflatn
```

```shell
pnpm add unflatn
```

[source]: https://github.com/vigour-io/unflatten/
