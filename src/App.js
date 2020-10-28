import React from 'react';
import { createGlobalStyle } from 'styled-components';

import './css/fonts.css';

import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  // normalize
  
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  a {
    background-color: transparent;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  
  button,
  input {
    overflow: visible;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  // /normalize

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
  
  @media (max-width: 1399px) {
    .container {
    padding-right: 30px;
    padding-left: 30px;
    }
  }
  
  @media (max-width: 767px) {
    .container {
    padding-right: 20px;
    padding-left: 20px;
    }
  }
  
  .App {
    max-width: 1300px;
    height: 100vh;
    margin: 0 auto;
    
    background-color: #ffffff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
          <Header />
      </div>
    </>
  );
}

export default App;
