import React, { useContext } from 'react';

import Context from '../utils/context';

import OrderListItem from './OrderListItem';
import Button from '../Button';

import { getTotalPrice, getItemPrice, formatPrice, generateKey } from '../utils';

import { StyledCart, Content, OrderList, EmptyList, CartTotal } from './Styled';

const Cart = () => {
  const {
    cart: { orders, setOrders },
    cartRef,
    selectedItem: { setSelectedItem },
    auth: { auth, login },
    orderConfirm
  } = useContext(Context);

  const removeItem = index => {
    setOrders(orders.filter((order, i) => i !== index));
  };

  return (
    <StyledCart ref={cartRef} tabIndex="0">
      <h2>Корзина</h2>
      <Content>
          {
            orders.length ?
            <OrderList>
              {orders.map((order, i) =>
                <OrderListItem
                  key={generateKey(i)}
                  order={order}
                  removeItem={removeItem}
                  index={i}
                  setSelectedItem={setSelectedItem}
                />)}
            </OrderList>
            : <EmptyList>Корзина пока пуста</EmptyList>
          }
        {orders.length > 0
          && <CartTotal>
            <p>Сумма заказа: <b>{formatPrice(getTotalPrice(orders, getItemPrice))}</b></p>
            <Button
              type="button"
              text="Оформить заказ"
              onClick={() => {
                if (auth) {
                  orderConfirm.setIsOpened(true);
                } else {
                  login();
                }
              }}
            />
          </CartTotal>}
      </Content>
    </StyledCart>
  );
};

export default Cart;
