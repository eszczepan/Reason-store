import React from 'react';
import styled from 'styled-components';
import PriceTag from './PriceTag.ts';

const StyledPriceTag = styled(PriceTag)`
  top: 2rem;
  right: 90%;
  transform: translate(-50%, -50%);
`;

export default {
  component: PriceTag,
  title: 'PriceTag',
};

export const Normal = () => <StyledPriceTag>199.99 zl</StyledPriceTag>;
