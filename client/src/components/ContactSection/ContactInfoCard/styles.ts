import { SxProps, Theme } from "@mui/material";

export const getCardSx = (isHovered: boolean, color: string): SxProps<Theme> => ({
  background: isHovered
    ? "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(26, 26, 46, 0.95) 100%)"
    : "linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 35, 0.9) 100%)",
  backdropFilter: "blur(20px)",
  border: `2px solid ${isHovered ? "rgba(0, 229, 255, 0.6)" : "rgba(0, 229, 255, 0.2)"}`,
  borderRadius: "20px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
  boxShadow: isHovered
    ? `0 25px 50px rgba(0, 229, 255, 0.4), 0 0 80px ${color}30`
    : "0 8px 25px rgba(0, 0, 0, 0.4)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${color}, #69FFFF)`,
    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.5s ease",
    boxShadow: isHovered ? `0 0 20px ${color}` : "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  },
});

export const cardContentSx: SxProps<Theme> = {
  padding: "20px !important",
  position: "relative",
  zIndex: 1,
};

export const getIconContainerSx = (isHovered: boolean, color: string): SxProps<Theme> => ({
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: isHovered
    ? `linear-gradient(135deg, ${color}30, ${color}15)`
    : `linear-gradient(135deg, ${color}20, ${color}10)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  border: `2px solid ${isHovered ? `${color}80` : `${color}40`}`,
  transition: "all 0.4s ease",
  transform: isHovered ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0deg)",
  boxShadow: isHovered 
    ? `0 10px 30px ${color}40, 0 0 40px ${color}30`
    : `0 4px 15px ${color}20`,
  "& svg": {
    fontSize: "24px !important",
  },
});

export const iconSx = (color: string): SxProps<Theme> => ({
  color: color,
  filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))",
});

export const titleSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "8px",
  fontSize: "1rem",
  letterSpacing: "0.5px",
};

export const valueSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#00E5FF",
  marginBottom: "8px",
  fontSize: "0.875rem",
  fontWeight: 600,
  letterSpacing: "0.3px",
  textShadow: "0 0 20px rgba(0, 229, 255, 0.4)",
};

export const descriptionSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#B0B0B0",
  fontSize: "0.8rem",
  lineHeight: 1.5,
};
