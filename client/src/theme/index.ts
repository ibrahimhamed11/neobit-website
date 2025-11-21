import { createTheme, Theme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export const createAppTheme = (mode: "light" | "dark", direction: "ltr" | "rtl" = "ltr"): Theme => {
  return createTheme({
    direction,
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    components,
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  });
};

export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");

// Function to create theme with specific direction
export const createThemeWithDirection = (mode: "light" | "dark", direction: "ltr" | "rtl") => 
  createAppTheme(mode, direction);
