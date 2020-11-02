import { useState } from 'react';

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = evt => setQuantity(evt.target.value);

  return { quantity, setQuantity, handleChange };
};

export default useQuantity;
