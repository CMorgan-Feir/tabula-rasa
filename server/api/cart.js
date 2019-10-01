/* eslint-disable max-statements */
const router = require('express').Router()
const {Order, ArtworkOrder, Artworks} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user === undefined) {
      if (req.session.cart === undefined) {
        req.session.cart = []
        res.json(req.session.cart)
      } else {
        res.json(req.session.cart)
      }
    } else {
      const userId = req.user.id
      if (userId) {
        const order = await Order.findOne({
          where: {
            userId: userId,
            completed: false
          }
        })
        if (!order) {
          res.json([])
        } else {
          const artworkOrder = await ArtworkOrder.findAll({
            where: {
              orderId: order.id
            }
          })
          let artworkArr = []
          for (let i = 0; i < artworkOrder.length; i++) {
            let artwork = artworkOrder[i]
            let artworkId = artwork.artworkId
            let quantity = artwork.quantity
            let artworkDetails = await Artworks.findByPk(artworkId)
            // This makes the quantity always 1
            artworkDetails.quantity = quantity
            artworkDetails.dataValues.quantity = quantity
            artworkArr.push(artworkDetails)
          }
          res.json(artworkArr)
        }
      }
    }
  } catch (error) {
    next(error)
  }
})

// eslint-disable-next-line complexity
// eslint-disable-next-line max-statements
// eslint-disable-next-line complexity
router.post('/', async (req, res, next) => {
  try {
    if (!req.user) {
      if (req.session.cart === undefined) {
        req.session.cart = []
        const artwork = await Artworks.findByPk(req.body.artworkId)
        // Right now everything gets quantity of 1
        artwork.dataValues.quantity = 1
        req.session.cart.push(artwork)
        res.send(artwork)
      } else {
        const artwork = await Artworks.findByPk(req.body.artworkId)
        let duplicates = req.session.cart.filter(
          artInCart => artInCart.id === artwork.id
        )
        if (duplicates.length > 0) {
          for (let i = 0; i < req.session.cart.length; i++) {
            if (req.session.cart[i].id === artwork.id) {
              req.session.cart[i].quantity++
              artwork.quantity = req.session.cart[i].quantity
            }
          }
        } else {
          artwork.dataValues.quantity = 1
          req.session.cart.push(artwork)
        }
        res.send(artwork)
      }
    } else {
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
      let artworkInOrder = await ArtworkOrder.findOne({
        where: {
          artworkId: req.body.artworkId,
          orderId: order.id
        }
      })
      if (artworkInOrder) {
        artworkInOrder.update({
          quantity: artworkInOrder.quantity + 1
        })
      } else {
        const artwork = await Artworks.findByPk(req.body.artworkId)
        order.addArtwork(artwork)
      }
      res.send(artwork)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:artworkId', async (req, res, next) => {
  try {
    if (req.user === undefined) {
      req.session.cart = req.session.cart.filter(
        artwork => artwork.id !== Number(req.params.artworkId)
      )
      res.json(req.session.cart)
    } else {
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
    }
  } catch (error) {
    next(error)
  }
})
