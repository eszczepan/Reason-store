import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';

import { IItem } from 'typings';
import { countPrice } from 'lib/countPrice';
import { countProducts } from 'lib/countProducts';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import CartItem from 'components/molecules/CartItem/CartItem';

interface IStyledCart {
  open?: boolean;
}

const StyledCart = styled.div<IStyledCart>`
  position: fixed;
  display: grid;
  grid-template-rows: auto 1fr auto;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 1rem;
  width: 40%;
  min-width: 500px;
  height: 100%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 105;
  ${({ open }) => open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid black;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  footer {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.bold};
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    border-top: 1rem double black;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  ul {
    width: 100%;
    list-style: none;
    overflow: scroll;
  }
  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 1rem;
`;

const Cart: FC = () => {
  const { cart, isOpen } = useContext(AppContext);
  const [cartItems] = cart;
  const [open, setOpen] = isOpen;

  const closeCart = () => {
    setOpen(false);
  };
  return (
    <StyledCart open={open}>
      <header>
        <Button close onClick={closeCart}>
          &times;
        </Button>
        <Title cartTitle>Your Cart</Title>
        <StyledParagraph>
          You Have {countProducts(cartItems)} products in your cart.
        </StyledParagraph>
      </header>
      <ul>
        {cartItems.map((item: IItem) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <footer>
        <Paragraph totalPrice>
          Total price: {countPrice(cartItems)} zł
        </Paragraph>
        <Button checkout>Checkout</Button>
      </footer>
    </StyledCart>
  );
};

export default Cart;
