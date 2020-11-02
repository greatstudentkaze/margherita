import React from 'react';
import styled from 'styled-components';

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuantityInput = styled.input`
  width: 50px;
  font-size: 20px;
  
  -moz-appearance: textfield;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const QuantityButton = styled.button`
  font: inherit;
  
  background-color: transparent;
  
  cursor: pointer;
`;

const ItemQuantity = ({ quantity, setQuantity, handleChange }) => {

  return (
    <Quantity>
      <span>Количество</span>
      <div>
        <QuantityButton onClick={() => setQuantity(prevQuantity => prevQuantity - 1)} disabled={quantity <= 1}>-</QuantityButton>
        <QuantityInput type="number" min="1" max="20" step="1" value={quantity < 1 ? 1 : quantity} onChange={handleChange} />
        <QuantityButton onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}>+</QuantityButton>
      </div>
    </Quantity>
  );
};

export default ItemQuantity;
