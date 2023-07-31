import { createTheme } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: ['Inter Variable', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#95A4FC',
    },
  },
});

export default customTheme;
