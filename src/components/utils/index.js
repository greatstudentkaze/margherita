export const getTotalPrice = order => order.price * order.quantity;

export const formatPrice = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
