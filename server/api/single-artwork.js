const router = require('express').Router()
const {Artworks} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Artworks.findByPk(req.params.id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})
