import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createThemeWithDirection } from "../theme";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultMode = "dark",
}: ThemeProviderProps) {
  const { i18n } = useTranslation();
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Always use dark mode
    return "dark";
  });
  
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    
    // Update document class for potential CSS usage
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  // Listen for language changes and update immediately
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
      const dir = lng.startsWith("ar") ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = lng;
    };

    // Set initial direction
    handleLanguageChange(i18n.language || "en");

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const theme = useMemo(() => {
    const direction = currentLanguage.startsWith("ar") ? "rtl" : "ltr";
    return createThemeWithDirection("dark", direction);
  }, [currentLanguage]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      setThemeMode,
    }),
    [mode, toggleTheme, setThemeMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
