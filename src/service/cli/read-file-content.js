'use strict';

const fs = require(`fs/promises`);
const path = require(`path`);
const {errorMessage} = require(`../../utils`);

const readFileContent = async (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  try {
    const res = await fs.readFile(absolutePath, `utf-8`);
    return res.trim().split(`\n`);
  } catch (err) {
    errorMessage(err);
    return [];
  }
};

module.exports = {readFileContent};
