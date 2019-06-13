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
background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
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