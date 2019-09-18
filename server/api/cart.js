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
              orderId: order[0].id
            }
          })
          let artworkArr = []
          for (let i = 0; i < artworkOrder.length; i++) {
            let artwork = artworkOrder[i]
            let artworkId = artwork.artworkId
            let quantity = artwork.quantity
            let artworkDetails = await Artworks.findByPk(artworkId)
            // This makes the quantity always 1
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

router.post('/', async (req, res, next) => {
  try {
    if (!req.user) {
      console.log('Using sessions!')
      if (req.session.cart === undefined) {
        req.session.cart = []
        const artwork = await Artworks.findByPk(req.body.artworkId)
        // Right now everything gets quantity of 1
        artwork.dataValues.quantity = 1
        req.session.cart.push(artwork)
        res.send(artwork)
      } else {
        const artwork = await Artworks.findByPk(req.body.artworkId)
        // console.log('Artwork ID', artwork.id)
        // console.log('Cart 0 ID', req.session.cart[0].id)
        let duplicates = req.session.cart.filter(
          artInCart => artInCart.id === artwork.id
        )
        // console.log('Duplicates:', duplicates.length)
        if (duplicates.length > 0) {
          for (let i = 0; i < req.session.cart.length; i++) {
            // console.log('Checking artwork', req.session.cart[i].id)
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
      const artwork = await Artworks.findByPk(req.body.artworkId)
      // TODO: Need to modify this line to allow user to have more than one artwork in the cart
      order.addArtwork(artwork)
      res.send(artwork)
    }
  } catch (err) {
    next(err)
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
