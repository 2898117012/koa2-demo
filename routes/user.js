'use strict';
const UserController = require('../controllers/user');
const Router = require('koa-router');

const childRouter = new Router();
const checkToken = require('../token/checkToken');

childRouter.post('/login', UserController.Login);
childRouter.post('/register', UserController.Reg);

childRouter.get('/user', checkToken, UserController.GetUser);

module.exports = childRouter;