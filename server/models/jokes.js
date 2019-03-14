'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jokes = sequelize.define('Jokes', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Jokes.associate = function(models) {
    // associations can be defined here
  };
  return Jokes;
};