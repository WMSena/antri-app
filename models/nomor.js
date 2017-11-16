'use strict';
module.exports = (sequelize, DataTypes) => {
  var nomor = sequelize.define('nomor', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return nomor;
};