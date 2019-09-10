import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllArtworks} from '../store'

class Collections extends Component {
  componentDidMount() {
    this.props.getAllArtworks()
  }

  render() {
    const artworks = this.props.artworks.allArtworks
    return (
      <div className="all-art-container">
        {/* take all the artworks, and only show the right ones? */}
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
                  <img src={artwork.image} style={{height: 400}} />
                </div>
              </Link>
              <div className="artwork-preview-text">
                <p>{artwork.artist}</p>
                <p>
                  {artwork.title}, {artwork.year}
                </p>
                <p>${artwork.price}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
