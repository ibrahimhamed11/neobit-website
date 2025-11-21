import { Box, Container, Typography, Button, Chip, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const fullTitle = t("hero.title");
  const fullDesc = t("hero.description");
  
  useEffect(() => {
    // Skip typing animation on mobile for better performance
    if (isMobile) {
      setTitleText(fullTitle);
      setDescText(fullDesc);
      setShowCursor(false);
      return;
    }

    let titleIndex = 0;
    let descIndex = 0;
    
    // Typing animation for title
    const titleTimer = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.substring(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        // Start description typing after title
        const descTimer = setInterval(() => {
          if (descIndex < fullDesc.length) {
            setDescText(fullDesc.substring(0, descIndex + 1));
            descIndex++;
          } else {
            clearInterval(descTimer);
            setShowCursor(false);
          }
        }, 20);
      }
    }, 50);
    
    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(titleTimer);
      clearInterval(cursorTimer);
    };
  }, [fullTitle, fullDesc, isMobile]);
  
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: { xs: "100px", sm: "100px", md: "80px" },
        paddingBottom: { xs: "60px", sm: "80px", md: "120px" },
      }}
    >
      {/* Animated background elements - Disabled on mobile for performance */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { md: "400px" },
          height: { md: "400px" },
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(30px)" },
          },
        }}
      />
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: { md: "300px" },
          height: { md: "300px" },
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 3, sm: 4, md: 5, lg: 6 },
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ willChange: "auto" }}
          >
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: "20px", flexWrap: "wrap" }}>
                  <Chip
                    icon={<Sparkles size={16} />}
                    label={t("hero.kicker")}
                    sx={{
                      background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(105, 255, 255, 0.2) 100%)",
                      color: "#00F0FF",
                      fontWeight: 700,
                      fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                      padding: { xs: "6px 2px", sm: "8px 4px" },
                      border: "1px solid rgba(0, 229, 255, 0.5)",
                      fontFamily: "Droid Sans, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
                      "& .MuiChip-icon": {
                        color: "#00F0FF",
                        animation: "sparkle 2s ease-in-out infinite",
                        marginRight: "8px",
                        marginLeft: "0px",
                      },
                      "@keyframes sparkle": {
                        "0%, 100%": { transform: "rotate(0deg) scale(1)", opacity: 1 },
                        "50%": { transform: "rotate(180deg) scale(1.2)", opacity: 0.8 },
                      },
                    }}
                  />
                  <Chip
                    icon={<Star size={14} />}
                    label={t("hero.trusted")}
                    size="small"
                    sx={{
                      background: "rgba(255, 215, 0, 0.15)",
                      color: "#FFE66D",
                      border: "1px solid rgba(255, 215, 0, 0.5)",
                      fontFamily: "Droid Sans, sans-serif",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      fontWeight: 600,
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.2)",
                      "& .MuiChip-icon": {
                        color: "#FFE66D",
                        marginRight: "6px",
                        marginLeft: "0px",
                      },
                    }}
                  />
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                      fontWeight: 700,
                      marginBottom: { xs: "12px", sm: "14px", md: "16px" },
                      lineHeight: 1.3,
                      background: "linear-gradient(135deg, #00F5FF 0%, #7DFFFF 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "Droid Sans, sans-serif",
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 40px rgba(0, 245, 255, 0.5)",
                      position: "relative",
                      "&::after": showCursor && titleText.length === fullTitle.length ? {
                        content: '"|"',
                        position: "absolute",
                        marginLeft: "4px",
                        animation: "blink 1s step-end infinite",
                        color: "#00F5FF",
                      } : {},
                      "@keyframes blink": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0 },
                      },
                    }}
                  >
                    {titleText}
                    {titleText.length < fullTitle.length && showCursor && (
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          width: "3px",
                          height: "1em",
                          backgroundColor: "#00F5FF",
                          marginLeft: "4px",
                          animation: "blink 1s step-end infinite",
                          verticalAlign: "middle",
                          boxShadow: "0 0 10px rgba(0, 245, 255, 0.8)",
                        }}
                      />
                    )}
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem", lg: "1.05rem" },
                    color: "#D5D5D5",
                    marginBottom: { xs: "20px", sm: "22px", md: "24px" },
                    lineHeight: 1.7,
                    fontFamily: "Droid Sans, sans-serif",
                    maxWidth: "540px",
                    fontWeight: 400,
                    textShadow: "0 0 20px rgba(213, 213, 213, 0.3)",
                  }}
                >
                  {descText}
                  {titleText.length === fullTitle.length && descText.length < fullDesc.length && showCursor && (
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: "2px",
                        height: "1em",
                        backgroundColor: "#00F5FF",
                        marginLeft: "2px",
                        animation: "blink 1s step-end infinite",
                        verticalAlign: "middle",
                        boxShadow: "0 0 8px rgba(0, 245, 255, 0.6)",
                      }}
                    />
                  )}
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "nowrap",
                  marginTop: "8px",
                  overflowX: { xs: "auto", sm: "visible" },
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <Button
                    variant="contained"
                    href="#contact"
                    sx={{
                      background: "linear-gradient(135deg, #00F5FF 0%, #00B8D4 100%)",
                      color: "#0a0a0a",
                      padding: { xs: "10px 20px", sm: "13px 32px" },
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      borderRadius: "30px",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "Droid Sans, sans-serif",
                      position: "relative",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 20px rgba(0, 245, 255, 0.35), 0 0 40px rgba(0, 245, 255, 0.2)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        transition: "left 0.6s ease",
                      },
                      "&:hover": {
                        background: "linear-gradient(135deg, #7DFFFF 0%, #00F5FF 100%)",
                        boxShadow: "0 8px 32px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover::before": {
                        left: "100%",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <Rocket size={16} />
                    {t("hero.getStarted")}
                    <ArrowRight size={16} />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <Button
                    variant="outlined"
                    href="#services"
                    sx={{
                      color: "#00F5FF",
                      borderColor: "rgba(0, 245, 255, 0.5)",
                      borderWidth: "1.5px",
                      padding: { xs: "10px 20px", sm: "13px 32px" },
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      fontWeight: 600,
                      borderRadius: "30px",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      fontFamily: "Droid Sans, sans-serif",
                      position: "relative",
                      overflow: "hidden",
                      background: "rgba(0, 245, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "0%",
                        height: "100%",
                        background: "linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(125, 255, 255, 0.15) 100%)",
                        transition: "width 0.4s ease",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(0, 245, 255, 0.12)",
                        borderColor: "#00F5FF",
                        color: "#7DFFFF",
                        boxShadow: "0 4px 20px rgba(0, 245, 255, 0.3), 0 0 30px rgba(0, 245, 255, 0.2)",
                      },
                      "&:hover::before": {
                        width: "100%",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {t("hero.learnMore")}
                  </Button>
                </motion.div>
              </Box>
              
              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, sm: 3 },
                    marginTop: { xs: "24px", sm: "28px", md: "32px" },
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.75rem" },
                          fontWeight: 700,
                          background: "linear-gradient(135deg, #00F5FF 0%, #7DFFFF 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "Droid Sans, sans-serif",
                          lineHeight: 1,
                          textShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                        }}
                      >
                        20+
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.7rem", sm: "0.72rem", md: "0.75rem" },
                          color: "#B8B8B8",
                          fontFamily: "Droid Sans, sans-serif",
                          marginTop: "4px",
                          textShadow: "0 0 10px rgba(184, 184, 184, 0.3)",
                        }}
                      >
                        {t("hero.happyClients")}
                      </Typography>
                    </Box>
                  </motion.div>
                  <Box
                    sx={{
                      width: "1.5px",
                      height: "32px",
                      background: "linear-gradient(180deg, transparent, rgba(0, 245, 255, 0.6), transparent)",
                      boxShadow: "0 0 8px rgba(0, 245, 255, 0.4)",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.75rem" },
                          fontWeight: 700,
                          background: "linear-gradient(135deg, #00F5FF 0%, #7DFFFF 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "Droid Sans, sans-serif",
                          lineHeight: 1,
                          textShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                        }}
                      >
                        98%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.7rem", sm: "0.72rem", md: "0.75rem" },
                          color: "#B8B8B8",
                          fontFamily: "Droid Sans, sans-serif",
                          marginTop: "4px",
                          textShadow: "0 0 10px rgba(184, 184, 184, 0.3)",
                        }}
                      >
                        {t("hero.successRate")}
                      </Typography>
                    </Box>
                  </motion.div>
                  <Box
                    sx={{
                      width: "1.5px",
                      height: "32px",
                      background: "linear-gradient(180deg, transparent, rgba(0, 245, 255, 0.6), transparent)",
                      boxShadow: "0 0 8px rgba(0, 245, 255, 0.4)",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.75rem" },
                          fontWeight: 700,
                          background: "linear-gradient(135deg, #00F5FF 0%, #7DFFFF 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "Droid Sans, sans-serif",
                          lineHeight: 1,
                          textShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                        }}
                      >
                        24/7
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.7rem", sm: "0.72rem", md: "0.75rem" },
                          color: "#B8B8B8",
                          fontFamily: "Droid Sans, sans-serif",
                          marginTop: "4px",
                          textShadow: "0 0 10px rgba(184, 184, 184, 0.3)",
                        }}
                      >
                        {t("hero.support")}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </motion.div>

          {/* Right side - Handcode SVG animation */}
          <Box
            sx={{
              order: { xs: -1, lg: 1 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  padding: { xs: 2, sm: 3, md: 4 },
                }}
              >
              {/* Multiple glowing layers for depth */}
              <Box
                sx={{
                  position: "absolute",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(80px)",
                  animation: "pulse-glow 4s ease-in-out infinite",
                  "@keyframes pulse-glow": {
                    "0%, 100%": { 
                      transform: "scale(0.9)", 
                      opacity: 0.4 
                    },
                    "50%": { 
                      transform: "scale(1.2)", 
                      opacity: 0.9 
                    },
                  },
                }}
              />
              
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle, rgba(105, 255, 255, 0.2) 0%, transparent 60%)",
                  borderRadius: "50%",
                  filter: "blur(50px)",
                  animation: "pulse-secondary 3s ease-in-out infinite",
                  animationDelay: "0.5s",
                  "@keyframes pulse-secondary": {
                    "0%, 100%": { 
                      transform: "scale(1)", 
                      opacity: 0.3 
                    },
                    "50%": { 
                      transform: "scale(1.15)", 
                      opacity: 0.7 
                    },
                  },
                }}
              />
              
              {/* Handcode SVG with advanced animation */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/code.svg"
                  alt="Hand Coding Illustration"
                  sx={{
                    width: "100%",
                    maxWidth: { 
                      xs: "400px", 
                      sm: "500px", 
                      md: "600px", 
                      lg: "700px" 
                    },
                    height: "auto",
                    filter: "drop-shadow(0 0 40px rgba(0, 229, 255, 0.4)) drop-shadow(0 10px 50px rgba(0, 229, 255, 0.3))",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      filter: "drop-shadow(0 0 60px rgba(0, 229, 255, 0.6)) drop-shadow(0 15px 70px rgba(0, 229, 255, 0.5))",
                    },
                  }}
                />
              </motion.div>

              {/* Enhanced decorative particles with varied animations */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: "130%",
                  height: "130%",
                  pointerEvents: "none",
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: i % 2 === 0 ? "10px" : "6px",
                        height: i % 2 === 0 ? "10px" : "6px",
                        background: i % 3 === 0 
                          ? "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)"
                          : i % 3 === 1
                          ? "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)"
                          : "radial-gradient(circle, #00E5FF 0%, #0099CC 100%)",
                        borderRadius: "50%",
                        left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 12)}%`,
                        top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 12)}%`,
                        boxShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
                        animation: `particle-float-${i % 8} ${3 + (i % 3)}s ease-in-out infinite`,
                        "@keyframes particle-float-0": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.4 },
                          "50%": { transform: "translate(-15px, -25px)", opacity: 1 },
                        },
                        "@keyframes particle-float-1": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.5 },
                          "50%": { transform: "translate(20px, -18px)", opacity: 1 },
                        },
                        "@keyframes particle-float-2": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.6 },
                          "50%": { transform: "translate(-10px, -30px)", opacity: 1 },
                        },
                        "@keyframes particle-float-3": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.4 },
                          "50%": { transform: "translate(15px, -22px)", opacity: 1 },
                        },
                        "@keyframes particle-float-4": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.5 },
                          "50%": { transform: "translate(-20px, -26px)", opacity: 1 },
                        },
                        "@keyframes particle-float-5": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.6 },
                          "50%": { transform: "translate(12px, -20px)", opacity: 1 },
                        },
                        "@keyframes particle-float-6": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.4 },
                          "50%": { transform: "translate(-18px, -28px)", opacity: 1 },
                        },
                        "@keyframes particle-float-7": {
                          "0%, 100%": { transform: "translate(0px, 0px)", opacity: 0.5 },
                          "50%": { transform: "translate(22px, -24px)", opacity: 1 },
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Orbiting rings effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 15 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    position: "absolute",
                    width: `${70 + i * 20}%`,
                    height: `${70 + i * 20}%`,
                    border: `1px solid rgba(0, 229, 255, ${0.15 - i * 0.03})`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
