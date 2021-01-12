import { createGlobalStyle } from 'styled-components';

import Normalize from './Normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  html,
  body {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  
    font-family: "Blogger Sans", "Tahoma", sans-serif;
    font-style: normal;
    font-weight: normal;
  
    background-color: #ffda89;
    cursor: default;
  }
  
  @media (max-width: 1399px) {
    body {
    padding-right: 50px;
    padding-left: 50px;
    }
  }
  
  @media (max-width: 767px) {
    body {
      padding: 0;
    }
  }
  
  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
  
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  
    white-space: nowrap;
  
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  
  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding-right: 50px;
    padding-left: 50px;
  }
  
  @media (max-width: 1420px) {
    .container {
      position: relative;
      right: -30px;
    }
  }
  
  @media (max-width: 1399px) {
    .container {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
  
  @media (max-width: 767px) {
    .container {
      right: auto;
      
      padding-right: 20px;
      padding-left: 80px;
    }
  }
  
  .App {
    max-width: 1300px;
    height: 100vh;
    margin: 0 auto;
    
    background-color: #ffffff;
  }
`;

export default GlobalStyle;
