import React from 'react';
import ReactDOM from 'react-dom/client';

import AppProvider from './main/contexts/app.context';
import { AppRouter } from './main/routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>,
);
