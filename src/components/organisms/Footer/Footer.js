import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: grey;
  width: 100%;
  height: 80px;
`;

const Footer = () => (
  <StyledFooter>
    <p>Created by Szczepan Szablej</p>
  </StyledFooter>
);

export default Footer;
