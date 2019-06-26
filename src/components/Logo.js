import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

export default styled(Link)`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  display: none;
  /* border: 1px solid black; */

  > img {
    /* max-width: 200px; */
    width: calc(128px + ( 256 - 128) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 0;
    filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 50rem) {
    display: flex;
    grid-column: 1 / 2;
    z-index: 5;

    > img {
      /* max-width: 50%; */
      width: calc(128px + (256 - 128) * ((100vw - 300px) / (1600 - 300)));
      filter: none;
    }
  }
`