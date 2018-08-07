var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/config.js')[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize("y2np4ilf3ui4fifo", "xur6n0hr2hg8t4wac", "tfcnqu8zqfqkdc23", {
    host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })
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

