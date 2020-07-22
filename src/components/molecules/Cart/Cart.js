import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

const StyledCart = styled.div`
  padding: 20px;
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
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double black;
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

const Cart = () => {
  return (
    <StyledCart>
      <header>
        <Button>&times;</Button>
        <Title>Your Cart</Title>
        <p>You Have -- Items in your cart.</p>
      </header>
      <footer>
        <p>10.10 zl</p>
        <Button>Checkout</Button>
      </footer>
    </StyledCart>
  );
};

export default Cart;
