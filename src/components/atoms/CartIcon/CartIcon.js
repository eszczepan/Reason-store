import styled from 'styled-components';
import cart from 'assets/icons/cart.svg';

const CartIcon = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 20px;
  background-image: url(${cart});
  background-position: 50% 50%;
  background-size: 40%;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: white;
  }
`;

export default CartIcon;
