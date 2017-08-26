'use strict';
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = function (username) {
    const token = jwt.sign({
        username: username
    }, authConfig.jwtsecret, {
        expiresIn: '60s'
    });
    return token;
}