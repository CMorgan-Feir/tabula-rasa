const router = require('express').Router()
const {Order, ArtworkOrder, Artworks} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const order = await Order.findAll({
      where: {
        userId: userId
      }
    })
    const artworkOrder = await ArtworkOrder.findAll({
      where: {
        orderId: order[0].id
      }
    })
    let artworkArr = []
    for (let i = 0; i < artworkOrder.length; i++) {
      let artwork = artworkOrder[i]
      let artworkId = artwork.artworkId
      let quantity = artwork.quantity
      let artworkDetails = await Artworks.findByPk(artworkId)
      artworkDetails.dataValues.quantity = quantity
      artworkArr.push(artworkDetails)
    }
    res.json(artworkArr)
  } catch (error) {
    next(error)
  }
})

router.delete('/:artworkId', async (req, res, next) => {
  try {
    const userId = req.user.id
    const artworkOrder = await Order.findOne({
      where: {
        userId,
        completed: false
      }
    })
    const deletedArtwork = await ArtworkOrder.destroy({
      where: {
        artworkId: req.params.artworkId,
        orderId: artworkOrder.id
      }
    })
    res.json(deletedArtwork)
  } catch (error) {
    next(error)
  }
})
