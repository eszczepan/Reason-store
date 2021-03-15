import React, { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const StyledAnimation = styled.span`
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(3) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(3) rotateX(0.5turn);
  }
`;

const StyledCartCount = styled.div`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.light};
  background: ${({ theme }) => theme.blue};
  color: white;
  position: absolute;
  top: -1rem;
  right: -2rem;
  padding: 0.2rem;
  border-radius: 15%;
`;

interface IProps {
  count: number;
}

const CartCount: FC<IProps> = ({ count }) => (
  <StyledAnimation>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <StyledCartCount>{count}</StyledCartCount>
      </CSSTransition>
    </TransitionGroup>
  </StyledAnimation>
);

export default CartCount;
