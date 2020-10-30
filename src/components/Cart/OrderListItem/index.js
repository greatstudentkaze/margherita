import React from 'react';
import styled from 'styled-components';

import deleteIcon from '../../../img/delete.svg';
import deleteIconActive from '../../../img/delete_active.svg';

const StyledOrderListItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  
  font-size: 20px;
  line-height: 24px; 
 
  border-top: 1px solid #e7e7e7;
  
  &:last-child {
    border-bottom: 1px solid #e7e7e7;
  }
`;

const Wrapper = styled.p`
  display: flex;
  flex-direction: column;
  
  margin: 0;
  
`;

const Number = styled.span`
  font-size: 14px;
  line-height: 16px; 
  opacity: 0.5;
`;

const Price = styled.b`
  margin-left: auto;
  margin-right: 5px;
  
  font-size: 20px;
  line-height: 40px; 
  font-weight: 700;
`;

const RemoveButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  
  background-color: transparent;
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: center;
  border: none;
  outline: none;
  
  transition: 0.2s;
  
  cursor: pointer;
  
  &:hover,
  &:focus {
    background-image: url(${deleteIconActive});
  }
`;

const OrderListItem = ({ order }) => (
  <StyledOrderListItem>
    <Wrapper>
      {order.name}
      <Number>1 шт</Number>
    </Wrapper>
    <Price>
      {order.price
        .toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}
    </Price>
    <RemoveButton />
  </StyledOrderListItem>
);

export default OrderListItem;
