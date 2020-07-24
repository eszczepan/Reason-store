import React from 'react';
import styled from 'styled-components';
import PriceTag from './PriceTag';

const StyledPriceTag = styled(PriceTag)`
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

export default {
  component: PriceTag,
  title: 'PriceTag',
};

export const Normal = () => <StyledPriceTag>199.99 zl</StyledPriceTag>;
