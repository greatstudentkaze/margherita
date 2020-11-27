import React, { useContext } from 'react';
import styled from 'styled-components';

import ItemContext from '../ItemContext';

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin-bottom: 20px;
  
  font-size: 20px;
  line-height: 40px;
  color: #333333;
`;

const QuantityInput = styled.input`
  max-width: 49px;
  padding: 0 10px;
  
  font: inherit;
  line-height: 38px;
  font-weight: 700;
  text-align: center;
  vertical-align: top;
  
  background-color: #ffffff;
  border: none;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  
  transition: 0.2s ease-out;
  
  &:focus {
    border-color: #9a9a9a;
  }
  
  -moz-appearance: textfield;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const QuantityButton = styled.button`
  min-width: 28px;
  padding: 0 10px;

  font: inherit;
  line-height: 38px;
  font-weight: 700;
  text-align: middle;
  vertical-align: top;
  
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  outline: none;
  
  cursor: pointer;
  transition: 0.2s ease-out;
  
  &:hover,
  &:focus {
    border-color: #9a9a9a;
  }
  
  &:disabled {
    background-color: #efefef;
    border-color: #e7e7e7;
    cursor: not-allowed;
  }
`;

const ItemQuantity = () => {
  const { quantityCounter: { quantity, setQuantity, handleChange } } = useContext(ItemContext);

  return (
    <Quantity>
      Количество
      <div>
        <QuantityButton
          onClick={() => setQuantity(prevQuantity => prevQuantity - 1)}
          disabled={quantity <= 1}>-</QuantityButton>
        <QuantityInput
          type="number" min="1" max="20" step="1" readOnly
          value={quantity < 1 ? 1 : quantity} o
          nChange={handleChange} />
        <QuantityButton
          onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
          disabled={quantity > 19}>+</QuantityButton>
      </div>
    </Quantity>
  );
};

export default ItemQuantity;
