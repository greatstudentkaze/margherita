import React from 'react';

import './css/fonts.css';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Modal from './components/Catalog/Modal';

import useSelectedItem from './components/useSelectedItem';

const App = () => {
  const selectedItem = useSelectedItem();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Cart />
      <Catalog {...selectedItem} />
      {selectedItem.selectedItem && <Modal {...selectedItem} />}
    </>
  );
}

export default App;
