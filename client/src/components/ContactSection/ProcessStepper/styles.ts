import { styled } from "@mui/material/styles";
import { StepConnector, stepConnectorClasses, SxProps, Theme } from "@mui/material";

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    display: 'none',
  },
  [`& .${stepConnectorClasses.line}`]: {
    display: 'none',
  },
}));

export const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  position: 'relative',
  backgroundColor: 'rgba(255, 215, 0, 0.1)',
  zIndex: 1,
  color: '#fff',
  width: 52,
  height: 52,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid rgba(255, 215, 0, 0.35)',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
  transition: 'all 0.4s ease',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient(135deg, #FFE66D 0%, #FFD700 100%)',
    boxShadow: '0 6px 24px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
    border: '2px solid #FFD700',
    transform: 'scale(1.05)',
    color: '#0a0a0a',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(135deg, #FFE66D 0%, #FFD700 100%)',
    border: '2px solid #FFD700',
    boxShadow: '0 4px 18px rgba(255, 215, 0, 0.45), 0 0 15px rgba(255, 215, 0, 0.25)',
    color: '#0a0a0a',
  }),
}));

export const containerSx: SxProps<Theme> = {
  marginBottom: { xs: "40px", sm: "50px", md: "60px" },
  padding: { xs: "30px 16px", sm: "40px 24px", md: "60px 40px" },
  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(26, 26, 46, 0.8) 100%)",
  borderRadius: { xs: "16px", sm: "20px", md: "24px" },
  border: "1px solid rgba(0, 229, 255, 0.2)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};

export const innerContainerSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
};

export const titleSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  textAlign: "center",
  marginBottom: { xs: "16px", sm: "20px", md: "30px" },
  background: "linear-gradient(135deg, #FFFFFF 0%, #00E5FF 50%, #69FFFF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "1.5rem", sm: "1.85rem", md: "2.5rem" },
  fontWeight: 700,
  letterSpacing: "-0.5px",
  lineHeight: 1.3,
};

export const descriptionSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  textAlign: "center",
  color: "#B0B0B0",
  fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
  maxWidth: "700px",
  margin: { xs: "0 auto 30px", md: "0 auto 50px" },
  lineHeight: 1.7,
  padding: { xs: "0 8px", sm: "0" },
};

export const stepperSx: SxProps<Theme> = {
  '& .MuiStepLabel-label': {
    fontFamily: 'Droid Sans, sans-serif',
    color: '#B0B0B0',
    fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
    fontWeight: 600,
    marginTop: '12px',
    '&.Mui-active': {
      color: '#00E5FF',
      fontWeight: 700,
    },
    '&.Mui-completed': {
      color: '#00E5FF',
      fontWeight: 700,
    },
  },
};

export const stepLabelContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0.5,
};

export const stepLabelSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  background: "linear-gradient(135deg, #FFE66D 0%, #FFD700 50%, #FFA500 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
  fontWeight: 700,
  textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
  letterSpacing: "0.02em",
};

export const stepDescSx: SxProps<Theme> = {
  fontFamily: "Droid Sans, sans-serif",
  color: "#B8B8B8",
  fontSize: { xs: "0.75rem", sm: "0.8rem" },
  textAlign: "center",
  maxWidth: "120px",
  fontWeight: 600,
  textShadow: "0 0 10px rgba(184, 184, 184, 0.3)",
};
