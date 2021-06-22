import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      light: "#ff8664",
      dark: "#fb4226",
      main: "#fa5238",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: 13,
  },
});
