import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../utils/context';

import { Overlay } from "../../Modal/Styled";

const Modal = styled.div`
  width: 600px;
  padding: 30px;

  background-color: #ffffff;
`;

const OrderThank = () => {
  const { auth: { auth } } = useContext(Context);

  return (
    <Overlay>
      <Modal>
        <h2>Спасибо за заказ!</h2>
        <p>Мы отправили информацию о заказе на {auth.email}</p>
      </Modal>
    </Overlay>
  );
};

export default OrderThank;
