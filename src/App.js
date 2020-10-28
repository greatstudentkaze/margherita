import React from 'react';

import './css/fonts.css';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
          <Header />
          <Catalog />
      </div>
    </>
  );
}

export default App;
