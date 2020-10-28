import React from 'react';
import styled from 'styled-components';

import Banner from '../Banner';
import CatalogList from './CatalogList';

import database from './database';

const StyledCatalog = styled.main`
  padding-top: 80px;
  padding-bottom: 80px;

  background-color: #ffffff;
  
  section {
    margin-bottom: 80px;
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  h2 {
    margin: 0;
    margin-bottom: 50px;
    
    font-size: 36px;
    line-height: 36px;
    color: #333333;  
  }
`;

const Catalog = () => (
  <StyledCatalog className="container">
    <Banner />

    <section>
      <h2>Пиццы</h2>
      <CatalogList catalog={database.pizzas} />
    </section>

    <section>
      <h2>Закуски и напитки</h2>
      <CatalogList catalog={database.other} />
    </section>
  </StyledCatalog>
);

export default Catalog;
