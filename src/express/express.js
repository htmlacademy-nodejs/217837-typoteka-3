"use strict";

const express = require(`express`);
const articlesRouter = require(`./routes/articles`);
const myRouter = require(`./routes/my`);
const generalRouter = require(`./routes/general`);

const PORT = 8080;

const app = express();
app.use(`/`, generalRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

app.listen(PORT);
