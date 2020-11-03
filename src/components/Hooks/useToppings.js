import { useState } from 'react';

const getToppingItems = toppings => toppings.map(topping => ({ name: topping, selected: false }));

const useToppings = selectedItem => {
  const [toppings, setToppings] = useState(getToppingItems(selectedItem.toppings ?? []));

  const toggleTopping = index =>
    setToppings(toppings.map((topping, i) => {
      const newTopping = {...topping};
      if (i === index) newTopping.selected = !newTopping.selected;
      return newTopping;
    }));

  return { toppings, toggleTopping };
};

export default useToppings;
