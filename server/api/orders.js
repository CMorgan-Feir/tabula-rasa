const router = require('express').Router()
const {Order, ArtworkOrder, Artworks} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const artworks = await ArtworkOrder.findAll({
      where: {
        orderId: req.params.orderId
      }
    })
    res.json(artworks)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      // Step 1: Use the req.user to find the appropriate order
      const userId = req.user.id
      let order = await Order.findOne({
        where: {
          userId: userId,
          completed: false
        }
      })
      if (!order) {
        order = await Order.create({userId: userId})
      }
      // Step 2: Add the artwork to the appropriate order
      const artwork = await Artworks.findByPk(req.body.artworkId)
      order.addArtwork(artwork)
      res.send(artwork)
    } else {
      res.send({})
    }
  } catch (err) {
    next(err)
  }
})
