import styled from 'styled-components'

const Box = styled.div`
  margin: 0;
  padding: 0; 
  position: relative;

  ${props => props.center && `grid-column: 2 / 3;`}

  ${props => props.full && `grid-column: 1 / 4;`}

  ${props => props.flex && `
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (orientation: landscape) {
      padding: 4rem;
      flex-direction: row;
    }
  `}

  ${props => props.featured && `
    grid-column: 1 / 4;
    position: relative;
    margin: 0;
    padding: 0;
    height: calc(var(--vh, 1vh) * 90);
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);

    @media (orientation: landscape) {
      height: 100vh;
    }
  `}
`

export default Box