import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../utils/context';

import Banner from './Banner';
import CatalogList from './CatalogList';
import StyledPreloader from '../Styled/StyledPreloader';
import { device } from '../Styled/MediaQueries';

const StyledCatalog = styled.main`
  padding-top: 80px;
  padding-bottom: 80px;

  background-color: #ffffff;
  
  @media ${device.mobileL} {
    padding-left: 85px;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
    
  &:last-of-type {
    margin-bottom: 0;
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
      <Section>
        <SectionTitle>Пиццы</SectionTitle>
        {
          database && database.pizzas ?
            <CatalogList
              catalog={database.pizzas}
              setSelectedItem={setSelectedItem}
            />
            : <StyledPreloader />
        }
      </Section>
      <Section>
        <SectionTitle>Закуски и напитки</SectionTitle>
        {
          database && database.other ?
            <CatalogList
              catalog={database.other}
              setSelectedItem={setSelectedItem}
            />
            : <StyledPreloader />
        }
      </Section>
    </StyledCatalog>
  );
};

export default Catalog;
