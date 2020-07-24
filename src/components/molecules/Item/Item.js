import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { AppContext } from 'context';
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
  border: 1px solid #f2f2f2;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  max-height: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    background: white;
  }
`;

const Item = ({ item }) => {
  const { cart } = useContext(AppContext);
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

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

Item.defaultProps = {
  item: PropTypes.shape({
    quantity: 1,
  }),
};

export default Item;
