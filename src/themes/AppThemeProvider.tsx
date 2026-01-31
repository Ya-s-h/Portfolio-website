import { ThemeProvider, CssBaseline, PaletteMode } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";
import { getTheme } from "./theme";

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

// Create a context to manage theme mode across the app
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to access theme mode and toggle function
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within AppThemeProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
  // Initialize theme mode from localStorage or default to 'dark'
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("themeMode");
    return (savedMode as PaletteMode) || "dark";
  });

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
