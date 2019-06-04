import styled from 'styled-components'

export default styled.header`
  margin: 0;
  padding: 0;
  text-decoration: none;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  /* box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1); */
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  /* border: 1px solid black; */

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 60vh;
    flex-direction: column;
    font-size: 18px;
  }
`