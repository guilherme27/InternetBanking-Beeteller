import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from './common/configs/msw.config';
import AppProvider from './main/contexts/app.context';
import { AppRouter } from './main/routers';

if (process.env.NODE_ENV === 'development') {
  console.log('That application it is running on DEV MODE');
  worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>,
);
