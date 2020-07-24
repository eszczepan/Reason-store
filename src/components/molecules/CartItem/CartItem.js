import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from 'context';
import image from 'assets/images/image.png';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledCartItem = styled.li`
  background: white;
  height: 50px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    background: white;
  }
`;

const CartItem = ({ item }) => {
  const { cart } = useContext(AppContext);
  const [cartItems, setCartItems] = cart;
  const removeItem = () => {
    const newCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(newCartItems);
  };

  return (
    <StyledCartItem>
      <img src={image} alt={item.name} />
      <Title cartTitle>{item.name}</Title>
      <Paragraph>
        {item.quantity} x {item.price} zł
      </Paragraph>
      <Button remove onClick={removeItem}>
        &times;
      </Button>
    </StyledCartItem>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  item: PropTypes.shape({
    quantity: 0,
  }),
};

export default CartItem;
