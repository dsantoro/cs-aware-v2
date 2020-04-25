import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";

import Routes from "./routes";
import AppTheme from "./AppTheme";

ReactDOM.render(
  <AppTheme>
    <GlobalStyles />
    <Routes />
  </AppTheme>,
  document.getElementById("root")
);
