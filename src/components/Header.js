import React from 'react'
import styled from 'styled-components'
import almaHeaderBlue from '../images/alma/alma-header-blue.svg'
import almaHeaderPhone from '../images/alma/alma-header-phone.svg'
import almaHeaderWhite from '../images/alma/alma-header-white.svg'

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  /* border: 1px solid red; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  /* filter: drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.5)); */
  /* filter:
    ${props => props.white ?
      "drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.25))"
      :
      "none"
    }
  ; */
`

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
  align-self: center;
  justify-self: center;
  line-height: 1;
  color: ${props => props.white ? "#007eb5" : "white"};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: calc(4px + (8 - 4) * ((100vw - 300px) / (1600 - 300)));
  font-size: calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  font-weight: 700;
  text-shadow: ${props => props.white ? "none" : "0px 0px 8px hsla(0, 0%, 0%, 0.25)"};
  margin-right: -8px;

  @media (min-width: 50rem) {
    font-size: calc(18px + (40 - 18) * ((100vw - 300px) / (1600 - 300)));
    margin-right: -24px;
  }
`

const HeaderBackground = styled.img`
  margin: 0;
  padding: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
  align-self: stretch;
  justify-self: stretch;
  width: 100%;
  height: auto;
  /* min-height: 6rem;
  max-height: 8rem; */
  object-fit: fill;
  opacity: 0.9;
`

const Header = (props) => {

  return (
    <HeaderContainer white={props.white}>
      <HeaderTitle white={props.white}>{props.title}</HeaderTitle>
      <HeaderBackground src={props.white ? almaHeaderWhite : almaHeaderPhone} alt='Decorative Alma Heading Background Image.'/>
    </HeaderContainer>
  )
}

export default Header