import React, { useContext } from 'react';
import styled from 'styled-components';

import ItemContext from '../ItemContext';

const StyledToppings = styled.div`

`;

const ToppingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ToppingLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const ToppingCheckbox = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

const ItemToppings = () => {
  const { toppingsState: { toppings, toggleTopping } } = useContext(ItemContext);

  return (
    <StyledToppings>
      <p>Добавить в пиццу</p>
      <ToppingsWrapper>
        {toppings.map((topping, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type="checkbox"
              checked={topping.selected}
              onChange={() => toggleTopping(i)}
            />
            {topping.name}
          </ToppingLabel>
        ))}
      </ToppingsWrapper>
    </StyledToppings>
  );
};

export default ItemToppings;
