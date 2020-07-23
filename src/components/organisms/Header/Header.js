import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from 'components/organisms/Cart/CartContext';
import Logo from 'components/atoms/Logo/Logo';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import CartIcon from 'components/atoms/CartIcon/CartIcon';

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
  const { isOpen } = useContext(CartContext);
  const [open, setOpen] = isOpen;
  const openCart = () => {
    setOpen(true);
  };
  return (
    <StyledHeader>
      <Logo />
      <SearchInput getQuery={getQuery} />
      <CartIcon onClick={openCart} />
    </StyledHeader>
  );
};

export default Header;
