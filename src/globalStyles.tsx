import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  button {
    outline: none;
    border: none;
    font-family: inherit;
  }
`
