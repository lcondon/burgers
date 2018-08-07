var express = require('express');
var Burgers = require('../models/burger');

Burgers.sync();

module.exports = function (app) {
    app.get(['/', '/home'], function (req, res) {
        var burgers = {};
        Burgers.findAll({
            where: {
                devoured: true
            }
        }).then(function (result) {
            burgers.eaten = result;
        })
        Burgers.findAll({
            where: {
                devoured: false
            }
        }).then(function (result) {
            burgers.uneaten = result;
            res.render('index', {
                burgers: burgers
            })
        })
    });

    app.post('/api/new', function (req, res) {
        var burger = req.body;

        var routeName = burger.burgerName.replace(/\s+/g, "").toLowerCase();

        Burgers.create({
            routeName: routeName,
            burgerName: burger.burgerName,
            devoured: false
        })
        res.send(routeName);
    })

    app.post('/api/eaten', function (req, res) {
        var bgName = req.body.route;
        console.log(bgName)
        Burgers.findOne({
            where: { routeName: bgName }
        }).then(function (obj) {
            if (obj) {
                obj.update({ devoured: true })
            }
            res.end();
        })
    })
};