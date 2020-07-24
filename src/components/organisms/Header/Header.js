import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from 'context';
import { countProducts } from 'lib/countProducts';
import Logo from 'components/atoms/Logo/Logo';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import CartIcon from 'components/atoms/CartIcon/CartIcon';
import CartCount from 'components/atoms/CartCount/CartCount';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Header = ({ getQuery }) => {
  const { isOpen, cart } = useContext(AppContext);
  const [, setOpen] = isOpen;
  const [cartItems] = cart;
  const openCart = () => {
    setOpen(true);
  };
  return (
    <StyledHeader>
      <Logo />
      <SearchInput getQuery={getQuery} />
      <CartIcon onClick={openCart}>
        <CartCount count={countProducts(cartItems)} />
      </CartIcon>
    </StyledHeader>
  );
};

Header.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default Header;
