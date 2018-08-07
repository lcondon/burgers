var Sequelize = require('sequelize');
var connection = require('../config/connection');

var Burgers = connection.define("burgers", {
    routeName: Sequelize.STRING,
    burgerName: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
});

Burgers.sync();

module.exports = Burgers;