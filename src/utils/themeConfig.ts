import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: "8px",
            height: "8px"
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#9A9A9A",
            minHeight: 24
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#64748B"
            },
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px"
          }
        }
      }
    }
  },

  palette: {
    primary: {
      main: "#30A2FF",
      light: "#00C4FF"
    },
    secondary: {
      main: "#FFE7A0",
      light: "#FFF5B8"
    },
    success: {
      main: '#B6C199',
    },
    error: {
      main: "#703F37"
    },
    background: {
      default: "#EEEEEE"
    },
    text: {
      primary: "#000000",
      secondary: "#616161"
    },
    grey: {
      100: "#FAFAFA",
      200: "#EEEEEE"
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "32px",
      fontWeight: 500
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 300
    }
  },
  shape: {
    borderRadius: 4
  }
});
