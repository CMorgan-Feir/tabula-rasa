const router = require('express').Router()
const {Artworks} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const artworks = await Artworks.findAll()
    res.json(artworks)
  } catch (error) {
    next(error)
  }
})
