import { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#00E5FF",
    light: "#69FFFF",
    dark: "#00B2CC",
    contrastText: "#000000",
  },
  secondary: {
    main: "#FF4081",
    light: "#FF79B0",
    dark: "#C50055",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#ffffff",
    paper: "#f5f5f5",
  },
  text: {
    primary: "#0f172a",
    secondary: "#475569",
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
  },
  info: {
    main: "#3b82f6",
    light: "#60a5fa",
    dark: "#2563eb",
  },
  success: {
    main: "#10b981",
    light: "#34d399",
    dark: "#059669",
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#00E5FF", // Neo Cyan
    light: "#69FFFF",
    dark: "#00B2CC",
    contrastText: "#000000",
  },
  secondary: {
    main: "#FF4081",
    light: "#FF79B0",
    dark: "#C50055",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#121212", // Deep Tech Gray
    paper: "#1E1E1E",
  },
  text: {
    primary: "#E0E0E0",
    secondary: "#A0A0A0",
  },
  error: {
    main: "#f87171",
    light: "#fca5a5",
    dark: "#ef4444",
  },
  warning: {
    main: "#fbbf24",
    light: "#fcd34d",
    dark: "#f59e0b",
  },
  info: {
    main: "#60a5fa",
    light: "#93c5fd",
    dark: "#3b82f6",
  },
  success: {
  main: "#00E676",
  light: "#66FFA6",
  dark: "#00B25A",
  },
};
