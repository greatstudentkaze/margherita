import React from 'react';

import StyledButton from '../styled/StyledButton';

const Button = ({ text, type }) => (
  <StyledButton type={type}>
    {text}
  </StyledButton>
);

export default Button;
