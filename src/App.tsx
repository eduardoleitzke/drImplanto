import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'
import { GlobalStyle } from './global'
import { RegisterContextProvider } from "./contexts/RegisterContext";

import React from 'react';
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <RegisterContextProvider>
          <Router />
        <GlobalStyle />
      </RegisterContextProvider>
    </ThemeProvider>
  )
}


