import { SxProps, Theme } from "@mui/material";

export const ctaContainerStyles: SxProps<Theme> = {
  marginTop: { xs: "25px", sm: "28px", md: "30px" },
  textAlign: "center",
  padding: { xs: "20px", sm: "24px", md: "28px" },
  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(105, 255, 255, 0.05))",
  borderRadius: { xs: "12px", sm: "14px", md: "16px" },
  border: "2px solid rgba(0, 229, 255, 0.3)",
};

export const titleStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#FFFFFF",
  marginBottom: { xs: "10px", sm: "12px", md: "14px" },
  fontSize: { xs: "20px", sm: "22px", md: "24px" },
  fontWeight: 700,
  lineHeight: 1.3,
};

export const descriptionStyles: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#CCCCCC",
  fontSize: { xs: "14px", sm: "15px", md: "16px" },
  lineHeight: 1.6,
  fontWeight: 400,
};
