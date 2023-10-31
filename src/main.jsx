import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);
