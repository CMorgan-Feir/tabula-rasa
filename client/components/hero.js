import React from 'react'
import {Link} from 'react-router-dom'
import HeroStyles from './hero.module.css'

const Hero = () => (
  <div>
    <Link to="/collections/twombly">
      <div className={HeroStyles['hero-image']}>
        <div className={HeroStyles['hero-titles']}>
          <div>
            <p className={HeroStyles['hero-intro-font']}>
              Introducing Cy Twombly
            </p>
          </div>
          <div>
            <h1>COLLECT NOW</h1>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Hero
