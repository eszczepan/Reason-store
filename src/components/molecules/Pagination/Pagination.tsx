import React, { FC } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledPagination = styled.nav`
  margin: 3rem auto 2rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }
`;

interface IProps {
  itemsPerPage: number;
  totalItems: number;
  paginate(page: number): void;
  currentPage: number;
}

const Pagination: FC<IProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
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

export default Pagination;
