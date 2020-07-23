import React, { useState } from 'react';
import styled from 'styled-components';
import search from 'assets/icons/search.svg';

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  height: 2rem;
  width: 14rem;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.grey100};
  padding: 0.4rem 0.3rem 0.3rem 2.5rem;
  border: none;
  border-radius: 50px;
  background-image: url(${search});
  background-size: 1rem;
  background-position: 1rem 50%;
  background-repeat: no-repeat;
  outline: none;
  transition: all 0.2s;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
  :focus {
    font-size: 0.6rem;
  }
`;

const SearchInput = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <StyledInput
      type="text"
      placeholder="search"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
