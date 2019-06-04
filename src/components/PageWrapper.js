import styled from 'styled-components'

export default styled.main`
margin: 0;
padding: 0;
grid-column: 1 / 4;
grid-row: 1 / 3;
background: white;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
z-index: 0;
display: grid;
grid-template-columns: 
  minmax(1rem, 1fr) 
  minmax(1rem, 40rem) 
  minmax(1rem, 1fr);

@media (min-width: 50rem) {
  grid-column: 2 / 3;
  grid-row: 1 / 5;
}
`