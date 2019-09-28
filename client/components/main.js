import React from 'react'
import ArtworkPreview from './artwork-preview'
import EditorialPreview from './editorial-preview'
import Services from './services'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className="hero-image-container">
        <Link to="/collections/twombly" className="header-nav-link">
          <div className="hero-image">
            <div className="hero-titles">
              <div>
                <p className="hero-intro-font">Introducing Cy Twombly</p>
              </div>
              <div>
                <h1>COLLECT NOW</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
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
