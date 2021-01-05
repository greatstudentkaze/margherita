import React, { useContext } from 'react';
import styled from 'styled-components';

import ItemContext from '../ItemContext';

import check from '../../../img/check.svg';

const StyledToppings = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #333333;
`;

const ToppingsHeading = styled.p`
  margin: 0;
  margin-bottom: 12px;
`;

const ToppingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToppingLabel = styled.label`
  position: relative;

  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
  padding-top: 3px;
  padding-bottom: 3px;
  
  font-size: 24px;
  line-height: 24px;
  
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  
  &:hover {
    color: #333333bd;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ToppingInput = styled.input`
  &:checked + span {
    background-color: #fa9e39;
  }
  
  &:checked + span::after {
    visibility: visible;
  }
  
  &:focus-visible + span {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #cd3a13;
  }
`;

const ToppingCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: -40px;
  
  display: inline-block;
  width: 30px;
  height: 30px;
  
  background-color: #fcfcfc;
  border: 3px solid #fa9e39;
  border-radius: 8px;
  
  cursor: pointer;
  transition: 0.2s;
  
  &::after {
    content: "";
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    visibility: hidden;
    width: 20px;
    height: 20px;
    
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
  }
  
  &:hover {
    border-color: #ff8500;
    
    input:checked + & {
      background-color: #ff8500;
    }
  }
`;

const ItemToppings = () => {
  const { toppingsState: { toppings, toggleTopping } } = useContext(ItemContext);

  return (
    <StyledToppings>
      <ToppingsHeading>Добавить в пиццу:</ToppingsHeading>
      <ToppingsWrapper>
        {toppings.map((topping, i) => (
          <ToppingLabel key={i}>
            <ToppingInput
              className="visually-hidden"
              type="checkbox"
              checked={topping.selected}
              onChange={() => toggleTopping(i)}
            />
            <ToppingCheckbox />
            {topping.name}
          </ToppingLabel>
        ))}
      </ToppingsWrapper>
    </StyledToppings>
  );
};

export default ItemToppings;
