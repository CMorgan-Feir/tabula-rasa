import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer-container">
        <div className="footer-left">
          <div>
            <ul className="footer-links">
              <li>ABOUT</li>
              <li>CURATORIAL POLICY</li>
              <li>CAREERS</li>
              <li>SHIPPING / RETURNS / FAQS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="footer-row">
            {/* <ul className='social-icons'> */}
            <div>
              <i className="fa fa-facebook-square icons" />
            </div>
            <div>
              <i className="fa fa-instagram icons" />
            </div>
            <div>
              <i className="fa fa-twitter-square icons" />
            </div>
            <div>
              <i className="fa fa-pinterest-square icons" />
            </div>
            {/* </ul> */}
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-subscribe">
            <p className="footer-links">
              SIGN UP TO RECEIVE FREE SHIPPING ON YOUR FIRST ORDER
            </p>
          </div>
          <div className="subscribe-form">
            <form className="subscription-form">
              <input
                id="email-subscribe-form"
                type="email"
                placeholder="Enter Email Address"
              />
              <input type="submit" value="SUBSCRIBE" id="subscribe-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
