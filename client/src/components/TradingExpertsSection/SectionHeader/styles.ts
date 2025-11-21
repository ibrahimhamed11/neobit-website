import { SxProps, Theme } from "@mui/material";

export const headerContainerStyles: SxProps<Theme> = {
  textAlign: { xs: "center", md: "left" },
  marginBottom: 0,
};

export const badgeStyles: SxProps<Theme> = {
  color: "#00E5FF",
  fontWeight: 700,
  letterSpacing: "3px",
  fontSize: { xs: "11px", sm: "12px", md: "13px" },
  fontFamily: "Droid Sans, sans-serif",
  textTransform: "uppercase",
};

export const titleStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  marginTop: "8px",
  marginBottom: "12px",
  background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "28px", sm: "36px", md: "42px" },
  fontWeight: 700,
  lineHeight: 1.2,
};

export const descriptionStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#CCCCCC",
  maxWidth: "750px",
  fontSize: { xs: "14px", sm: "15px", md: "16px" },
  lineHeight: 1.6,
  fontWeight: 400,
};
