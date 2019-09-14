const router = require('express').Router()
const {ArtworkOrder} = require('../db/models')
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
