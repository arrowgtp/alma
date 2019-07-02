import React, { useEffect } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* will-change: initial; */
  z-index: 1;

  @media (min-width: 50rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 6;
  }
`

const ContentContainer = (props) => {

  useEffect(() => {
    setTimeout(() => document.getElementById('ContentContainer').scrollTop = 0, 0);
  })

  return (
    <Main id='ContentContainer'>
      {props.children}
    </Main>
  )
}

export default ContentContainer