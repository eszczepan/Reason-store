import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  display: flex;
  padding: 1rem;
  transform: skew(-10deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    align-items: center;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-decoration: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 0 1rem;
  }
`;

const Logo: FC = () => (
  <StyledLogo>
    <a href="!#">ReasonStore</a>
  </StyledLogo>
);

export default Logo;
