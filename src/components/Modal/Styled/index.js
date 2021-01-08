import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(51, 51, 51, 0.5);
  
  animation-name: show;
  animation-duration: 0.3s;
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ModalBlock = styled.div`
  display: flex;
  width: 900px;
  height: 600px;
  
  color: #333333;
  background-color: #ffffff;
`;

export const Image = styled.p`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  
  img {
    display: block;
    width: 350px;
    height: 350px;
    
    transition: 0.25s;
    
    &:hover {
      transform: scale(1.05);
    }
    
    ${props => props.category === 'pizza' && css`
      transform: rotate(15deg);
      
      &:hover {
        transform: rotate(0) scale(1.05);
      }
    `}
  }
`;

export const Content = styled.section`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding: 40px 25px;
  
  background-color: #fcfcfc;
  
  h2 {
    margin: 0;
    margin-bottom: 20px;
    
    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
  }
`;

export const Price = styled.p`
  margin: 0;
  margin-top: auto;
  margin-bottom: 20px;
  
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
    
  span {
    font-size: 28px;
    font-weight: 700;
    
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
