import React from 'react';

import './css/fonts.css';

import GlobalStyle from './components/Styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Modal from './components/Modal';

import useSelectedItem from './components/Hooks/useSelectedItem';
import useCart from './components/Hooks/useCart';

const App = () => {
  const selectedItem = useSelectedItem();
  const cart = useCart();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Cart {...cart} />
      <Catalog {...selectedItem} />
      {selectedItem.selectedItem && <Modal {...selectedItem} {...cart} />}
    </>
  );
}

export default App;
