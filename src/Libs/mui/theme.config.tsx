import { ThemeProvider } from '@mui/material';
import customTheme from './theme.ts';

export default function CustomTheme({ children }: ParentComponent) {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}
