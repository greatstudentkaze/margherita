import styled from "styled-components";

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
  animation-duration 0.3s;
  
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
