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

import useSelectedItem from './components/Hooks/useSelectedItem';
import useCart from './components/Hooks/useCart';
import useAuth from './components/Hooks/useAuth';
import useTitle from './components/Hooks/useTitle';

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
  useTitle(selectedItem);

  return (
    <>
      <GlobalStyle />
      <Header {...auth} />
      <Cart {...cart} {...selectedItem} {...auth} firebaseDatabase={firebase.database} />
      <Catalog {...selectedItem} />
      {selectedItem.selectedItem && <Modal {...selectedItem} {...cart} />}
    </>
  );
}

export default App;
