import styled from 'styled-components'

const Space = styled.div`
  margin: 0;
  padding: 0;
  height: 2rem;
  width: 100%;
  /* border: 1px solid red; */
  @media (min-width: 50rem) {
    height: 2rem;
  }
`

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 4px;
  color: #be854d;
`

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  color: #be854d;
`

const H3 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  color: #be854d;
`

const P = styled.p`
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

const UL = styled.ul`
  font-family: 'Work Sans', sans-serif;
  margin: 2rem;
  padding: 0;
  background: -webkit-linear-gradient(#006674, #004566);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  list-style-type: circle;
`

const ListTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  letter-spacing: 2px;
  color: #be854d;
  -webkit-text-fill-color: #be854d;
`

const LI = styled.li`
  font-family: 'Work Sans', sans-serif;
  list-style-type: circle;
  font-size: 16px;
  padding: 0.25rem;
`

export { Space, H1, H2, H3, P, UL, ListTitle, LI }