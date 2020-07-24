import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledPagination = styled.nav`
  margin: 3rem auto 2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
`;

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
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
            {page === currentPage ? (
              <Button currentPage onClick={() => paginate(page)} type="button">
                {page}
              </Button>
            ) : (
              <Button pagination onClick={() => paginate(page)} type="button">
                {page}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  itemsPerPage: 20,
};

export default Pagination;
