export const getTotalPrice = order => {
  const toppingsCount = order.selectedToppings &&
    order.selectedToppings.filter(topping => topping.selected).length;
  const toppingPrice = 0.1;
  const toppingsPrices = (order.price * toppingPrice) * toppingsCount;

  return (order.price + toppingsPrices) * order.quantity;
}

export const formatPrice = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const projection = rules => {
  const keys = Object.keys(rules);

  return object => keys.reduce((newObject, key) => {
    newObject[key] = rules[key].reduce((value, fn, i) => (i ? fn(value) : object[fn]), null);
    return newObject;
  }, {});
};
