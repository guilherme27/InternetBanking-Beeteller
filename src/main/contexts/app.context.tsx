import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/common/styles/global.styles';
import { BeetellerTheme } from '@/common/themes';

import '/public/assets/style.css';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={BeetellerTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
