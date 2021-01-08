import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import './css/fonts.css';

import GlobalStyle from './components/Styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Modal from './components/Modal';
import OrderConfirm from './components/Cart/OrderConfirm';
import OrderThank from './components/Cart/OrderThank';

import useSelectedItem from './components/Hooks/useSelectedItem';
import useCart from './components/Hooks/useCart';
import useAuth from './components/Hooks/useAuth';
import useTitle from './components/Hooks/useTitle';
import useDatabase from './components/Hooks/useDatabase';
import useOrderConfirm from './components/Hooks/useOrderConfirm';
import useOrderThank from './components/Hooks/useOrderThank';
import Context from './components/utils/context';

const firebaseConfig = {
  apiKey: "AIzaSyAYPzDlAeBGqoMgcqgpQu0Lup6GcJcEo_o",
  authDomain: "reactive-margherita.firebaseapp.com",
  databaseURL: "https://reactive-margherita.firebaseio.com",
  projectId: "reactive-margherita",
  storageBucket: "reactive-margherita.appspot.com",
  messagingSenderId: "375899325643",
  appId: "1:375899325643:web:a7523cb195eb2e0c8dc74e"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const auth = useAuth(firebase.auth);
  const selectedItem = useSelectedItem();
  const cart = useCart();
  const orderConfirm = useOrderConfirm();
  const orderThank = useOrderThank();
  const firebaseDatabase = firebase.database();
  const catalogDatabase = useDatabase(firebaseDatabase);
  useTitle(selectedItem.selectedItem);
  const cartRef = React.useRef(null);

  return (
    <Context.Provider
      value={{ auth, cart, cartRef, catalogDatabase, firebaseDatabase, orderConfirm, orderThank, selectedItem }}
    >
      <GlobalStyle />
      <Header />
      <Cart cartRef={cartRef} />
      <Catalog />
      {selectedItem.selectedItem && <Modal cartRef={cartRef} />}
      {orderConfirm.isOrderConfirmOpened && <OrderConfirm />}
      {orderThank.isOrderThankOpened && <OrderThank />}
    </Context.Provider>
  );
}

export default App;
