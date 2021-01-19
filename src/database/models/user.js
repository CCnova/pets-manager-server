const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.string,
    email: DataTypes.string,
    password: DataTypes.string,
  });

  return User;
}