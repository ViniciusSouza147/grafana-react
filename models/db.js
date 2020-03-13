const Sequelize = require('sequelize');
//Conexão com o banco de Dados
const sequelize = new Sequelize('postapp', 'grafana', 'Aa15624987**', {
    host: "192.168.61.135",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}