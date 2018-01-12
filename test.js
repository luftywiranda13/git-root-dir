'use strict';

const { homedir } = require('os');

const gitRootDir = require('./');

describe('find `.git` dir', () => {
  it('can find `.git` dir from `fixtures`', async () => {
    expect.assertions(1);
    const rootDir = await gitRootDir('fixtures');

    expect(rootDir).toBe(__dirname);
  });

  it('can find `.git` dir from `process.cwd()`', async () => {
    expect.assertions(1);
    const rootDir = await gitRootDir();

    expect(rootDir).toBe(__dirname);
  });

  it("can't find `.git` dir from `homedir()`", async () => {
    expect.assertions(1);
    const rootDir = await gitRootDir(homedir());

    expect(rootDir).toBe(null);
  });
});
