import { createTheme } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: ['Inter Variable', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#232323',
    },
    secondary: {
      main: '#95A4FC',
    },
    text: {
      primary: '#fff',
      disabled: '#ADA7A7',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
        },
      },
    },
  },
});

export default customTheme;
