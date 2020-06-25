'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  pet.associate = function(models) {
    // associations can be defined here
    models.pet.belongsTo(models.user);
    models.pet.belongsToMany(models.toy, {through: 'petsToys'})
  };
  return pet;
};