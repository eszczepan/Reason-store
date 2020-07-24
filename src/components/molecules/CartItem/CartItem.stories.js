import React from 'react';
import image from 'assets/images/image.png';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import CartItem from './CartItem';

export default {
  component: CartItem,
  title: 'CartItem',
};

export const Normal = () => (
  <CartItem>
    {/* <img src={image} alt={item.name} /> */}
    <Title>Milk shake - chocolate</Title>
    <Paragraph>12.99zł</Paragraph>
    <Button>&times;</Button>
  </CartItem>
);
