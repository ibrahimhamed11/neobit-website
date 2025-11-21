import { SxProps, Theme } from "@mui/material";

export const sectionContainerStyles: SxProps<Theme> = {
  padding: { xs: "60px 20px", sm: "80px 20px", md: "100px 20px" },
  background: "linear-gradient(180deg, #0a0a0a 0%, #121212 100%)",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Droid Sans, sans-serif",
};

export const backgroundAnimationStyles: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.03,
  backgroundImage: `repeating-linear-gradient(
    0deg,
    #00E5FF 0px,
    transparent 1px,
    transparent 40px,
    #00E5FF 41px
  ),
  repeating-linear-gradient(
    90deg,
    #00E5FF 0px,
    transparent 1px,
    transparent 40px,
    #00E5FF 41px
  )`,
  animation: "gridMove 20s linear infinite",
  "@keyframes gridMove": {
    "0%": { transform: "translate(0, 0)" },
    "100%": { transform: "translate(40px, 40px)" },
  },
};

export const containerStyles: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
};

export const headerShowcaseGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: { xs: 4, md: 6 },
  alignItems: "center",
  marginBottom: { xs: "40px", sm: "50px", md: "60px" },
};

export const featuresGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
  gap: { xs: 2, sm: 2.5, md: 3 },
  marginBottom: { xs: "30px", sm: "35px", md: "40px" },
};

export const importanceSectionStyles: SxProps<Theme> = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  borderRadius: { xs: "16px", sm: "18px", md: "20px" },
  padding: { xs: "25px 20px", sm: "30px 25px", md: "35px 30px" },
  border: "2px solid rgba(0, 229, 255, 0.3)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s ease",
  "&:hover": {
    borderColor: "rgba(0, 229, 255, 0.5)",
    boxShadow: "0 10px 40px rgba(0, 229, 255, 0.15)",
  },
};

export const decorativeBackgroundStyles: SxProps<Theme> = {
  position: "absolute",
  top: "-50%",
  right: "-20%",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(0, 229, 255, 0.1), transparent)",
  pointerEvents: "none",
  animation: "float 8s ease-in-out infinite",
  "@keyframes float": {
    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
    "50%": { transform: "translate(-20px, 20px) scale(1.05)" },
  },
};

export const importanceTitleStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  textAlign: "center",
  marginBottom: { xs: "20px", sm: "22px", md: "25px" },
  background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "24px", sm: "28px", md: "32px" },
  fontWeight: 700,
  lineHeight: 1.2,
  position: "relative",
  zIndex: 1,
};

export const importanceGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
  gap: { xs: 2, sm: 2.5, md: 3 },
};
