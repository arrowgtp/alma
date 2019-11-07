import React from 'react'
import styled from 'styled-components'

import FullWidthContainer from './layout/FullWidthContainer'

import almaPattern3 from '../images/alma/alma-bg-pattern-3.svg'

const FooterContainer = styled(FullWidthContainer)`
  margin: 0;
  padding: 1rem;
  background: #888;
  background-image: url(${almaPattern3});
  background-repeat: repeat;
  background-size: 96px;
  box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.1);

  > p {
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    -webkit-text-fill-color: #ffffff;
    text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.25);
    text-align: center;
  }
`
const BannerSpacer = styled.div`
  height: 12vh;
`

const Footer = ({children}) => {
  return (
    <FooterContainer>
      {children}
      <BannerSpacer/>
    </FooterContainer>
  )
}

export default Footer