import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux"; // Importa Provider
import store from "./redux/store"; // Importa lo store

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0A66C2",
    },
    secondary: {
      main: "#333",
    },
    background: {
      default: "#F4F2EE",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
