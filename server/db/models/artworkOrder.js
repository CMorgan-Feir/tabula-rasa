const Sequelize = require('sequelize')
const db = require('../db')

const ArtworkOrder = db.define('artworkOrder', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = ArtworkOrder
