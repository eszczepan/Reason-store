import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  padding: 0.4rem;
  transform: skew(-10deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-decoration: none;
  }
`;

const Logo = () => (
  <StyledLogo>
    <a href="!#">ReasonStore</a>
  </StyledLogo>
);

export default Logo;
