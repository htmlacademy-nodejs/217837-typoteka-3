"use strict";

const {Router} = require(`express`);
const generalRouter = new Router();

generalRouter.get(`/`, (req, res) => res.render(`main`));
generalRouter.get(`/register`, (req, res) => res.render(`sign-up`));
generalRouter.get(`/login`, (req, res) => res.render(`login`));
generalRouter.get(`/search`, (req, res) => res.render(`search`));


module.exports = generalRouter;
