# Koa2 Demo

[![Greenkeeper badge](https://badges.greenkeeper.io/2898117012/koa2-demo.svg)](https://greenkeeper.io/)

基于[koa2](https://github.com/koajs/koa) 和 [sequelize](https://github.com/sequelize/sequelize)的JWT演示项目.

## 要求

- Nodejs 8.0+
- postgres

## 安装

```shell
$ git clone https://github.com/2898117012/koa2-demo

$ cd koa2-demo

$ npm install
```

## 配置

修改数据库配置文件`config/database.json`

## 运行

```shell

$ node app.js

```

## API

### 登录

http://localhost:3000/api/login

方法：`post`

参数:

|参数|说明|
|------|------|
|username|用户名|
|password|密码|

### 注册

http://localhost:3000/api/register

方法：`post`

参数:

|参数|说明|
|------|------|
|username|用户名|
|password|密码|

### 获取用户信息

http://localhost:3000/api/user

方法：`get`

在请求头中设置`authorization`为`token xxx`。

- `xxx`是用户登录后获取到的token值.
