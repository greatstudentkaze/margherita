import React, { useContext } from 'react';

import ItemContext from '../ItemContext';

import {
  StyledChoiceBlock,
  ChoiceBlockHeading,
  ChoiceBlockWrapper,
  ChoiceBlockLabel,
  ToppingInput,
  ToppingCheckbox
} from '../Styled';

const ItemToppings = () => {
  const { toppingsState: { toppings, toggleTopping } } = useContext(ItemContext);

  return (
    <StyledChoiceBlock>
      <ChoiceBlockHeading>Добавить в пиццу:</ChoiceBlockHeading>
      <ChoiceBlockWrapper>
        {toppings.map((topping, i) => (
          <ChoiceBlockLabel key={i}>
            <ToppingInput
              className="visually-hidden"
              type="checkbox"
              checked={topping.selected}
              onChange={() => toggleTopping(i)}
            />
            <ToppingCheckbox />
            {topping.name}
          </ChoiceBlockLabel>
        ))}
      </ChoiceBlockWrapper>
    </StyledChoiceBlock>
  );
};

export default ItemToppings;
