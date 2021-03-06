'use strict';
const models = require('../models');
const createToken = require('../token/createToken');

const Login = async (ctx) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    const user = await models.user.findOne({where: {username: username}});

    if(!user) {
        ctx.body = {
            success: false,
            message: '用户不存在'
        }
        // Node.js is relatively not that fast for code execution, return as early as possible
        return ctx.status = 404;
    }

    if(!(user.password === password)) return ctx.status = 401; // Same thing applied

    ctx.body = {
        success: true,
        user: {
            username: user.username,
            token: user.token,
            create_time: user.create_time
        }
    };

    // No need for ctx.status = 200
};
const Reg = async (ctx) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await models.user.create({
        username: username,
        password: password
    }).then(function () {
        ctx.status = 200;
        ctx.body = {
            success: true
        };
    });
};
const GetUser = async (ctx) => {
    let token = ctx.request.header['authorization'].split(' ')[1];
    const user = await models.user.findOne({where: {token: token}});
    ctx.status = 200;
    if (user) {
        ctx.body = {
            success: true,
            user: {
                username: user.username,
                token: user.token,
                create_time: user.create_time
            }
        }
    } else {
        ctx.body = {
            success: false,
            message: '用户不存在'
        }
    }
};

module.exports = {
    Login, Reg, GetUser
};