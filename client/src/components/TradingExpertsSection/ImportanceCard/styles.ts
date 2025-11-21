import { SxProps, Theme } from "@mui/material";

export const cardContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  padding: { xs: "16px", sm: "18px", md: "20px" },
  background: "linear-gradient(145deg, rgba(0, 229, 255, 0.05), rgba(0, 229, 255, 0.02))",
  borderRadius: { xs: "12px", sm: "14px", md: "16px" },
  border: "2px solid rgba(0, 229, 255, 0.2)",
  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "5px",
    height: "100%",
    background: "linear-gradient(180deg, #00E5FF, #69FFFF)",
    opacity: 0,
    transition: "opacity 0.5s ease",
  },
  "&:hover": {
    background: "linear-gradient(145deg, rgba(0, 229, 255, 0.12), rgba(0, 229, 255, 0.06))",
    borderColor: "rgba(0, 229, 255, 0.6)",
    transform: "translateX(15px)",
    boxShadow: "0 10px 30px rgba(0, 229, 255, 0.2)",
    "&::before": { opacity: 1 },
  },
};

export const numberBoxStyles = (isRTL: boolean): SxProps<Theme> => ({
  width: { xs: "36px", sm: "38px", md: "40px" },
  height: { xs: "36px", sm: "38px", md: "40px" },
  borderRadius: "50%",
  background: "linear-gradient(135deg, #00E5FF, #69FFFF)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: isRTL ? 0 : { xs: "12px", sm: "14px", md: "16px" },
  marginLeft: isRTL ? { xs: "12px", sm: "14px", md: "16px" } : 0,
  flexShrink: 0,
  fontFamily: "Droid Sans, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "16px", sm: "17px", md: "18px" },
  color: "#000",
  boxShadow: "0 4px 12px rgba(0, 229, 255, 0.4)",
  transition: "transform 0.3s ease",
  "&:hover": { transform: "scale(1.1) rotate(360deg)" },
});

export const titleStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#00E5FF",
  marginBottom: { xs: "6px", sm: "7px", md: "8px" },
  fontSize: { xs: "16px", sm: "17px", md: "18px" },
  fontWeight: 700,
  transition: "color 0.3s ease",
  "&:hover": { color: "#69FFFF" },
};

export const descriptionStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#CCCCCC",
  lineHeight: 1.6,
  fontSize: { xs: "14px", sm: "14px", md: "15px" },
  fontWeight: 400,
};

// Connection line styles
export const getConnectionLineStyles = (isRTL: boolean) => ({
  position: "absolute" as const,
  top: "50%",
  right: isRTL ? "auto" : "-20%",
  left: isRTL ? "-20%" : "auto",
  width: "40%",
  height: "2px",
  transformOrigin: isRTL ? "right" : "left",
  zIndex: 0,
});

// Rotating glow ring styles
export const glowRingStyles = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "conic-gradient(from 0deg, #00E5FF, #69FFFF, #00E5FF)",
  filter: "blur(15px)",
  opacity: 0.5,
  zIndex: 0,
};

// Number span styles
export const numberSpanStyles = {
  background: "linear-gradient(135deg, #00E5FF, #69FFFF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  fontSize: "1.8rem",
};

// Ripple effect styles
export const rippleEffectStyles = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  border: "2px solid #00E5FF",
  pointerEvents: "none" as const,
};

// Corner accent position types
export const cornerAccentPositions = [
  { top: 0, left: 0, rotate: 0 },
  { top: 0, right: 0, rotate: 90 },
  { bottom: 0, right: 0, rotate: 180 },
  { bottom: 0, left: 0, rotate: 270 },
];

// Corner accent base styles
export const getCornerAccentStyles = (pos: { top?: number; left?: number; right?: number; bottom?: number; rotate: number }) => ({
  position: "absolute" as const,
  width: "20px",
  height: "20px",
  ...pos,
  background: "linear-gradient(135deg, #00E5FF, transparent)",
  transform: `rotate(${pos.rotate}deg)`,
  borderTopLeftRadius: "4px",
});
