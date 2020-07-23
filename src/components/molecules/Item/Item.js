import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { CartContext } from 'components/organisms/Cart/CartContext';
import image from 'assets/images/image.png';
import PriceTag from 'components/atoms/PriceTag/PriceTag';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';

const appear = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

const StyledItem = styled.div`
  animation: ${appear} 1s;
  max-height: 420px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    background: white;
  }
`;

const Item = ({ item }) => {
  const { cart } = useContext(CartContext);
  const [cartItems, setCartItems] = cart;

  const addToCart = () => {
    const found = cartItems.find((i) => item.id === i.id);

    found
      ? setCartItems(() => {
          found.quantity++;
          return [...cartItems];
        })
      : setCartItems(() => {
          const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
          };
          return [...cartItems, itemToCart];
        });
  };

  return (
    <StyledItem>
      <PriceTag>{item.price} zł</PriceTag>
      <img src={image} alt={item.name} />
      <Title>{item.name}</Title>
      <Button onClick={addToCart} addToCart>
        Add To Cart
      </Button>
    </StyledItem>
  );
};

export default Item;
