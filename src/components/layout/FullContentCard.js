import styled from 'styled-components'
import Img from 'gatsby-image'

const FullContentCard = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  height: 90vh;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media (min-width: 50rem) {
    height: 100vh;
  }
`

const FullContentImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 0;
`

const HeadingContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  margin: 0 2rem;
  z-index: 5;

  @media (min-width: 50rem) {
    grid-column: 2 / 8;
  }
`

export { FullContentCard, FullContentImage, HeadingContainer }