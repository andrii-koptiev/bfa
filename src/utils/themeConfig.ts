import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#30A2FF',
      light: '#00C4FF',
    },
    secondary: {
      main: '#FFE7A0',
      light: '#FFF5B8',
    },
    success: {
      main: '#B6C199',
    },
    error: {
      main: '#703F37',
    },
    background: {
      default: '#EEEEEE',
    },
    text: {
      primary: '#000000',
      secondary: '#616161',
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '32px',
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: '16px',
      fontWeight: 300,
    },
  },
});
