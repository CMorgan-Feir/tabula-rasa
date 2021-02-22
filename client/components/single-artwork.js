import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleArtwork, addArtworkToOrder, clearArtwork} from '../store'
import CartContainer from './cart/cart-popup-container'

/**
 * COMPONENT
 */
class SingleArtwork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formatter: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
  }

  componentDidMount() {
    this.props.fetchSingleArtwork(this.props.match.params.artworkId)
  }

  componentWillUnmount() {
    this.props.clearArtwork()
  }

  formatPrice(price) {
    return this.state.formatter.format(price)
  }

  addToCart = async () => {
    await this.props.addArtworkToOrder(this.props.match.params.artworkId)
    console.log('In here and not pushing to cart here')
  }

  render() {
    if (this.props.loaded) {
      const artwork = this.props.artwork
      return (
        <>
          <CartContainer />
          <div className="single-artwork-container">
            <div className="single-artwork-image-container">
              <img className="single-artwork-image" src={artwork.image} />
            </div>
            <div className="single-artwork-details">
              <h2>{artwork.artist}</h2>
              <h1>{artwork.title}</h1>
              <p>{artwork.year}</p>
              <p>{this.formatPrice(artwork.price)}</p>
              <button
                type="submit"
                onClick={this.addToCart}
                className="sign-in-button"
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )
    } else {
      return <h2 />
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    artwork: state.allArtworks.artwork,
    title: state.allArtworks.artwork.title,
    artist: state.allArtworks.artwork.artist,
    price: state.allArtworks.artwork.price,
    year: state.allArtworks.artwork.year,
    image: state.allArtworks.artwork.image,
    loaded: state.allArtworks.loaded
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleArtwork: artworkId => dispatch(fetchSingleArtwork(artworkId)),
    addArtworkToOrder: artworkId => dispatch(addArtworkToOrder(artworkId)),
    clearArtwork: () => dispatch(clearArtwork())
  }
}

export default connect(mapState, mapDispatch)(SingleArtwork)
