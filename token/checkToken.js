'use strict';
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
module.exports = async (ctx, next) => {
    const authorization = ctx.get('authorization');
    if (authorization === '') {
        ctx.throw(401, 'no token');
    }
    const token = authorization.split(' ')[1];
    let tokenContent;
    try {
        tokenContent = await jwt.verify(token, authConfig.jwtsecret);
    } catch (err) {
        ctx.throw(401, 'invalid token');
    }
    await next();
};