import React from 'react';

import StyledButton from '../styled/StyledButton';

const Button = ({ text, type, handleClick }) => (
  <StyledButton type={type} onClick={handleClick}>
    {text}
  </StyledButton>
);

export default Button;
