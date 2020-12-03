import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import { formatPrice } from '../../utils';

import { device } from '../../Styled/MediaQueries';

const StyledCatalogItem = styled.article`
  position: relative;
  z-index: 2;
  
  display: flex;
  flex-direction: column;
  
  color: #333333;  
  background-color: #ffffff;
  
  @media (max-width: 699px) {
    align-items: center;
    padding-right: 15px;
  }
  
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

    @media (max-width: 699px) {
      flex-direction: column;
    }
  }
  
  b {
    font-size: 24px;
    line-height: 40px;
  }
  
  img {
    order: -1;  
    align-self: center;
    display: block;
    max-width: 250px;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    
    object-fit: cover;
    transition: 0.15s ease-out;
    
    &:hover,
    &:focus {
      transform: translateY(3px);
    }

    @media (max-width: 699px) {
      margin-right: -15px;
    }
  }
`;

const CatalogItem = ({ data, setSelectedItem }) => (
  <StyledCatalogItem>
    <h3>{data.name}</h3>
    <img src={data.img} alt={data.name} />
    <p>
      <b>{formatPrice(data.price)}</b>
      <Button
        type="button"
        text="Выбрать"
        handleClick={() => setSelectedItem(data)}
      />
    </p>
  </StyledCatalogItem>
);

export default CatalogItem;
