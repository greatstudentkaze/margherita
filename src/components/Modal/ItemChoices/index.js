import React, { useContext } from 'react';
import styled from "styled-components";

import ItemContext from '../ItemContext';

const StyledChoices = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #333333;
`;

const ChoicesHeading = styled.p`
  margin: 0;
  margin-bottom: 12px;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const ChoiceLabel = styled.label`
  position: relative;

  display: block;
  margin-bottom: 5px;
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

const ChoiceInput = styled.input`
  &:checked + span::after {
    visibility: visible;
  }
  
  &:focus-visible + span {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #cd3a13;
  }
`;

const ChoiceRadio = styled.span`
  position: absolute;
  top: 0;
  left: -40px;
  
  display: inline-block;
  width: 30px;
  height: 30px;
  
  background-color: #fcfcfc;
  border: 3px solid #fa9e39;
  border-radius: 50%;
  
  cursor: pointer;
  transition: 0.2s;
  
  &::after {
    content: "";
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    visibility: hidden;
    width: 15px;
    height: 15px;

    background-color: #fa9e39;
    border-radius: 50%;
  }
  
  &:hover {
    border-color: #ff8500;
    
    input:checked + & {
      background-color: #ff8500;
    }
  }
`;

const ItemChoices = () => {
  const { choiceState: { choice, changeChoice }, selectedItem } = useContext(ItemContext);

  return (
    <StyledChoices>
      <ChoicesHeading>Выберите:</ChoicesHeading>
      <ChoicesWrapper>
        {selectedItem.choices.map((itemChoice, i) => (
          <ChoiceLabel key={i}>
            <ChoiceInput
              className="visually-hidden"
              type="radio"
              name="choices"
              checked={itemChoice === choice}
              value={itemChoice}
              onChange={changeChoice}
            />
            <ChoiceRadio />
            {itemChoice}
          </ChoiceLabel>
        ))}
      </ChoicesWrapper>
    </StyledChoices>
  );
};

export default ItemChoices;
