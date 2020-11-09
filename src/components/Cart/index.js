import React from 'react';
import styled from 'styled-components';

import OrderListItem from './OrderListItem';
import Button from '../Button';

import { getTotalPrice, formatPrice, projection } from '../utils';

const StyledCart = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;
  transform: translateX(-360px);
  
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  padding-right: 60px;
  
  color: #333333;
  
  background-color: #ef9f67;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.25);
  
  transition: 0.3s ease-out;
  
  &:hover,
  &:focus {  
    transform: translateX(0);
  }
  
  h2 {
    position: absolute;
    top: 50%;
    right: -35px;
    transform: translateY(-50%) rotate(270deg);
    
    margin: 0;
    
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    color: #ffffff;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 25px;
  
  font-size: 24px;
  line-height: 28px;

  background-color: #ffffff;
  
  overflow-y: auto;
`;

const OrderList = styled.ul`
  margin: 0;
  padding: 15px 0;
  list-style-type: none;
`;

const CartTotal = styled.div`
  margin-top: auto;
  padding: 15px 0;
  
  text-align: center;
  
  p {
    margin: 0;
    margin-bottom: 15px;
  }
  
  button {
    width: 100%;
    
    font-size: 20px;
    line-height: 50px;
  }
`;

const EmptyList = styled.p`
  margin: 15px 0;
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

const Cart = ({ orders, setOrders, setSelectedItem, auth, login, firebaseDatabase }) => {

  const database = firebaseDatabase();

  const sendOrders = () => {
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

  const totalPrice = orders.reduce((totalPrice, order) =>
    totalPrice + getTotalPrice(order), 0);

  const removeItem = index => {
    setOrders(orders.filter((order, i) => i !== index));
  };

  return (
    <StyledCart>
      <h2>Корзина</h2>
      <Content>
          {
            orders.length ?
            <OrderList>
              {orders.map((order, i) =>
                <OrderListItem
                  key={i}
                  order={order}
                  removeItem={removeItem}
                  index={i}
                  setSelectedItem={setSelectedItem}
                />)}
            </OrderList>
            : <EmptyList>Корзина пока пуста</EmptyList>
          }
        <CartTotal>
          <p>Сумма заказа: <b>{formatPrice(totalPrice)}</b></p>
          <Button
            type="button"
            text="Оформить заказ"
            onClick={() => {
              if (auth) {
                sendOrders();
                setOrders([]);
              } else {
                login();
              }
            }}
          />
        </CartTotal>
      </Content>
    </StyledCart>
  );
};

export default Cart;
