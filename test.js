'use strict';

const { homedir } = require('os');

const gitDir = require('./');

describe('find `.git` dir', () => {
  it('can find `.git` dir from `fixtures`', async () => {
    expect.assertions(1);
    const rootDir = await gitDir('fixtures');

    expect(rootDir).toBe(__dirname);
  });

  it('can find `.git` dir from `process.cwd()`', async () => {
    expect.assertions(1);
    const rootDir = await gitDir();

    expect(rootDir).toBe(__dirname);
  });

  it("can't find `.git` dir from `homedir()`", async () => {
    expect.assertions(1);
    const rootDir = await gitDir(homedir());

    expect(rootDir).toBe(null);
  });
});
