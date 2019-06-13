import styled from 'styled-components'

export default styled.main`
margin: 0;
padding: 0;
grid-column: 1 / 4;
grid-row: 1 / 3;
background: white;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
z-index: 1;
background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI5MCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSI5MCIgZmlsbD0id2hpdGUiPjwvcmVjdD4KPHJlY3QgeD0iMTUiIHdpZHRoPSIyNSIgaGVpZ2h0PSI5MCIgZmlsbD0iI2ZjZmNmYyI+PC9yZWN0Pgo8L3N2Zz4=");
background-repeat: repeat;
display: grid;
grid-template-columns: 
  minmax(1rem, 1fr) 
  minmax(1rem, 40rem) 
  minmax(1rem, 1fr)
;
grid-template-rows: auto;

@media (min-width: 50rem) {
  grid-column: 2 / 3;
  grid-row: 1 / 5;
}
`