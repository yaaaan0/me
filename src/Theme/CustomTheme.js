import { createTheme } from '@mui/material/styles';
import bg from '../assets/images/bg.png';
import bg_dark1 from '../assets/images/bg_dark.jpg';

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
    backgroundImage: bg
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
    backgroundImage: bg_dark1
  },
});
