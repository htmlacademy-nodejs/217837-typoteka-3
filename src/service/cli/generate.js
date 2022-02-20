"use strict";

const fs = require(`fs/promises`);
const {getRandomInt, shuffle, errorMessage, successMessage} = require(`../../utils`);
const {ExitCode, FILE_SENTENCES_PATH, FILE_CATEGORIES_PATH, FILE_TITLES_PATH} = require(`../../constants`);
const {readFileContent} = require(`./read-file-content`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mocks.json`;

const generatePublications = (count, titles, categories, sentences) => {
  const date = new Date();
  return Array.from({length: count}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    announce: shuffle(sentences).slice(0, 5).join(` `),
    fullText: shuffle(sentences)
      .slice(0, getRandomInt(1, sentences.length - 1))
      .join(` `),
    category: shuffle(categories).slice(0, 3),
    createdDate: date.toISOString(),
  }));
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    // Считываем контент из файлов
    const sentences = await readFileContent(FILE_SENTENCES_PATH);
    const titles = await readFileContent(FILE_TITLES_PATH);
    const categories = await readFileContent(FILE_CATEGORIES_PATH);
    const countPublications = Number.parseInt(count, 10) || DEFAULT_COUNT;
    if (countPublications > MAX_COUNT) {
      errorMessage(`Max number of publications to generate is ${MAX_COUNT}`);
      process.exit(ExitCode.ERROR);
    }
    const content = JSON.stringify(generatePublications(countPublications, titles, categories, sentences));

    try {
      await fs.writeFile(FILE_NAME, content);
      successMessage(`Operation success. File created.`);
    } catch (err) {
      errorMessage(`Can't write data to file...`);
      process.exit(ExitCode.ERROR);
    }
  },
};
