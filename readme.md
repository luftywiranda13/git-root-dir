# git-root-dir

[![Greenkeeper badge](https://badges.greenkeeper.io/luftywiranda13/git-root-dir.svg)](https://greenkeeper.io/)

[![Package Version](https://img.shields.io/npm/v/git-root-dir.svg?style=flat-square)](https://www.npmjs.com/package/git-root-dir)
[![Downloads Status](https://img.shields.io/npm/dm/git-root-dir.svg?style=flat-square)](https://npm-stat.com/charts.html?package=git-root-dir&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/git-root-dir/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/git-root-dir)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/git-root-dir/master.svg?style=flat-square)](https://codecov.io/gh/luftywiranda13/git-root-dir)

Find the root directory of a `git` repository.

Useful for tools that need to know whether `git` is managing the things inside.

## Installation

```sh
npm install --save git-root-dir
```

## Usage

```sh
/
└── Users
    └── luftywiranda
        └── foo
            ├── .git
            └── bar
                ├── baz
                └── example.js
```

```js
// example.js
const gitRootDir = require('git-root-dir');

gitRootDir(__dirname).then(rootDir => {
  console.log(rootDir);
  //=> '/Users/luftywiranda/foo'
});
```

## API

### gitRootDir([cwd])

Returns a `Promise` for either the repository root path or `null` if it couldn't be found.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Directory to start from.

## Related

* [git-dir-up](https://github.com/luftywiranda13/git-dir-up) – Find the closest `.git` directory
* [pkg-dir](https://github.com/sindresorhus/pkg-dir) – Find the root directory of a Node.js project or npm package

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
