import React from 'react'
import styled from 'styled-components'
import almaHeaderBlue from '../images/alma/alma-header-blue.svg'
import almaHeaderWhite from '../images/alma/alma-header-white.svg'

const HeaderContainer = styled.div`
  margin: 1rem 0;
  padding: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  /* filter: drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.5)); */
  filter:
    ${props => props.white ?
      "drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.3))"
      :
      "none"
    }
  ;
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
  letter-spacing: calc(12px + (28 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-size: calc(16px + (40 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand', 'Open Sans', 'DM Serif Display';
  font-style: medium;
  text-shadow: ${props => props.white ? "none" : "0px 0px 8px hsla(0, 0%, 0%, 0.25)"};
  margin-right: -10px;
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
  min-height: 6rem;
  max-height: 8rem;
  object-fit: fill;
  opacity: 0.9;
`

const Header = (props) => {

  return (
    <HeaderContainer white={props.white}>
      <HeaderTitle white={props.white}>{props.title}</HeaderTitle>
      <HeaderBackground src={props.white ? almaHeaderWhite : almaHeaderBlue}/>
    </HeaderContainer>
  )
}

export default Header