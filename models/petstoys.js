'use strict';
module.exports = (sequelize, DataTypes) => {
  const petsToys = sequelize.define('petsToys', {
    petId: DataTypes.INTEGER,
    toyId: DataTypes.INTEGER
  }, {});
  petsToys.associate = function(models) {
    // associations can be defined here
  };
  return petsToys;
};