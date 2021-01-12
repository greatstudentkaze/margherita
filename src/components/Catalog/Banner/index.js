import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.section`
  position: relative;
  
  display: flex;
  min-height: 300px;
  margin-bottom: 100px;
  padding: 50px 30px;
  
  background-image: url("img/intro/megameat.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 25px;

  @media (max-width: 450px) {
    min-height: auto;
    margin-bottom: 70px;
  }
  
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

    @media (max-width: 540px) {
      opacity: 0.6;
    }
  }
  
  h2 {
    position: relative;
    z-index: 2;
  
    max-width: 570px;
    margin: 0;
    margin-top: auto;
    margin-left: auto;
    
    font-size: 48px;
    line-height: 54px;
    font-weight: 500;
    color: #ffffff;
    text-align: right;

    @media (max-width: 670px) {
      font-size: 36px;
      line-height: 48px;
    }
    
    @media (max-width: 540px) {
      margin-bottom: auto;
      text-align: center;
    }
    
    @media (max-width: 450px) {
      font-size: 28px;
      line-height: 36px;
    }
  }
  
  .hidden {
    @media (max-width: 540px) {
      display: none;
    }
  }
`;

const Banner = () => (
  <StyledBanner>
    <h2>Скоро у&nbsp;нас появится <span className="hidden">новая</span>&nbsp;пицца<span className="hidden"> -</span> Мегамит!</h2>
  </StyledBanner>
);

export default Banner;
