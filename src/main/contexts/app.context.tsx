import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/common/styles/global.styles';
import '/public/assets/style.css';
import beetellerTheme from '@/common/themes/beeteller.theme';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={beetellerTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
