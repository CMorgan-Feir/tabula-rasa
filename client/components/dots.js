/** @jsx jsx */
import {css, jsx} from '@emotion/react'

const Dot = ({active, setIndex}) => (
  <div
    css={css`
      margin-left: 8px;
      margin-right: 8px;
      width: 20px;
      height: 20px;
      color: white;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'white' : 'black'};
      opacity: ${active ? '1' : '0.5'};
    `}
    onClick={setIndex}
  />
)

const Dots = ({slides, activeIndex, setActiveIndex}) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot
        key={slide}
        active={activeIndex === i}
        setIndex={() => setActiveIndex(i)}
      />
    ))}
  </div>
)

export default Dots
