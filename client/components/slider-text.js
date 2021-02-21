/** @jsx jsx */
import {css, jsx} from '@emotion/react'

const SliderText = () => (
  <div
    css={css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: xx-large;
    `}
  >
    <div>
      <p
        css={css`
          font-family: 'Oswald', sans-serif;
        `}
      >
        Introducing Cy Twombly
      </p>
    </div>
    <div>
      <h1>COLLECT NOW</h1>
    </div>
  </div>
)

export default SliderText
