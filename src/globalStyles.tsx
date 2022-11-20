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
    font-family: 'Karla', sans-serif;
    color: #667085;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button, input {
    outline: none;
    border: none;
    font-family: inherit;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }

`
