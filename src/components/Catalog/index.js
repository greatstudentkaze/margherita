import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
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
`;

const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 50px;
  
  font-size: 36px;
  line-height: 36px;
  color: #333333;  
`;

const Catalog = ({ setSelectedItem }) => (
  <StyledCatalog className="container">
    <Banner />

    <section>
      <SectionTitle>Пиццы</SectionTitle>
      <CatalogList
        catalog={database.pizzas}
        setSelectedItem={setSelectedItem}
      />
    </section>

    <section>
      <SectionTitle>Закуски и напитки</SectionTitle>
      <CatalogList
        catalog={database.other}
        setSelectedItem={setSelectedItem}
      />
    </section>
  </StyledCatalog>
);

export default Catalog;
