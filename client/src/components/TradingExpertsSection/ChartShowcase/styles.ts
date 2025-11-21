import { SxProps, Theme } from "@mui/material";

export const showcaseContainerStyles: SxProps<Theme> = {
  marginBottom: 0,
  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(105, 255, 255, 0.05) 100%)",
  borderRadius: { xs: "20px", sm: "24px", md: "28px" },
  border: "2px solid rgba(0, 229, 255, 0.2)",
  padding: { xs: "25px 20px", sm: "35px 30px", md: "45px 40px" },
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    borderColor: "rgba(0, 229, 255, 0.5)",
    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(105, 255, 255, 0.08) 100%)",
    boxShadow: "0 20px 60px rgba(0, 229, 255, 0.2), inset 0 0 20px rgba(0, 229, 255, 0.1)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
    animation: "rotate 25s linear infinite",
    "@keyframes rotate": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "120%",
    height: "120%",
    transform: "translate(-50%, -50%)",
    background: "radial-gradient(circle, transparent 30%, rgba(105, 255, 255, 0.03) 70%)",
    animation: "pulse 6s ease-in-out infinite",
    "@keyframes pulse": {
      "0%, 100%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1)" },
      "50%": { opacity: 1, transform: "translate(-50%, -50%) scale(1.1)" },
    },
  },
};

export const imageStyles: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  filter: "drop-shadow(0 10px 40px rgba(0, 229, 255, 0.3))",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  transformStyle: "preserve-3d",
  willChange: "transform, filter",
  cursor: "grab",
  "&:active": {
    cursor: "grabbing",
  },
  "&:hover": {
    filter: "drop-shadow(0 25px 70px rgba(0, 229, 255, 0.7)) brightness(1.1)",
  },
};

export const imageWrapperStyle = {
  position: "relative" as const,
  zIndex: 1,
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  justifyContent: "center",
  transformStyle: "preserve-3d" as const,
  willChange: "transform",
};
