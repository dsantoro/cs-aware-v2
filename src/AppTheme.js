import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function AppTheme({ children }) {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}

export default AppTheme;
