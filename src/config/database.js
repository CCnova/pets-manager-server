require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'postgres',
  define: {
    timestamps: true,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
  }
}
