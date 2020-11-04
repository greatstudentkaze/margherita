import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 0 26px;

  font: inherit;
  font-size: 18px;
  line-height: 40px;
  font-weight: 700;
  color: #fa9e39;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;

  background: #ffffff;
  border: 3px solid #fa9e39;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  
  transition: 0.15s ease-out;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #fa9e39;
  }

  &:active {
    opacity: 0.4;
  }
  
  &:disabled {
    background-color: #efefef;
    border-color: #e1e1e1;
    color: #888888;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    padding: 0 50px;
  }
`;

export default StyledButton;
