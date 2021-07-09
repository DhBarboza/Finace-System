// Settings conection with MySql database:
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('finance', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;