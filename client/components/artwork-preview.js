import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllArtworks} from '../store'
import {Link} from 'react-router-dom'

class ArtworkPreview extends Component {
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
    const artworks = this.props.artworks.allArtworks.slice(0, 6)
    return (
      <div className="all-preview-container">
        {artworks.map(artwork => (
          <div key={artwork.id} className="artwork-preview-container">
            <Link to={`/single-artwork/${artwork.id}`}>
              <div className="artwork-preview-image">
                <img src={artwork.image} style={{height: 300}} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkPreview)
