import React, { useContext } from 'react';

import Context from '../utils/context';

import Button from '../Button';
import ItemQuantity from './ItemQuantity';
import ItemToppings from './ItemToppings';
import ItemChoices from './ItemChoices';

import useQuantity from '../Hooks/useQuantity';
import useToppings from '../Hooks/useToppings';
import useChoice from '../Hooks/useChoice';
import { getTotalPrice, formatPrice } from '../utils';
import ItemContext from './ItemContext';

import { Overlay, ModalBlock, Image, Content, Price } from './Styled';

const Modal = () => {
  const { selectedItem: { selectedItem, setSelectedItem }, cart: { orders, setOrders } } = useContext(Context);

  const quantityCounter = useQuantity(selectedItem);
  const toppingsState = useToppings(selectedItem);
  const choiceState = useChoice(selectedItem);
  const { name, img, category } = selectedItem;
  const order = {
    ...selectedItem,
    quantity: quantityCounter.quantity,
    selectedToppings: toppingsState.toppings,
    choice: choiceState.choice
  };

  const isEdit = selectedItem.index > -1;

  const hideOverlay = overlay => {
    overlay.style.animationName = 'hide';
    setTimeout(() => setSelectedItem(null), 250);
  };

  const closeModal = evt => {
    if (evt.target.id !== 'overlay') return;

    hideOverlay(evt.target);
  };

  const addToCart = evt => {
    setOrders([...orders, order]);

    const overlay = evt.target.closest('#overlay');
    hideOverlay(overlay);
  };

  const editOrder = evt => {
    const newOrders = [...orders];
    newOrders[selectedItem.index] = order;
    setOrders(newOrders);

    const overlay = evt.target.closest('#overlay');
    hideOverlay(overlay);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <ModalBlock>
        <Image category={category}>
          <img src={img} alt={name}/>
        </Image>
        <Content>
          <h2>{name}</h2>
          <ItemContext.Provider value={{ quantityCounter, toppingsState, choiceState, selectedItem }}>
            <ItemQuantity />
            {selectedItem.toppings && <ItemToppings />}
            {selectedItem.choices && <ItemChoices />}
          </ItemContext.Provider>
          <Price>
            Стоимость: <span>{formatPrice(getTotalPrice(order))}</span>
          </Price>
          <Button
            handleClick={isEdit ? editOrder : addToCart}
            disabled={order.choices && !order.choice}
            text={isEdit ? "Редактировать" : "Добавить в корзину"}
            type="button" />
        </Content>
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
