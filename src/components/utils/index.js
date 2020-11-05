export const getTotalPrice = order => {
  const toppingsCount = order.selectedToppings &&
    order.selectedToppings.filter(topping => topping.selected).length;
  const toppingPrice = 0.1;
  const toppingsPrices = (order.price * toppingPrice) * toppingsCount;

  return (order.price + toppingsPrices) * order.quantity;
}

export const formatPrice = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
