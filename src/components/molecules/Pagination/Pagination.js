import React from 'react';
import styled from 'styled-components';
// import Spinner from 'components/atoms/Spinner/Spinner';

const StyledPagination = styled.nav`
  /* text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid lightgrey;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  } */
  margin: 0 auto;
  ul {
    text-align: center;
    list-style: none;
    display: flex;
  }

  a {
    color: black;
    padding: 8px 8px;
    text-decoration: none;
  }
`;

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const count = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= count; i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <a onClick={() => paginate(page)} href="!#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
