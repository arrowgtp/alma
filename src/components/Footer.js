import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

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

const P = styled.p`
  line-height: 2;
  margin: 0;
  padding: 0;
`

const Spacer = styled.div`
  height: 2rem;
`

const BannerSpacer = styled.div`
  height: 12vh;
`

const Footer = ({ intl }) => {
  return (
    <FooterContainer>
      <Spacer/>
      <P>{intl.formatMessage({ id: "copyright-notice" })}</P>
      <Spacer/>
      <P>{intl.formatMessage({ id: "solicitation-notice" })}</P>
      <Spacer/>
      <P>Contact Us:</P>
      <P>1.714.689.8554</P>
      <P>575 Anton Blvd Suite 650 Costa Mesa, CA 92626</P>
      <BannerSpacer/>
    </FooterContainer>
  )
}

export default injectIntl(Footer)