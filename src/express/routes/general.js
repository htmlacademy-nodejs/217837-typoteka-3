"use strict";

const {Router} = require(`express`);
const generalRouter = new Router();

generalRouter.get(`/`, (req, res) => res.send(`/`));
generalRouter.get(`/register`, (req, res) => res.send(`/register`));
generalRouter.get(`/login`, (req, res) => res.send(`/login`));
generalRouter.get(`/search`, (req, res) => res.send(`/search`));


module.exports = generalRouter;
