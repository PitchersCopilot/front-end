import { createTheme } from "@mui/material";

const customTheme = createTheme({
  typography: {
    fontFamily: ["Inter Variable", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#1C1C1C",
    },
    secondary: {
      main: "#95A4FC",
    },
  },
});

export default customTheme;
