import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from '@/common/configs/msw.config';

import AppProvider from './main/contexts/app.context';
import { AppRouter } from './main/routers';

worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>,
);
