import React from 'react';
import styled from 'styled-components';
import CartCount from './CartCount.tsx';

const StyledDiv = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

export default {
  component: CartCount,
  title: 'CartCount',
};

export const Normal = () => (
  <StyledDiv>
    <CartCount count="120" />
  </StyledDiv>
);
