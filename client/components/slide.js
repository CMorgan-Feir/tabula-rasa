import React from 'react'
import {css} from '@emotion/react'

const Slide = ({content}) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.9;
    `}
  />
)

export default Slide
