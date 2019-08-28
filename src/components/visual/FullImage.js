import styled from 'styled-components'
import Img from 'gatsby-image'

const FullImage = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 1rem;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.1);


  @media (min-width: 50rem) {
    margin: 0 2rem;
    border-radius: 24px;
  }

  @media (min-width: 75rem ) {
    margin: 0 8rem;
  }

  @media (min-width: 100rem ) {
    margin: 0 12rem;
  }
`

const Image = styled(Img)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  border-radius: 16px;
  z-index: 1;
`

export { FullImage, Image }