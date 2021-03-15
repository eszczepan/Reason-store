import styled, { css } from 'styled-components';

interface IParagraph {
  totalPrice?: boolean;
  info?: boolean;
}

const Paragraph = styled.p<IParagraph>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ totalPrice }) =>
    totalPrice &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.bold};
      text-align: center;
      @media (max-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
      @media (max-width: 380px) {
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
    `}
  ${({ info }) =>
    info &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.bold};
      @media (max-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
      @media (max-width: 380px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    `}
`;

export default Paragraph;
