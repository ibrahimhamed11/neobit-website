import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/config/constants";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/i18n";
import { Globe, Phone, Mail, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { a } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
export default function Header() {
  const { t, i18n } = useTranslation();
  const navItems = NAV_ITEMS.map((item) => ({ ...item, label: t(`nav.${item.key}`) }));
  const isRTL = i18n.language === "ar";
  const controls = useAnimation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Track active section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    if (trigger) {
      controls.start({
        backgroundColor: "rgba(10, 10, 10, 0.98)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 229, 255, 0.15)",
      });
    } else {
      controls.start({
        backgroundColor: "rgba(18, 18, 18, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 16px rgba(0, 229, 255, 0.1)",
      });
    }
  }, [trigger, controls]);

  const toggleLang = () => {
    const next = i18n.language && i18n.language.startsWith("ar") ? "en" : "ar";
    setAppLanguage(next);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Bar */}
      <AnimatePresence>
        {!trigger && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Box
              sx={{
                background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
                borderBottom: "1px solid rgba(0, 229, 255, 0.1)",
                display: { xs: "none", md: "block" },
                overflow: "hidden",
              }}
            >
              <Container maxWidth="lg">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    direction: isRTL ? "rtl" : "ltr",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ scale: 1.05, x: 2 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <motion.div
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          <Phone size={15} color="#00E5FF" />
                        </motion.div>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "Droid Sans, sans-serif",
                            color: "#A0A0A0",
                            fontSize: "0.85rem",
                            transition: "color 0.3s ease",
                            "&:hover": { color: "#00E5FF" },
                          }}
                        >
                          {t("header.topBar.phone")}
                        </Typography>
                      </Box>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.05, x: 2 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <motion.div
                          animate={{ 
                            y: [0, -3, 0],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        >
                          <Mail size={15} color="#00E5FF" />
                        </motion.div>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "Droid Sans, sans-serif",
                            color: "#A0A0A0",
                            fontSize: "0.85rem",
                            transition: "color 0.3s ease",
                            "&:hover": { color: "#00E5FF" },
                          }}
                        >
                          {t("header.topBar.email")}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Box>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Sparkles size={14} color="#00E5FF" />
                      </motion.div>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "Droid Sans, sans-serif",
                          color: "#00E5FF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {t("header.topBar.available")}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </Container>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <AppBar
        position="sticky"
        component={motion.div}
        animate={controls}
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 229, 255, 0.2)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: { xs: "56px", sm: "64px" },
              padding: { xs: "4px 8px", sm: "6px 16px", md: "8px 0" },
              gap: 2,
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {/* Left side: logo only */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                  padding: 0,
                  lineHeight: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "48px", sm: "56px", md: "64px" },
                    margin: 0,
                    padding: 0,
                    lineHeight: 0,
                    position: "relative",
                    "& svg": {
                      height: "100%",
                      width: "auto",
                      display: "block",
                      filter: "drop-shadow(0 0 10px rgba(0, 229, 255, 0.3))",
                      transition: "filter 0.3s ease",
                    },
                    "&:hover svg": {
                      filter: "drop-shadow(0 0 20px rgba(0, 229, 255, 0.6))",
                    },
                  }}
                >
                         <Logo  
                
                    height={100}
                  />
                </Box>
              </motion.div>
            </Box>

            {/* Desktop / tablet nav – centered */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: { md: 1.5, lg: 3 },
                direction: isRTL ? "rtl" : "ltr",
              }}
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index + 1) * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <Button
                      href={item.href}
                      sx={{
                        fontFamily: "Droid Sans, sans-serif",
                        color: isActive ? "#00E5FF" : "#E0E0E0",
                        textTransform: "none",
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        fontWeight: isActive ? 600 : 500,
                        position: "relative",
                        overflow: "hidden",
                        padding: { xs: "6px 10px", sm: "8px 14px", md: "10px 18px" },
                        minWidth: "auto",
                        display: "inline-flex",
                        borderRadius: "12px",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: isRTL ? "auto" : 0,
                          right: isRTL ? 0 : "auto",
                          width: isActive ? "100%" : "0%",
                          height: "3px",
                          background:
                            "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          borderRadius: "2px 2px 0 0",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(105, 255, 255, 0.15) 100%)",
                          opacity: isActive ? 1 : 0,
                          transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          borderRadius: "12px",
                        },
                        "&:hover": {
                          color: "#00E5FF",
                          transform: "translateY(-2px)",
                          backgroundColor: "rgba(0, 229, 255, 0.05)",
                        },
                        "&:hover::before": {
                          width: "100%",
                        },
                        "&:hover::after": {
                          opacity: 1,
                        },
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                );
              })}
            </Box>

            {/* Right side: CTA + language (desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1.5,
                flexShrink: 0,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    fontFamily: "Droid Sans, sans-serif",
                    background:
                      "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontSize: { md: "0.95rem", lg: "1rem" },
                    fontWeight: 600,
                    padding: { md: "8px 20px", lg: "10px 24px" },
                    borderRadius: "999px",
                    position: "relative",
                    overflow: "hidden",
                    minWidth: "auto",
                    boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      [isRTL ? "right" : "left"]: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                      transition: `${isRTL ? "right" : "left"} 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
                    },
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                      boxShadow: "0 6px 25px rgba(0, 229, 255, 0.5)",
                      transform: "translateY(-3px)",
                    },
                    "&:hover::before": {
                      [isRTL ? "right" : "left"]: "100%",
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {t("header.getStarted")}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ rotate: 360, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={toggleLang}
                  sx={{
                    color: "#00E5FF",
                    background: "rgba(0, 229, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "10px",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 229, 255, 0.2)",
                      boxShadow: "0 0 25px rgba(0, 229, 255, 0.4)",
                      border: "1px solid rgba(0, 229, 255, 0.6)",
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-label="language"
                >
                  <Globe />
                </IconButton>
              </motion.div>
            </Box>

            {/* Mobile actions: CTA + language + menu toggle */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
              >
                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    fontFamily: "Droid Sans, sans-serif",
                    background:
                      "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    padding: "7px 12px",
                    borderRadius: "999px",
                    minWidth: "auto",
                    boxShadow: "0 2px 10px rgba(0, 229, 255, 0.3)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                      boxShadow: "0 4px 20px rgba(0, 229, 255, 0.5)",
                    },
                  }}
                >
                  {t("header.getStarted")}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={toggleLang}
                  sx={{
                    color: "#00E5FF",
                    background: "rgba(0, 229, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "7px",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 229, 255, 0.2)",
                      boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)",
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-label="language"
                >
                  <Globe size={18} />
                </IconButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
              >
                <IconButton
                  onClick={toggleMobileMenu}
                  sx={{
                    color: "#E0E0E0",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    padding: "7px",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    "&:hover": {
                      background: "rgba(0, 229, 255, 0.1)",
                      boxShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
                      color: "#00E5FF",
                    },
                    transition: "all 0.3s ease",
                  }}
                  aria-label="menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </IconButton>
              </motion.div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile nav drawer */}
      <Drawer
        anchor={isRTL ? "right" : "left"}
        open={mobileOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: 350,
            background: "linear-gradient(180deg, #0f1729 0%, #050509 100%)",
            borderRight: isRTL ? "none" : "1px solid rgba(0, 229, 255, 0.3)",
            borderLeft: isRTL ? "1px solid rgba(0, 229, 255, 0.3)" : "none",
            color: "#E0E0E0",
            boxShadow: "0 0 50px rgba(0, 229, 255, 0.2)",
          },
        }}
      >
        <Box
          component={motion.div}
          initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              pb: 2,
              borderBottom: "1px solid rgba(0, 229, 255, 0.2)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Droid Sans, sans-serif",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#00E5FF",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                {t("header.menu") || "Menu"}
              </Typography>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={toggleMobileMenu}
                sx={{
                  color: "#9CA3AF",
                  "&:hover": {
                    color: "#00E5FF",
                    background: "rgba(0, 229, 255, 0.1)",
                  },
                }}
                aria-label="close menu"
              >
                <X size={20} />
              </IconButton>
            </motion.div>
          </Box>

          <List
            component={motion.ul}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            sx={{
              padding: 0,
              flex: 1,
            }}
          >
            {navItems.map((item, index) => (
              <ListItem
                key={item.label}
                disablePadding
                component={motion.li}
                variants={{
                  hidden: { opacity: 0, x: isRTL ? 30 : -30 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  },
                }}
              >
                <ListItemButton
                  component={motion.a}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    px: 2,
                    py: 1.5,
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "3px",
                      height: "0%",
                      background: "linear-gradient(180deg, #00E5FF 0%, #69FFFF 100%)",
                      transition: "height 0.3s ease",
                    },
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,149,199,0.25))",
                      boxShadow: "0 4px 20px rgba(0, 229, 255, 0.2)",
                    },
                    "&:hover::before": {
                      height: "100%",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: "Droid Sans, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(0, 229, 255, 0.2)" }}>
              <Button
                href="#contact"
                fullWidth
                variant="contained"
                component={motion.a}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                sx={{
                  fontFamily: "Droid Sans, sans-serif",
                  background:
                    "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0, 229, 255, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                    boxShadow: "0 15px 40px rgba(0, 229, 255, 0.6)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={toggleMobileMenu}
              >
                {t("header.getStarted")}
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Drawer>
    </>
  );
}
