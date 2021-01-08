import styled from 'styled-components';

export const StyledCart = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;
  transform: translateX(-360px);
  
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  padding-right: 60px;
  
  color: #333333;
  
  background-color: #ef9f67;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.25);
  outline: none;
  
  transition: 0.3s ease-out;
  
  &:hover,
  &:focus {  
    transform: translateX(0);
  }
  
  h2 {
    position: absolute;
    top: 50%;
    right: -35px;
    transform: translateY(-50%) rotate(270deg);
    
    margin: 0;
    
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 25px;
  
  font-size: 24px;
  line-height: 28px;

  background-color: #ffffff;
  
  overflow-y: auto;
`;

export const OrderList = styled.ul`
  margin: 0;
  padding: 15px 0;
  list-style-type: none;
`;

export const EmptyList = styled.p`
  margin: 15px 0;
  text-align: center;
`;

export const CartTotal = styled.div`
  margin-top: auto;
  padding: 15px 0;
  
  text-align: center;
  
  p {
    margin: 0;
    margin-bottom: 15px;
  }
  
  button {
    width: 100%;
    
    font-size: 20px;
    line-height: 50px;
  }
`;

