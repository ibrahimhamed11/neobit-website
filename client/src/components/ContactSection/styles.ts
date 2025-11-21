import { SxProps, Theme } from "@mui/material";

export const containerSx: SxProps<Theme> = {
  padding: { xs: "80px 20px", sm: "100px 20px", md: "120px 20px" },
  background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "radial-gradient(circle at 30% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle, rgba(105, 255, 255, 0.05) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};

export const headerContainerSx: SxProps<Theme> = {
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

export const contactCardsGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
  gap: 3,
  marginBottom: "60px",
};

export const additionalInfoSx: SxProps<Theme> = {
  marginTop: "50px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1.5,
  flexWrap: "wrap",
};

export const responseTimeSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#909090",
  fontSize: "0.95rem",
};
