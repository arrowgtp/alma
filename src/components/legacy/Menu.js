import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

const SmallMenuContainer = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1000;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-items: center;

  @media (min-width: 50rem) {
    display: none;
  }
`

const LargeMenuContainer = styled.div`
  display: none;

  @media (min-width: 50rem) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-rows: 20vh 65vh 15vh;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    z-index: 100;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
    background-repeat: repeat;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    box-shadow:
      0 15px 30px 0 rgba(0,0,0,0.11),
      0 5px 15px 0 rgba(0,0,0,0.08)
    ;
  }
`

const Menu = ({ children }) => {

  return (
    <>
      <SmallMenuContainer>{children}</SmallMenuContainer>
      <LargeMenuContainer>{children}</LargeMenuContainer>
    </>
  )
}

export default injectIntl(Menu)