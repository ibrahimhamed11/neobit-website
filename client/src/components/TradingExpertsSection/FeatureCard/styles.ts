import { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  height: "100%",
  background: "linear-gradient(145deg, #1E1E1E 0%, #2A2A2A 100%)",
  border: "2px solid rgba(0, 229, 255, 0.2)",
  borderRadius: "24px",
  overflow: "hidden",
  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: 0,
  },
  "&:hover": {
    borderColor: "rgba(0, 229, 255, 1)",
    boxShadow: "0 30px 60px rgba(0, 229, 255, 0.4), 0 0 50px rgba(0, 229, 255, 0.3)",
    "&::before": { opacity: 0.1 },
  },
};

export const iconBoxStyles = (gradient: string): SxProps<Theme> => ({
  background: gradient,
  padding: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
  },
  "&:hover::before": { opacity: 1 },
});

export const iconStyles: SxProps<Theme> = {
  fontSize: 60,
  color: "#FFFFFF",
};

export const cardContentStyles: SxProps<Theme> = {
  padding: { xs: "20px", sm: "22px", md: "24px" },
  position: "relative",
  zIndex: 1,
};

export const titleStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  fontSize: { xs: "18px", sm: "19px", md: "20px" },
  marginBottom: { xs: "8px", sm: "10px", md: "12px" },
  color: "#00E5FF",
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

// Particle burst effect styles
export const particleStyles = {
  position: "absolute" as const,
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.8)",
  left: "50%",
  top: "50%",
};

// Glowing bottom line styles
export const glowingLineStyles = {
  position: "absolute" as const,
  bottom: 0,
  left: 0,
  height: "3px",
  background: "linear-gradient(90deg, #00E5FF, #69FFFF, #00E5FF)",
  backgroundSize: "200% 100%",
};
