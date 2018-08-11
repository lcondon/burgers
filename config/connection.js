var mysql = require("mysql");

var local = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "march2195",
  database: "burgerORM"
};

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(local)
}


// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
