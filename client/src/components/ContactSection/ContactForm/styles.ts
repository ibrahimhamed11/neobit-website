import { SxProps, Theme } from "@mui/material";

export const getCardSx = (animate: any): SxProps<Theme> => ({
  maxWidth: "900px",
  margin: "0 auto",
  background: "linear-gradient(145deg, rgba(20, 20, 35, 0.95) 0%, rgba(15, 15, 25, 0.9) 100%)",
  backdropFilter: "blur(30px)",
  border: "2px solid rgba(0, 229, 255, 0.3)",
  borderRadius: "28px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 229, 255, 0.15)",
  transition: "all 0.4s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.7), 0 0 80px rgba(0, 229, 255, 0.25)",
    borderColor: "rgba(0, 229, 255, 0.5)",
  },
});

export const cardContentSx: SxProps<Theme> = {
  padding: { xs: "24px", sm: "32px", md: "40px" },
};

export const getFormSx = (isRTL: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  direction: isRTL ? "rtl" : "ltr",
});

export const formGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  gap: 2,
};

export const getFieldLabelSx = (isRTL: boolean): SxProps<Theme> => ({
  fontFamily: "Droid Sans, sans-serif",
  color: "#00E5FF",
  fontSize: "0.95rem",
  fontWeight: 600,
  marginBottom: "8px",
  textAlign: isRTL ? "right" : "left",
});

export const getTextFieldSx = (isRTL: boolean): SxProps<Theme> => ({
  '& .MuiOutlinedInput-root': {
    color: '#E0E0E0',
    fontFamily: 'Droid Sans, sans-serif',
    fontSize: '1rem',
    backgroundColor: 'rgba(15, 15, 25, 0.6)',
    borderRadius: '16px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    '& input, & textarea': {
      textAlign: isRTL ? 'right' : 'left',
      direction: isRTL ? 'rtl' : 'ltr',
      padding: '16px 14px',
      '&::placeholder': {
        color: 'rgba(0, 229, 255, 0.5)',
        opacity: 1,
        fontWeight: 500,
        transition: 'all 0.3s ease',
      },
    },
    '& textarea': {
      padding: '16px 14px',
    },
    '& fieldset': {
      borderColor: 'rgba(0, 229, 255, 0.4)',
      borderWidth: '2px',
      transition: 'all 0.4s ease',
    },
    '&:hover': {
      backgroundColor: 'rgba(20, 25, 35, 0.7)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0, 229, 255, 0.15)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 229, 255, 0.7)',
      boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
    },
    '&:hover input::placeholder, &:hover textarea::placeholder': {
      color: 'rgba(0, 229, 255, 0.7)',
      transform: 'translateX(4px)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 229, 255, 0.08)',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 32px rgba(0, 229, 255, 0.25)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00E5FF !important',
      borderWidth: '2.5px',
      boxShadow: '0 0 30px rgba(0, 229, 255, 0.4)',
    },
    '&.Mui-focused input::placeholder, &.Mui-focused textarea::placeholder': {
      color: 'rgba(0, 229, 255, 0.4)',
      transform: 'translateX(0)',
    },
    '&.Mui-error fieldset': {
      borderColor: '#ff6b6b !important',
      boxShadow: '0 0 20px rgba(255, 107, 107, 0.3)',
    },
    '& .MuiInputAdornment-root': {
      marginRight: isRTL ? '8px' : 0,
      marginLeft: isRTL ? 0 : '8px',
      '& .MuiSvgIcon-root': {
        transition: 'all 0.3s ease',
      },
    },
    '&:hover .MuiInputAdornment-root .MuiSvgIcon-root': {
      color: 'rgba(0, 229, 255, 0.9) !important',
      transform: 'scale(1.1)',
    },
    '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
      color: '#00E5FF !important',
      transform: 'scale(1.15)',
      filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))',
    },
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Droid Sans, sans-serif',
    fontSize: '0.85rem',
    fontWeight: 500,
    textAlign: isRTL ? 'right' : 'left',
    margin: isRTL ? '6px 14px 0 0' : '6px 0 0 14px',
    '&.Mui-error': {
      color: '#ff8787',
      fontWeight: 600,
    },
  },
});

export const buttonContainerSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  marginTop: "12px",
};

export const buttonWrapperSx = {
  width: "100%",
  maxWidth: "400px",
};

export const getButtonSx = (isRTL: boolean): SxProps<Theme> => ({
  fontFamily: "Droid Sans, sans-serif",
  background: "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
  color: "#FFFFFF",
  padding: "16px 48px",
  fontSize: "1.15rem",
  fontWeight: 700,
  borderRadius: "16px",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 229, 255, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
  gap: "10px",
  border: "2px solid rgba(0, 229, 255, 0.5)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
    transition: "left 0.7s ease",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "0",
    height: "0",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.3)",
    transform: "translate(-50%, -50%)",
    transition: "width 0.6s, height 0.6s",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
    boxShadow: "0 15px 45px rgba(0, 229, 255, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
    transform: "translateY(-3px) scale(1.02)",
    color: "#FFFFFF",
    borderColor: "rgba(105, 255, 255, 0.8)",
  },
  "&:hover::before": {
    left: "100%",
  },
  "&:hover::after": {
    width: "300px",
    height: "300px",
  },
  "&:active": {
    transform: "translateY(-1px) scale(0.98)",
  },
  "& .MuiSvgIcon-root": {
    transition: "all 0.3s ease",
  },
  "&:hover .MuiSvgIcon-root": {
    transform: isRTL ? "translateX(-4px)" : "translateX(4px)",
    filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
  },
});

export const alertSx: SxProps<Theme> = {
  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 153, 204, 0.1) 100%)",
  backdropFilter: "blur(10px)",
  border: "2px solid rgba(0, 229, 255, 0.4)",
  borderRadius: "14px",
  color: "#00E5FF",
  fontFamily: "Droid Sans, sans-serif",
  fontSize: "1rem",
  fontWeight: 600,
  padding: "12px 16px",
  boxShadow: "0 8px 24px rgba(0, 229, 255, 0.2)",
  "& .MuiAlert-icon": {
    color: "#00E5FF",
    filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))",
  },
  "& .MuiAlert-message": {
    fontFamily: "Droid Sans, sans-serif",
  },
};
