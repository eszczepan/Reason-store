import React from 'react';
import Paragraph from './Paragraph.ts';

export default {
  component: Paragraph,
  title: 'Paragraph',
};

export const Normal = () => <Paragraph>Hello world</Paragraph>;
export const TotalPrice = () => (
  <Paragraph totalPrice>Total price: 299 zl</Paragraph>
);
