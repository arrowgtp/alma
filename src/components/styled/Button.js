import styled from 'styled-components'

export default styled.button`
  background-color: rgb(45,101,142);
  background: linear-gradient(0deg, rgba(45,101,142,1) 0%, rgba(81,168,190,1) 100%);
  background: linear-gradient(0deg, hsla(205, 52%, 37%, 1) 0%, hsla(192, 46%, 53%, 1) 100%);
  border: 2px solid #AF875D;
  border-radius: 32px;
  color: white;
  padding: 12px 18px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  min-width: 110px;
  outline: none;
  transition: background 0.5s ease, color 0.5s ease;

  :hover {
    background: linear-gradient(0deg, hsla(205, 58%, 33%, 1) 0%, hsla(192, 43%, 49%, 1) 100%);
    color: #eee;
    cursor: pointer;
  }

  @media (min-width: 50rem) {

  }
`