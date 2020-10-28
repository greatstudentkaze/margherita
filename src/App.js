import React from 'react';

import './css/fonts.css';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Modal from './components/Catalog/Modal';

const App = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Catalog setSelectedItem={setSelectedItem} />
      <Modal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
}

export default App;
