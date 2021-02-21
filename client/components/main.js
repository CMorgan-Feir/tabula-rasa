import React from 'react'
import ArtworkPreview from './artwork-preview'
import EditorialPreview from './editorial-preview'
import Services from './services'
import {Link} from 'react-router-dom'

import Slider from './slider'
import CartContainer from './cart/cart-popup-container'

const images = [
  'https://morganfeir.s3.us-east-2.amazonaws.com/images/01-Cy-Twombly-This-Is-Glamorous.png',
  'https://assets.032c.com/2011/02/AAC289017.jpg',
  'https://assets.032c.com/2011/02/AAC289026.jpg',
  'https://images.fineartamerica.com/images-medium-large-5/cy-twombly-sitting-in-his-apartment-horst-p-horst.jpg'
]

const Main = () => {
  return (
    <div>
      <CartContainer />
      <Slider slides={images} />
      <div className="shop-preview">
        <div className="shop-styles">
          <div className="styles-content">
            <p className="hero-intro-font">Shop by Styles</p>
            <div className="style-list">
              <ul className="style-list-items">
                <li className="style-li">
                  <Link to="/collections/abstract" className="header-nav-link">
                    Abstract
                  </Link>
                </li>
                <li className="style-li">
                  <Link to="/collections/botanical" className="header-nav-link">
                    Botanicals
                  </Link>
                </li>
                <li className="style-li">
                  <Link
                    to="/collections/photography"
                    className="header-nav-link"
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="preview-work, shop-preview-work">
          <ArtworkPreview />
        </div>
      </div>
      <div className="preview-work" id="editorial-preview-container">
        <Link to="/editorial">
          <EditorialPreview />
        </Link>
      </div>
      <div className="preview-services">
        <Services />
      </div>
    </div>
  )
}

export default Main
