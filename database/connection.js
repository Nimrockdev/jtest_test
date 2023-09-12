const { Sequelize } = require('sequelize');

const conexion = new Sequelize('node', 'root', 'voyager2', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = { conexion };