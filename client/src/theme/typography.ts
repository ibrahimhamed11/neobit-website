import { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions['typography'] = {
  // Unified font family per request: use only Droid Sans with system sans fallback.
  fontFamily: '"Droid Sans", sans-serif',
  h1: {
    fontSize: "3.5rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "2.5rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  button: {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
  },
  subtitle1: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
};
