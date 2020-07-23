import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from 'components/organisms/Cart/CartContext';
import image from 'assets/image.png';
import PriceTag from 'components/atoms/PriceTag/PriceTag';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';

const StyledItem = styled.div`
  background: black;
  height: 400px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    background: white;
  }
`;

const StyledButton = styled(Button)`
  width: 70%;
  margin: 0 auto;
  font-size: 12px;
`;

const Item = ({ item }) => {
  const [setCart] = useContext(CartContext);
  const addToCart = () => {
    const itemToCart = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    setCart((currentCart) => [...currentCart, itemToCart]);
  };
  return (
    <StyledItem>
      <PriceTag>{item.price} zł</PriceTag>
      <img src={image} alt={item.name} />
      <Title>{item.name}</Title>
      <StyledButton onClick={addToCart}>Add To Cart</StyledButton>
    </StyledItem>
  );
};

export default Item;
