import { useEffect } from 'react';

const useTitle =  selectedItem => {
  const title = selectedItem
    ? selectedItem.category === 'pizza'
      ? `Пицца - ${selectedItem.name}` : selectedItem.name
    : 'Margherita: осторожно вкусная пицца!';

  useEffect(() => document.title = title, [selectedItem, title]);
};

export default useTitle;
