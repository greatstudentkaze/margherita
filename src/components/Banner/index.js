import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.section`
  position: relative;
  
  display: flex;
  min-height: 300px;
  padding: 50px 30px;
  
  background-image: url("img/banner/megameat.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  
  &::before {
    content: "";
    
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    
    background-color: #333333;
    border-radius: 25px;
    opacity: 0.4;
  }
  
  h2 {
    position: relative;
    z-index: 2;
  
    max-width: 50%;
    margin: 0;
    margin-top: auto;
    margin-left: auto;
    
    font-size: 48px;
    line-height: 54px;
    font-weight: 500;
    color: #ffffff;
    text-align: right;
  }
`;

const Banner = () => (
  <StyledBanner>
    <h2>Скоро у нас появится новая пицца - Мегамит!</h2>
  </StyledBanner>
);

export default Banner;
