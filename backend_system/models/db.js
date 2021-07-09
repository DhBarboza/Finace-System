// Settings conection with MySql database:
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("finance", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado com sucesso");
}).catch((err) => {
    console.log("Erro ao conectar-se com banco de dados");
});

module.exports = sequelize;
