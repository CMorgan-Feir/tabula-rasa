const Sequelize = require('sequelize')
const db = require('../db')

const Artwork = db.define('artwork', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://bit.ly/2YvaltZ'
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Artwork
