import React from 'react';
import styled from 'styled-components';

import CatalogItem from '../CatalogItem';

const StyledCatalogList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px 60px;
`;

const CatalogList = ({ catalog, setSelectedItem }) => (
  <StyledCatalogList>
    {catalog.map(item => (
      <li key={item.id}>
        <CatalogItem
          data={item}
          setSelectedItem={setSelectedItem}
        />
      </li>
    ))}
  </StyledCatalogList>
);

export default CatalogList;
