import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from 'components/molecules/Item/Item';
import Spinner from 'components/atoms/Spinner/Spinner';
import Pagination from 'components/molecules/Pagination/Pagination';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 60px;
  max-width: 90%;
  min-height: 100vh;
  margin: 20px auto 0;
`;

const ItemsList = ({
  isLoading,
  items,
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
      />
      <StyledList>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </StyledList>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

ItemsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

ItemsList.defaultProps = {
  itemsPerPage: 20,
};

export default ItemsList;
