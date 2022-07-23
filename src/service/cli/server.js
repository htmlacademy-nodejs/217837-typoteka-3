'use strict';

const express = require(`express`);
const {successMessage} = require(`../../utils`);
const {readFileContent} = require(`./read-file-content`);
const {FILE_MOCKS_PATH, HttpCode} = require(`../../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

app.get(`/posts`, async (req, res) => {
  const fileContent = await readFileContent(FILE_MOCKS_PATH);
  res.status(HttpCode.OK);
  if (fileContent.length) {
    const mocks = JSON.parse(fileContent);
    res.send(mocks);
  } else {
    res.send([]);
  }
});

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    app.listen(port, () => successMessage(`Ожидаю соединений на ${port}`));
  }
};
