import React from 'react';
import styled from 'styled-components';

import CatalogItem from '../CatalogItem';

import { device } from '../../Styled/MediaQueries';

const StyledCatalogList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px 60px;
  
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 679px) {
    grid-template-columns: 200px 200px;
    justify-content: center;
  }
  
  @media (max-width: 529px) {
    grid-template-columns: 1fr;
  }
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
