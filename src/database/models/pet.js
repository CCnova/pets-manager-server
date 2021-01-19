module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    bread: DataTypes.STRING,
  }, {
    tableName: 'pets',
  })

  return Pet;
}