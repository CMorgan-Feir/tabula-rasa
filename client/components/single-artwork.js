import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleArtwork, addArtworkToOrder} from '../store'
// import ErrorPage from './error'
// import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class SingleArtwork extends React.Component {
  componentDidMount() {
    this.props.fetchSingleArtwork(this.props.match.params.artworkId)
  }

  addToCart = () => {
    this.props.addArtworkToOrder(this.props.match.params.artworkId)
    return alert(`${this.props.artwork.title} has been added to your cart`)
  }

  render() {
    if (this.props.artwork) {
      const artwork = this.props.artwork
      return (
        <div className="single-artwork-container">
          <div className="single-artwork-image">
            <img src={artwork.image} />
          </div>
          <div className="single-artwork-details">
            <h2>{artwork.artist}</h2>
            <h1>{artwork.title}</h1>
            <p>{artwork.year}</p>
            <p>${artwork.price}</p>
            <button
              type="submit"
              onClick={this.addToCart}
              className="sign-in-button"
            >
              Add to cart
            </button>
          </div>
        </div>
      )
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  if (state.allArtworks.artwork) {
    return {
      artwork: state.allArtworks.artwork,
      title: state.allArtworks.artwork.title,
      artist: state.allArtworks.artwork.artist,
      price: state.allArtworks.artwork.price,
      year: state.allArtworks.artwork.year,
      image: state.allArtworks.artwork.image
      // isLoggedIn: !!state.user.id
    }
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleArtwork: artworkId => dispatch(fetchSingleArtwork(artworkId)),
    addArtworkToOrder: artworkId => dispatch(addArtworkToOrder(artworkId))
  }
}

export default connect(mapState, mapDispatch)(SingleArtwork)
