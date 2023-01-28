import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const container = document.getElementById('root')
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
