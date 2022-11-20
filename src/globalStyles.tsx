import { createGlobalStyle, css } from 'styled-components'

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

export const customScrollbar = css`
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 50%;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    box-shadow: inset 1px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #667085;
    border-radius: 2px;
  }
`
