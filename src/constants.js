"use strict";

const DEFAULT_COMMAND = `--help`;

const ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

const USER_ARGV_INDEX = 2;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

module.exports = {
  DEFAULT_COMMAND,
  ExitCode,
  USER_ARGV_INDEX,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH
};
