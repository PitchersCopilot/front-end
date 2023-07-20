import { createTheme } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: ['Inter Variable', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#1C1C1C',
    },
    secondary: {
      main: '#95A4FC',
    },
    text: {
      primary: '#fff',
      secondary: '#95A4FC',
      disabled: '#ADA7A7',
    },
  },
});

export default customTheme;
