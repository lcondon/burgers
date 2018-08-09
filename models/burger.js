
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        routeName: DataTypes.STRING,
        burgerName: {type:DataTypes.STRING, allowNull: false},
        devoured: {type:DataTypes.BOOLEAN, defaultValue: false}
    }, {freezeTableName: true});
    return Burgers;
  };
  
