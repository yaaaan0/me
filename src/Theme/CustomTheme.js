import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#36BFE3',
      dark: '#202B59',
    },
    secondary: {
      main: '#36d7be',
    },
    error: {
      main: '#ff88c4',
    },
    warning: {
      main: '#ffce76',
    },
    info: {
      main: '#36bfe3',
    },
    success: {
      main: '#36d7be',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#36BFE3',
      dark: '#202B59',
    },
    secondary: {
      main: '#36d7be',
    },
    error: {
      main: '#ff88c4',
    },
    warning: {
      main: '#ffce76',
    },
    info: {
      main: '#36bfe3',
    },
    success: {
      main: '#36d7be',
    },
  },
});
