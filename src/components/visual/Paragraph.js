import styled from 'styled-components'

export default styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', 'DM Serif Display', 'Lato';
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  background: -webkit-linear-gradient(#006674, #004566);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 50rem) {
    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  }
`