import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../utils/context';

import Button from '../../Button';
import { Overlay } from '../../Modal/Styled';
import { CartTotal } from '../Styled';

import { getTotalPrice, getItemPrice, formatPrice, projection } from '../../utils';

const Modal = styled.div`
  width: 600px;
  padding: 40px 25px;
  
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  background-color: #ffffff;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  
  font-size: 26px;
  line-height: 32px;
  font-weight: normal;
`;

const Emoji = styled.span`
  display: inline-block;
  margin-bottom: 30px;
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

  return (
    <Overlay ref={orderConfirm.overlayRef} onClick={orderConfirm.closeModal}>
      <Modal>
        <Title>
          <b>{auth.displayName},</b> <br/>
          Вам осталось только подтвердить заказ!
        </Title>
        <Emoji>😋😋😋</Emoji>
        <CartTotal>
          <p>Сумма заказа: <b>{formatPrice(getTotalPrice(orders, getItemPrice))}</b></p>
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
