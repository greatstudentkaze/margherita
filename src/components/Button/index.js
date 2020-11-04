import React from 'react';

import StyledButton from '../Styled/StyledButton';

const Button = ({ text, type, handleClick, ...props }) => (
  <StyledButton type={type} onClick={handleClick} {...props}>
    {text}
  </StyledButton>
);

export default Button;
