import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter';
import CustomTheme from './Libs/mui/theme.config.tsx';
import App from './App/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomTheme>
      <App />
    </CustomTheme>
  </React.StrictMode>,
);
