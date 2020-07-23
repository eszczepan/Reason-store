import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ totalPrice }) =>
    totalPrice &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Paragraph;
