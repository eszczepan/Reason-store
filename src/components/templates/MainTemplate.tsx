import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

type Props = {
  children: React.ReactElement;
};

const MainTemplate = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default MainTemplate;
