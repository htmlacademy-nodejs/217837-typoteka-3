"use strict";

const express = require(`express`);
const path = require(`path`);
const articlesRouter = require(`./routes/articles`);
const myRouter = require(`./routes/my`);
const generalRouter = require(`./routes/general`);

const PORT = 8080;
const PUBLIC_DIR = `public`;

const app = express();
app.use(`/`, generalRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.listen(PORT);
