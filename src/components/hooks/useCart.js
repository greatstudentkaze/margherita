import { useState } from 'react';

const useCart = () => {
  const [orders, setOrders] = useState([]);

  return { orders, setOrders };
};

export default useCart;
