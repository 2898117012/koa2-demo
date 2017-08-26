'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(logger());
app.use(bodyParser());

const router = new Router();

const loginRouter = require('./routes/user');

router.use('/api', loginRouter.routes(), loginRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);