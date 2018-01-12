'use strict';

const path = require('path');
const findUp = require('find-up');

const gitRootDir = (cwd = process.cwd()) =>
  findUp('.git', { cwd }).then(
    filePath => (filePath ? path.dirname(filePath) : null)
  );

module.exports = gitRootDir;
