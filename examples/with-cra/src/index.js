import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HvProvider from "@hv-ui/react/core/Provider";
import App from "./App";

ReactDOM.render(
  <HvProvider>
    <CssBaseline />
    <App />
  </HvProvider>,
  document.getElementById("root")
);