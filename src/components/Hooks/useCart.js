import { useState, useEffect } from 'react';

const useCart = () => {
  const initialState = JSON.parse(localStorage.getItem('orders')) ?? [];
  const [orders, setOrders] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  return { orders, setOrders };
};

export default useCart;
