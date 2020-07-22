import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: green;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  padding: 10px 7px;
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  ${({ secondary }) =>
    secondary &&
    css`
      letter-spacing: 1px;
      background-color: grey;
      font-size: 10px;
      height: 30px;
      width: 105px;
    `}
`;

export default Button;
