import styled, { css } from 'styled-components';

interface IButton {
  addToCart?: boolean;
  close?: boolean;
  remove?: boolean;
  checkout?: boolean;
  pagination?: boolean;
  currentPage?: boolean;
}

const Button = styled.button<IButton>`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 1rem 2rem;
  letter-spacing: 1px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s;

  ${({ addToCart }) =>
    addToCart &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxs};
      width: 100%;
      background-color: ${({ theme }) => theme.blue};
      margin-top: 1rem;
      &:hover {
        transform: scale(1.05);
      }
    `}
  ${({ close }) =>
    close &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${({ theme }) => theme.fontSize.l};
      background-color: ${({ theme }) => theme.black};
      height: 3rem;
      width: 3rem;
      padding: 0 0.5rem;
      &:hover {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    `}
  ${({ remove }) =>
    remove &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      background-color: ${({ theme }) => theme.red};
      height: 1.5rem;
      width: 1.5rem;
      padding: 0;
    `}
  ${({ checkout }) =>
    checkout &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      &:hover {
        transform: scale(1.05);
      }
      @media (max-width: 700px) {
        padding: 0.7rem 1.4rem;
      }
      @media (max-width: 380px) {
        font-size: ${({ theme }) => theme.fontSize.xxs};
        padding: 0.5rem 1.1rem;
      }
    `}
    ${({ pagination }) =>
      pagination &&
      css`
        font-size: ${({ theme }) => theme.fontSize.xxs};
        background-color: ${({ theme }) => theme.secondary};
        height: 2.2rem;
        width: 2.2rem;
        padding: 0.5rem;
        margin: 0 0.05rem;
        &:hover {
          background-color: ${({ theme }) => theme.blue};
        }
      `}
      ${({ currentPage }) =>
        currentPage &&
        css`
          font-size: ${({ theme }) => theme.fontSize.xxs};
          background-color: ${({ theme }) => theme.blue};
          height: 2.2rem;
          width: 2.2rem;
          padding: 0.5rem;
          margin: 0 0.05rem;
        `}
`;

export default Button;
