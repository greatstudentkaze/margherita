import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../../Button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(51, 51, 51, 0.5);
  
  animation-name: show;
  animation-duration 0.3s;
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ModalBlock = styled.div`
  display: flex;
  width: 900px;
  height: 600px;
  
  color: #333333;
  background-color: #ffffff;
`;

const Image = styled.p`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  
  img {
    display: block;
    width: 350px;
    height: 350px;
    
    transition: 0.25s;
    
    &:hover {
      transform: scale(1.05);
    }
    
    ${props => props.category === 'pizza' && css`
      transform: rotate(15deg);
      
      &:hover {
        transform: rotate(0) scale(1.05);
      }
    `}
  }
`;

const Content = styled.section`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding: 40px 25px;
  
  background-color: #fcfcfc;
  
  h2 {
    margin: 0;
    margin-bottom: 20px;
    
    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
  }
`;

const Price = styled.p`
  margin: 0;
  margin-top: auto;
  margin-bottom: 20px;
  
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
    
  span {
    font-size: 28px;
    font-weight: 700;
    
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Modal = ({ selectedItem, setSelectedItem, orders, setOrders }) => {
  const { name, img, price, category } = selectedItem;
  const order = {...selectedItem};

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

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <ModalBlock>
        <Image category={category}>
          <img src={img} alt={name}/>
        </Image>
        <Content>
          <h2>{name}</h2>
          <Price>
            Стоимость: <span>{price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</span>
          </Price>
          <Button handleClick={addToCart} text="Добавить в корзину" type="button" />
        </Content>
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
