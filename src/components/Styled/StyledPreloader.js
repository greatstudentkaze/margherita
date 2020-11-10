import React from 'react';
import styled from 'styled-components';

const Preloader = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  max-width: 165px;
  
  text-align: center;
`;

const Circle = styled.div`
  position: relative;
  
  width: 165px;
  height: 165px;
  
  background-color: #ffffff;
  border-radius: 50%;
  
  animation: rotation 2s linear infinite;
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CircleInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  width: 75px;
  height: 75px;
  
  background-color: #fa9e39;
  border-radius: 100%;
  box-shadow:0 -60px 0 -25px #fa9e39;
  
  animation: switch 4s ease-in-out infinite;
  
  @keyframes switch{
    0% {
      top: 50%;
      transform: translate(-50%, -50%);
  
      width: 75px;
      height: 75px;
      
      box-shadow:0 -60px 0 -25px #fa9e39;
    }
    
    25% {
      top: 50%;
      transform: translate(-50%, -50%);
  
      width: 75px;
      height: 75px;
      
      box-shadow:0 -60px 0 -25px #fa9e39;
    }
    
    50% {
      top: calc(100% - 55px);
      transform: translate(-50%, 0);
      
      width:20px;
      height:20px;
      
      box-shadow:0 -60px 0 25px #fa9e39;
      
    }
    
    75% {
      top: calc(100% - 55px);
      transform: translate(-50%, 0);
      
      width: 20px;
      height: 20px;
      
      box-shadow:0 -60px 0 25px #fa9e39;
    }
    
    100% {
      top: 50%;
      transform: translate(-50%, -50%);
  
      width: 75px;
      height: 75px;
      
      box-shadow: 0 -60px 0 -25px #fa9e39;
    }
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-top: 10px;
  
  font-size: 20px;
  line-height: 24px;
  color: #fa9e39;
  
  animation: opacity 1.6s linear infinite;
  
  @keyframes opacity {
    0% {
      opacity: 1;
    }
    
    50% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
    }
  }
`;

const StyledPreloader = () => (
  <Preloader>
    <Circle>
      <CircleInner />
    </Circle>
    <Text>Загрузка...</Text>
  </Preloader>
);

export default StyledPreloader;
