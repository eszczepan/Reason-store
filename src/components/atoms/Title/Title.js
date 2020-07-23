import styled, { css } from 'styled-components';

const Title = styled.h3`
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  padding: 0.2rem;
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  ${({ cartTitle }) =>
    cartTitle &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.secondary};
      text-shadow: none;
    `}
`;

export default Title;
