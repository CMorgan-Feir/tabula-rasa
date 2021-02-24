/** @jsx jsx */
import React, {useState, useEffect, useRef} from 'react'
import {css, jsx} from '@emotion/react'
import {Link} from 'react-router-dom'
import SliderContent from './slider-content'
import Slide from './slide'
import Dots from './dots'
import SliderText from './slider-text'

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth

  const transition = 0.45
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentWidth, setCurrentWidth] = useState(getWidth())

  const resizeRef = useRef()

  const handleResize = () => {
    setCurrentWidth(getWidth())
  }

  useEffect(() => {
    const resize = () => {
      resizeRef.current()
    }
    const onResize = window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    resizeRef.current = handleResize
  })

  return (
    <div
      css={css`
        position: relative;
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
      `}
    >
      <SliderContent
        translate={activeIndex * currentWidth}
        transition={transition}
        width={currentWidth * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Dots
        slides={props.slides}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Link to="/collections/twombly">
        <SliderText />
      </Link>
    </div>
  )
}

export default Slider
