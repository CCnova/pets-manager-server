module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    bread: DataTypes.STRING,

    userId: DataTypes.INTEGER, 
  }, {
    tableName: 'Pets',
  })

  Pet.associate = (models) => {
    Pet.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Pet;
}