import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
// import { AniLink } from "gatsby-plugin-transition-link";
// import almaLogoWithBG from '../images/alma-logo-with-bg.svg'

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
    max-width: 200px;
    margin: 0;
    padding: 0;
    filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 50rem) {
    display: flex;
    grid-column: 1 / 2;
    z-index: 5;

    > img {
      max-width: 75%;
      filter: none;
    }
  }
`

// export default styled(AniLink)`
//   grid-column: 1 / 4;
//   grid-row: 1 / 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2;
//   /* border: 1px solid black; */

//   > img {
//     max-width: 200px;
//     margin: 0;
//     padding: 0;
//     filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25) );
//   }

//   @media (min-width: 50rem) {
//     grid-column: 1 / 2;

//     > img {
//       max-width: 75%;
//       filter: none;
//     }
//   }
// `