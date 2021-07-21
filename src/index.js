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
      dark: "#443663",
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
