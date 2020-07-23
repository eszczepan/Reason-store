import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';
import { countPrice } from 'lib/countPrice';
import { countProducts } from 'lib/countProducts';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import CartItem from '../../molecules/CartItem/CartItem';

const StyledCart = styled.div`
  padding: 1rem;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 105;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid black;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  footer {
    border-top: 10px double black;
    margin-top: 1rem;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
  }
  ul {
    width: 100%;
    list-style: none;
    overflow: scroll;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 1rem;
`;

const Cart = () => {
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
        {cartItems.map((item) => (
          <CartItem item={item} key={Math.random(item.id)} />
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
