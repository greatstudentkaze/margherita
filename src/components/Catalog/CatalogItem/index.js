import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';

const StyledCatalogItem = styled.article`
  position: relative;
  z-index: 2;
  
  display: flex;
  flex-direction: column;
  
  color: #333333;  
  background-color: #ffffff;
  
  h3 {
    margin: 0;
    margin-bottom: 15px;
  
    font-size: 24px;
    line-height: 24px;
    font-weight: 500;
  }
  
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }
  
  b {
    font-size: 24px;
    line-height: 40px;
  }
  
  img {
    order: -1;  
    align-self: center;
    display: block;
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
    
    object-fit: cover;
    transition: 0.15s ease-out;
    
    &:hover,
    &:focus {
      transform: translateY(3px);
    }
  }
`;

const CatalogItem = ({ data: { name, img, price } }) => (
  <StyledCatalogItem>
    <h3>{name}</h3>
    <img src={img} alt={name} />
    <p>
      <b>{price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</b>
      <Button text="Выбрать" type="button" />
    </p>
  </StyledCatalogItem>
);

export default CatalogItem;
