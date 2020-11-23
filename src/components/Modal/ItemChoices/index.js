import React, { useContext } from 'react';
import styled from "styled-components";

import ItemContext from '../ItemContext';

const StyledChoices = styled.div`

`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ChoiceLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const ChoiceRadio = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

const ItemChoices = () => {
  const { choiceState: { choice, changeChoice }, selectedItem } = useContext(ItemContext);

  return (
    <StyledChoices>
      <p>Выберите:</p>
      <ChoicesWrapper>
        {selectedItem.choices.map((itemChoice, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio
              type="radio"
              name="choices"
              checked={itemChoice === choice}
              value={itemChoice}
              onChange={changeChoice}
            />
            {itemChoice}
          </ChoiceLabel>
        ))}
      </ChoicesWrapper>
    </StyledChoices>
  );
};

export default ItemChoices;
