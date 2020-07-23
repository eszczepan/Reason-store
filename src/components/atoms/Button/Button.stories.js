import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Normal = () => <Button>Hello world</Button>;
export const AddToCart = () => <Button addToCart>Add To Cart</Button>;
export const Close = () => <Button close>&times;</Button>;
export const Remove = () => <Button remove>&times;</Button>;
export const Checkout = () => <Button checkout>Checkout</Button>;
