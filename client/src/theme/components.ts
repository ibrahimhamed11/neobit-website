import { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: "1rem",
        padding: "10px 24px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
      },
      contained: {
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-2px)",
        },
      },
      outlined: {
        borderWidth: "2px",
        "&:hover": {
          borderWidth: "2px",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
      elevation1: {
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      },
      elevation2: {
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      elevation3: {
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        fontWeight: 500,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  },
};
