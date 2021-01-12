import React, { useContext, useRef } from 'react';

import Context from '../utils/context';

import Button from '../Button';
import ItemQuantity from './ItemQuantity';
import ItemToppings from './ItemToppings';
import ItemChoices from './ItemChoices';

import useQuantity from '../Hooks/useQuantity';
import useToppings from '../Hooks/useToppings';
import useChoice from '../Hooks/useChoice';
import { getItemPrice, formatPrice } from '../utils';
import ItemContext from './ItemContext';

import { Overlay, ModalBlock, Image, Content, Price, CloseButton } from './Styled';

const Modal = () => {
  const { selectedItem: { selectedItem, setSelectedItem }, cart: { orders, setOrders }, cartRef } = useContext(Context);

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
  const overlayRef = useRef(null);

  const isEdit = selectedItem.index > -1;

  const hideOverlay = overlay => {
    overlay.style.animationName = 'hide';
    setTimeout(() => setSelectedItem(null), 250);
  };

  const focusCart = () => {
    cartRef.current.focus();
    setTimeout(() => cartRef.current.blur(), 2800);
  };

  const closeModal = evt => {
    if (evt.target !== overlayRef.current) return;

    hideOverlay(overlayRef.current);
  };

  const addToCart = () => {
    setOrders([...orders, order]);

    hideOverlay(overlayRef.current);
    focusCart();
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[selectedItem.index] = order;
    setOrders(newOrders);

    hideOverlay(overlayRef.current);
    focusCart();
  };

  return (
    <Overlay ref={overlayRef} onClick={closeModal}>
      <ModalBlock>
        <CloseButton onClick={() => hideOverlay(overlayRef.current)} type="button" aria-label="Закрыть модальное окно" aria-hidden="true">
          <span className="visually-hidden">Закрыть</span>
        </CloseButton>
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
            Стоимость: <span>{formatPrice(getItemPrice(order))}</span>
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
