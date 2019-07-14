import styled from 'styled-components'

export default styled.p`
  margin: 1rem 0;
  padding: 0;
  font-family: 'Work Sans', 'DM Serif Display', 'Lato';
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  background: -webkit-linear-gradient(#009bb1, #005f8b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 50rem) {
    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`