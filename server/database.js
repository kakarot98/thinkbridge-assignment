const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test-db', 'root', 'root', {
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports = sequelize
