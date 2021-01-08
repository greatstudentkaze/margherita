import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../utils/context';

import { Overlay } from '../../Modal/Styled';

import deliveryIcon from '../../../img/delivery-man.svg';

const Modal = styled.div`
  position: relative;
  
  width: 600px;
  padding: 40px 25px 100px;

  background-color: #ffffff;
  overflow: hidden;
  
  &::after {
    content: "";
    
    position: absolute;
    right: 25px;
    bottom: 20px;
    
    width: 60px;
    height: 60px;
    
    background-image: url(${deliveryIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60px;

    animation-name: ride;
    animation-duration: 4.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes ride {
    0% {
      transform: translateX(90px);
    }
    
    100% {
      transform: translateX(-800px);
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;

  font-size: 28px;
  line-height: 30px;
  font-weight: 700;
`;

const Info = styled.p`
  margin: 0;

  font-size: 20px;
  line-height: 24px;
`;

const OrderThank = () => {
  const { auth: { auth }, orderThank } = useContext(Context);

  return (
    <Overlay ref={orderThank.overlayRef} onClick={orderThank.closeModal}>
      <Modal>
        <Title>Спасибо за заказ!</Title>
        <Info>Мы отправили информацию о заказе на {auth.email}</Info>
      </Modal>
    </Overlay>
  );
};

export default OrderThank;
