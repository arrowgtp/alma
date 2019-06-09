import styled from 'styled-components'
import almaBorder from '../../images/alma-border.svg'

export default styled.h1`
  margin: 1rem 1rem;
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 16px;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  /* color: #AF875D; */
  color: #a07b55;
  border-width: 32px;
  border: 32px solid;
  border-image: url(${almaBorder}) 32 stretch;
  font-family: 'Gothic A1', sans-serif;

  @media (min-width: 50rem) {
    font-size: calc(28px + (40 - 28) * ((100vw - 300px) / (1600 - 300)));
  }
`