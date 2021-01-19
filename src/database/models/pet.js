module.exports = (sequelize, DataTypes) => {
  const Pet = sequelizen.define('Pet', {
    name: DataTypes.STRING,
    bread: DataTypes.STRING,
  }, {
    tableName: 'pets',
  })
}