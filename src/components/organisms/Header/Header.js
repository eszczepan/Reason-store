import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from 'context';
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
`;

const Header = ({ getQuery }) => {
  const { isOpen, cart } = useContext(AppContext);
  const [open, setOpen] = isOpen;
  const [cartItems, setCartItems] = cart;
  const openCart = () => {
    setOpen(true);
  };
  return (
    <StyledHeader>
      <Logo />
      <SearchInput getQuery={getQuery} />
      <CartIcon onClick={openCart}>
        <CartCount count={cartItems.length} />
      </CartIcon>
    </StyledHeader>
  );
};

Header.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default Header;
