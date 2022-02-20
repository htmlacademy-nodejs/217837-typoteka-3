"use strict";

const chalk = require(`chalk`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  const arrCopy = [...someArray];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [arrCopy[i], arrCopy[randomPosition]] = [
      arrCopy[randomPosition],
      arrCopy[i],
    ];
  }

  return arrCopy;
};

const getRandomItem = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)];
};

const successMessage = (message) => console.log(chalk.green(message));

const errorMessage = (message) => console.error(chalk.red(message));

module.exports = {shuffle, getRandomInt, getRandomItem, successMessage, errorMessage};
