import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';
import Dashboard from './pages/Dashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <StyledEngineProvider injectFirst>
      {/* <CssBaseline /> */}
      <App />
      {/* <Dashboard /> */}
    </StyledEngineProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
);
