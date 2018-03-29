'use strict';

const { homedir } = require('os');

const gitRootDir = require('.');

it('can find `.git` dir from `fixtures`', async () => {
  expect.assertions(1);

  await expect(gitRootDir('fixtures')).resolves.toBe(__dirname);
});

it('can find `.git` dir from `process.cwd()`', async () => {
  expect.assertions(1);

  await expect(gitRootDir()).resolves.toBe(__dirname);
});

it("can't find `.git` dir from `homedir()`", async () => {
  expect.assertions(1);

  await expect(gitRootDir(homedir())).resolves.toBe(null);
});
