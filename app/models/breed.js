'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breed = sequelize.define('Breed', {
    name: DataTypes.STRING,
    key: DataTypes.STRING
  }, {});
  Breed.associate = function(models) {
    // associations can be defined here
  };
  return Breed;
};