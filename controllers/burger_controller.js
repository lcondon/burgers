var express = require('express');
var dbase = require('../models');

module.exports = function (app) {


    app.get(['/api/burgers','/','/home'], function(req,res){
        var burgers = {};
        dbase.Burgers.findAll({
            where: {
                devoured: true
            }
        }).then(function (result1) {
            burgers.eaten = result1;
        })
        dbase.Burgers.findAll({
            where: {
                devoured: false
            }
        }).then(function (result2) {
            burgers.uneaten = result2;
            res.render('index', {
                burgers: burgers
            })
        })
    });

    app.post('/api/burgers', function (req, res) {
        var burger = req.body;

        var routeName = burger.burgerName.replace(/\s+/g, "").toLowerCase();

        dbase.Burgers.create({
            routeName: routeName,
            burgerName: burger.burgerName,
            devoured: false
        })
        res.send(routeName);
    })

    app.put('/api/burgers', function (req, res) {
        var bgName = req.body.route;
        console.log(bgName)
        dbase.Burgers.update({
            devoured: true
          }, {
            where: {
              routeName: bgName
            }
          }).then(function () {
            res.end();
        })
    })
};