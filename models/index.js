'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

const databaseConfig = require('../config/database.json');

var db = {};
var sequelize = new Sequelize(databaseConfig.dbName, databaseConfig.userName, databaseConfig.passWord, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    protocol: databaseConfig.dialect,
    port: databaseConfig.port,
    underscored: true,
    timezone: databaseConfig.timezone,
    dialectOptions: {
        ssl: databaseConfig.ssl
    }
});

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0 && file !== 'index.js');
}).forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

db.sequelize = sequelize;
sequelize.sync();
module.exports = db;