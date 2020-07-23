import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.h2`
  text-align: center;
  min-height: 100vh;
`;

const Spinner = () => <StyledSpinner>Loading...</StyledSpinner>;

export default Spinner;
