export const getItemPrice = item => {
  const toppingsCount = item.selectedToppings &&
    item.selectedToppings.filter(topping => topping.selected).length;
  const toppingPrice = 0.1;
  const toppingsPrices = (item.price * toppingPrice) * toppingsCount;

  return (item.price + toppingsPrices) * item.quantity;
};

export const getTotalPrice = (items, getItemPrice) =>
  items.reduce((totalPrice, order) => totalPrice + getItemPrice(order), 0);

export const formatPrice = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const projection = rules => {
  const keys = Object.keys(rules);

  return object => keys.reduce((newObject, key) => {
    newObject[key] = rules[key].reduce((value, fn, i) => (i ? fn(value) : object[fn]), null);
    return newObject;
  }, {});
};

export const generateKey = id => `${id}_${new Date().getTime()}`;
