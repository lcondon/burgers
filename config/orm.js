var connection = require('./connection');

orm = {
    selectAll: function(cb){
        var q = 'SELECT * FROM burgers';
        connection.query(q, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })

    },
    insertOne: function(bg, cb){
        var q = 'INSERT INTO burgers (routeName, burgerName) VALUES (?,?)';
        connection.query(q, [bg.routeName, bg.burgerName], function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })

    },
    devourOne: function(bg, cb){
        var q = 'UPDATE burgers SET devoured = true WHERE routeName = ?';
        connection.query(q, bg, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;