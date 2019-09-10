import React from 'react'

const ServicesDetails = () => {
  return (
    <div className="all-services-container">
      <div className="services-installation-container">
        <div>
          <img
            id="installation-image"
            src="https://morganfeir.s3.us-east-2.amazonaws.com/images/Photo-Jan-11-12-29-08-PM.jpg"
          />
        </div>
        <div className="services-installation-text">
          <h1>Installation</h1>
          <ul className="style-list-items installation-list">
            <li className="installation-items">
              Hanging on brick, drywall, concrete, tile and marble
            </li>
            <li className="installation-items">
              Collection layout and spatial design
            </li>
            <li className="installation-items">
              Plexiglass covered photograths, neons
            </li>
            <li className="installation-items">
              Art and antique removal from shipping crates
            </li>
          </ul>
        </div>
      </div>
      <div className="services-partnership-container">
        <div>
          <h1>Partnerships</h1>
        </div>
        <div>
          <p>
            Combining innovation and art world experience, Tabula Rasa bridges
            the gap between e-commerce and the traditional gallery model, making
            art accessible to all. We are always looking to source the highest
            quality affordable artwork for projects of any size and budget—if
            you are a gallerist or dealer who believes that your artist roster
            could be a good curatorial fit for our project, please reach out.
          </p>
        </div>
      </div>
      <div className="services-advisory-container">
        <h1>Advisory</h1>
        <img
          id="advisory-image"
          src="https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/Screen+Shot+2019-09-09+at+8.03.32+PM.png"
        />
        <p>
          Not sure where to start? Our expert advisory team has years of
          experience in the contemporary art industry and unparalleled knowledge
          of the art market. They can assist you with art acquisition, curation,
          as well as offering personal consultation in art investment and
          collection development with no commitment by you.<br />
          <br />For more information on advisory services, email us at
          advising@tabularasa.com
        </p>
      </div>
      <div className="services-details-container">
        <h1>Clients</h1>
      </div>
    </div>
  )
}

export default ServicesDetails
