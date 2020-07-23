import React from 'react';
import styled from 'styled-components';
import image from 'assets/image.png';
import Title from 'components/atoms/Title/Title';

const StyledCartItem = styled.li`
  background: white;
  height: 50px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    background: white;
  }
`;

const CartItem = ({ item }) => (
  <StyledCartItem>
    <img src={image} alt={item.name} />
    <Title>{item.name}</Title>
    <p>{item.price}</p>
  </StyledCartItem>
);

export default CartItem;
