import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../utils/context';

import Banner from './Banner';
import CatalogList from './CatalogList';
import StyledPreloader from '../Styled/StyledPreloader';

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

const Catalog = () => {
  const {catalogDatabase: database, selectedItem: { setSelectedItem }} = useContext(Context);

  return (
    <StyledCatalog className="container">
      <Banner />
      {
        database ?
          <>
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
          </>
          : <StyledPreloader />
      }
    </StyledCatalog>
  );
};

export default Catalog;
