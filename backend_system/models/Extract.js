const Sequelize = require("sequelize");
const db = require("./db");

const Extract = db.define('extracts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  situation: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

Extract.sync();