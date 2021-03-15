import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput.tsx';

describe('SearchInput component', () => {
  test('Renders input element', () => {
    const placeholderText = 'search';
    const { getByPlaceholderText } = render(
      <SearchInput placeholder={placeholderText} />,
    );

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
