const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/all-artworks', require('./all-artworks'))
router.use('/single-artwork', require('./single-artwork'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
