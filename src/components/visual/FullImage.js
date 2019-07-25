import styled from 'styled-components'
import Img from 'gatsby-image'

export default styled(Img)`
  box-sizing: border-box;
  margin: 1rem;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.1);


  @media (min-width: 50rem) {
    display: block;
    margin: 0 2rem;
    border-radius: 24px;
    /* max-width: 70rem; */
    /* align-self: center; */
  }

  @media (min-width: 75rem ) {
    margin: 0 8rem;
  }

  @media (min-width: 100rem ) {
    margin: 0 12rem;
  }
`