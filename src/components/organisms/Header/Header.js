import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import SearchInput from 'components/atoms/SearchInput/SearchInput';

const StyledHeader = styled.header`
  background: green;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const StyledTitle = styled(Title)`
  color: black;
`;

const Header = ({ getQuery }) => (
  <StyledHeader>
    <StyledTitle>ReasonStore</StyledTitle>
    <SearchInput getQuery={getQuery} />
    <button type="button">&times;</button>
  </StyledHeader>
);

export default Header;
