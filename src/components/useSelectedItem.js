import { useState } from 'react';

const useSelectedItem = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return { selectedItem, setSelectedItem };
};

export default useSelectedItem;
