import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-top: 0;
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
