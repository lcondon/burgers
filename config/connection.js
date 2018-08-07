var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/config.js')[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize("burgerDB", "root", "march2195", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
};
// Exports the connection for other files to use
module.exports = sequelize;
