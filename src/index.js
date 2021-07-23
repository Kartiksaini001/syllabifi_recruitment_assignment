import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9f7af4",
      main: "#8759f2",
      dark: "#5e3ea9",
    },
    secondary: {
      light: "#f76388",
      main: "#f53d6b",
      dark: "#ab2a4a",
    },
    success: {
      light: "#33c79f",
      main: "#00ba88",
      dark: "#00825f",
    },
    warning: {
      light: "#e9b24b",
      main: "#e49f1e",
      dark: "#9f6f15",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
        fontSize: "1.1rem",
      },
      outlined: {
        borderWidth: "2px",
        "&:hover": {
          borderWidth: "2px",
        },
      },
      outlinedPrimary: {
        borderWidth: "2px",
        "&:hover": {
          borderWidth: "2px",
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "0 20px 65px -20px rgba(0, 0, 0, 0.1)",
      },
      rounded: {
        borderRadius: "1rem",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "0",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
