import { useState } from 'react';

const useQuantity = selectedItem => {
  const [quantity, setQuantity] = useState(selectedItem.quantity ?? 1);

  const handleChange = evt => setQuantity(evt.target.value);

  return { quantity, setQuantity, handleChange };
};

export default useQuantity;
