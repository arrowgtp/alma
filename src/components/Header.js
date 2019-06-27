import React from 'react'
import styled from 'styled-components'
import almaHeader from '../images/alma-header-2.svg'

const HeaderContainer = styled.div`
  margin: 1rem 0;
  padding: 0;
  /* width: 100%;
  height: 100%; */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
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
  height: 100%;
  min-height: 6rem;
  max-height: 8rem;
  object-fit: fill;
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
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 16px;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-shadow: 0px 0px 8px hsla(0, 0%, 0%, 0.5);
  margin-right: -16px;
`

const Header = (props) => {

  return (
    <HeaderContainer>
      <HeaderTitle>{props.title}</HeaderTitle>
      <HeaderBackground src={almaHeader}/>
    </HeaderContainer>
  )
}

export default Header