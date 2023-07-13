import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import '@fontsource-variable/inter';
import customTheme from './Libs/mui/theme.ts';
import App from './App/App.tsx';

// TODO: This should render the router component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
