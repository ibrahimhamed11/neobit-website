import { SxProps, Theme } from "@mui/material";

export const containerSx: SxProps<Theme> = {
  textAlign: "center",
  marginBottom: "70px",
};

export const badgeSx: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.5,
  padding: "8px 20px",
  background: "rgba(0, 229, 255, 0.1)",
  border: "1px solid rgba(0, 229, 255, 0.3)",
  borderRadius: "999px",
  marginBottom: "25px",
};

export const badgeTextSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#00E5FF",
  fontSize: "0.9rem",
  fontWeight: 600,
  letterSpacing: "0.5px",
};

export const titleSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  marginBottom: { xs: "25px", md: "20px" },
  background: "linear-gradient(135deg, #FFFFFF 0%, #00E5FF 50%, #69FFFF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
  fontWeight: 800,
  letterSpacing: "-1px",
  lineHeight: 1.2,
};

export const descriptionSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#B0B0B0",
  fontSize: { xs: "1rem", sm: "1.1rem" },
  maxWidth: "650px",
  margin: "0 auto",
  lineHeight: 1.8,
};
