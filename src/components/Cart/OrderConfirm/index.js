import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../utils/context';

import Button from '../../Button';
import { Overlay } from '../../Modal/Styled';
import { CartTotal } from '../Styled';

import { getTotalPrice, formatPrice, projection } from '../../utils';

const Modal = styled.div`
  width: 600px;
  padding: 30px;

  background-color: #ffffff;
`;

const SubTitle = styled.h3`
  margin: 0;
  margin-bottom: 30px;
  
  text-align: center;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  quantity: ['quantity'],
  toppings: [
    'selectedToppings',
    toppings => toppings
      .filter(topping => topping.selected)
      .map(topping => topping.name),
    toppings => toppings.length ? toppings : 'no toppings'
  ],
  choice: ['choice', item => item ? item : 'no choice'],
};

const sendOrders = (database, orders, auth) => {
  const formattedOrders = orders.map(projection(rulesData));

  database
    .ref('orders')
    .push()
    .set({
      clientName: auth.displayName,
      email: auth.email,
      order: formattedOrders
    });
};

const OrderConfirm = () => {
  const {
    firebaseDatabase: database,
    cart: { orders, setOrders },
    auth: { auth },
    orderConfirm,
    orderThank
  } = useContext(Context);

  const totalPrice = orders.reduce((totalPrice, order) =>
    totalPrice + getTotalPrice(order), 0);

  return (
    <Overlay ref={orderConfirm.overlayRef} onClick={orderConfirm.closeModal}>
      <Modal>
        <h2>{auth.displayName}</h2>
        <SubTitle>Осталось только подтвердить заказ!</SubTitle>
        <CartTotal>
          <p>Сумма заказа: <b>{formatPrice(totalPrice)}</b></p>
          <Button
            type="button"
            text="Подтвердить"
            onClick={() => {
              sendOrders(database, orders, auth);
              setOrders([]);
              orderConfirm.setIsOpened(false);
              setTimeout(orderThank.openModal, 200);
            }}
          />
        </CartTotal>
      </Modal>
    </Overlay>
  );
};

export default OrderConfirm;
