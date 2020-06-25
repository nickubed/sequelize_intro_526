'use strict';
module.exports = (sequelize, DataTypes) => {
  const toy = sequelize.define('toy', {
    type: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  toy.associate = function(models) {
    // associations can be defined here
    models.toy.belongsToMany(models.pet, {through: 'petsToys'})
  };
  return toy;
};