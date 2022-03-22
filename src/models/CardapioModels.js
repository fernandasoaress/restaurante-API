const sequelize = require('../database/conectar.js')
const { DataTypes } = require('sequelize')

const Cardapio = sequelize.define('Cardapio', {
  entrada: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Insira a entrada'
      }
    }
  },
  pratoPrincipal: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Insira o prato principal'
      }
    }
  },
  sobremesa: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Insira a sobremesa'
      }
    }
  },
  bebida: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Insira a bebida'
      }
    }
  }
})

module.exports = Cardapio
