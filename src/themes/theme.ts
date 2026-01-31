import { createTheme, PaletteMode } from '@mui/material/styles';

// Light theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#B2C8B4',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#E0E4D7',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
  },
});

// Dark theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      main: '#191A19',
    },
    secondary: {
      main: '#A1B2A8',
    },
    background: {
      default: '#444544',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
  },
});

// Helper function to get theme by mode
export const getTheme = (mode: PaletteMode) => {
  return mode === 'light' ? lightTheme : darkTheme;
};
