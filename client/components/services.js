import React from 'react'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <div>
          <h2 className="services-title-text">Services</h2>
          <p>
            The Tabula Rasa approach is to simplify the art-buying experience
            through accessibly priced replicas that have been tastefully
            curated.
          </p>
          <p>For more information, email us at advising@tabularasa.com.</p>
          <Link to="/services">
            <p className="services-title-text services-learn-more">
              Learn More
            </p>
          </Link>
        </div>
      </div>
      <div className="services-installation-box">
        <div>
          <Link to="/services">
            <img
              className="services-image"
              src="https://cdn.shopify.com/s/files/1/0941/7736/files/Jodi_Balfour1_250x250_crop_top@2x.jpg?v=1513553072"
            />
          </Link>
        </div>
        <div className="installation-text">
          <p className="services-title-text">Installation</p>
          <p>Leave the hanging to us.</p>
          <Link to="/services">
            <p className="services-learn-more">Learn More</p>
          </Link>
        </div>
      </div>
      <div className="services-gallery-partnerships-box">
        <div>
          <Link to="/services">
            <img
              className="services-image"
              src="https://cdn.shopify.com/s/files/1/0941/7736/files/service6_250x250_crop_top@2x.jpg?v=1564081172"
            />
          </Link>
        </div>
        <div className="partnership-text">
          <p className="services-title-text">Partnerships</p>
          <p>
            We collaborate with commercial partners for custom 3D-printed
            replicas and commissions.
          </p>
          <Link to="/services">
            <p className="services-learn-more">Learn More</p>
          </Link>
        </div>
      </div>
      <div className="services-advisory-box">
        <div>
          <Link to="/services">
            <img
              className="services-image"
              src="https://cdn.shopify.com/s/files/1/0941/7736/files/service10_250x250_crop_top@2x.jpg?v=1513557584"
            />
          </Link>
        </div>
        <div className="advisory-text">
          <p className="services-title-text">Advisory</p>
          <p> Not sure where to start? We can help.</p>
          <Link to="/services">
            <p className="services-learn-more">Learn More</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
