var express = require('express');
var orm = require('../config/orm');

module.exports = function (app) {


    app.get(['/api/burgers','/','/home'], function(req,res){
        var burgers = {
            eaten: [],
            uneaten: []
        };
        orm.selectAll(function(results){
            for(var i = 0; i < results.length; i++){
                if(results[i].devoured == true){
                    burgers.eaten.push(results[i])
                } else {
                    burgers.uneaten.push(results[i])
                }
            }
            res.render('index', {
                burgers: burgers
            })

        })
    });

    app.post('/api/burgers', function (req, res) {
        var burger = req.body;

        burger.routeName = burger.burgerName.replace(/\s+/g, "").toLowerCase();

        orm.insertOne(burger, function(results){
            res.send(burger.routeName);
        })
        
    })

    app.put('/api/burgers', function (req, res) {
        var bgName = req.body.route;
        console.log(bgName)
        orm.devourOne(bgName, function(results){
            res.end();
        });
    })
};