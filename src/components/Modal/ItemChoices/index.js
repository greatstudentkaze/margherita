import React, { useContext } from 'react';

import ItemContext from '../ItemContext';

import {
  StyledChoiceBlock,
  ChoiceBlockHeading,
  ChoiceBlockWrapper,
  ChoiceBlockLabel,
  ChoiceBlockInput,
  ChoiceBlockIndicator
} from '../Styled';

const ItemChoices = () => {
  const { choiceState: { choice, changeChoice }, selectedItem } = useContext(ItemContext);

  return (
    <StyledChoiceBlock>
      <ChoiceBlockHeading>Выберите:</ChoiceBlockHeading>
      <ChoiceBlockWrapper>
        {selectedItem.choices.map((itemChoice, i) => (
          <ChoiceBlockLabel key={i}>
            <ChoiceBlockInput
              className="visually-hidden"
              type="radio"
              name="choices"
              checked={itemChoice === choice}
              value={itemChoice}
              onChange={changeChoice}
            />
            <ChoiceBlockIndicator />
            {itemChoice}
          </ChoiceBlockLabel>
        ))}
      </ChoiceBlockWrapper>
    </StyledChoiceBlock>
  );
};

export default ItemChoices;
