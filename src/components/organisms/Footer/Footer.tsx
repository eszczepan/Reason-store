import React, { FC } from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  color: white;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const Footer: FC = () => (
  <StyledFooter>
    <StyledTitle>Created by Szczepan Szablej</StyledTitle>
  </StyledFooter>
);

export default Footer;
