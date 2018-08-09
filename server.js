var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var handle = require('express-handlebars');

var dbase = require('./models');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./public/assets"));

require('./controllers/burger_controller')(app);

dbase.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

