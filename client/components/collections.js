import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllArtworks} from '../store'
import CartContainer from './cart/cart-popup-container'

class Collections extends Component {
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
    this.props.getAllArtworks()
  }

  formatPrice(price) {
    return this.state.formatter.format(price)
  }

  render() {
    const artworks = this.props.artworks.allArtworks
    return (
      <>
        <CartContainer />
        <div className="all-art-container">
          {/* take all the artworks, and only show the right ones */}
          {artworks
            .filter(artwork => {
              if (this.props.type === 'all-art') {
                return true
              } else {
                return artwork[this.props.type] === this.props.value
              }
            })
            .map(artwork => (
              <div key={artwork.id} className="artwork-preview-container">
                <Link to={`/single-artwork/${artwork.id}`}>
                  <div className="artwork-preview-image">
                    <img className="collection-image" src={artwork.image} />
                  </div>
                </Link>
                <div className="artwork-preview-text">
                  <p>{artwork.artist}</p>
                  <p>
                    {artwork.title}, {artwork.year}
                  </p>
                  <p>{this.formatPrice(artwork.price)}</p>
                </div>
              </div>
            ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    artworks: state.allArtworks
  }
}

const mapDispatchToProps = dispatch => {
  return {getAllArtworks: () => dispatch(getAllArtworks())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
