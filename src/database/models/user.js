module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.Pet, { foreignKey: 'userId' });
  };

  return User;
}