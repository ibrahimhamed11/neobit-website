import { Box, Container, Typography, Link as MuiLink, TextField, Button, IconButton, Divider, Alert } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Twitter, Linkedin, Github, Send, Heart, MapPin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { COMPANY_INFO, getLocation, getSocialLink } from "@/config/constants";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<"" | "success" | "error">("");
  const isRTL = i18n.language === "ar";
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setSubscriptionStatus("");

    if (!email.trim()) {
      setEmailError(t("footer.validation.newsletterEmailRequired"));
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(t("footer.validation.newsletterEmailInvalid"));
      return;
    }

    // Simulate subscription process
    console.log("Newsletter subscription:", email);
    setSubscriptionStatus("success");
    setEmail("");
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSubscriptionStatus("");
    }, 3000);
  };

  const footerLinks = [
    { label: t("footer.about"), href: "#about" },
    { label: t("footer.privacyPolicy"), href: "#" },
    { label: t("footer.termsOfService"), href: "#" },
    { label: t("footer.careers"), href: "#" },
    { label: t("footer.blog"), href: "#" },
    { label: t("footer.support"), href: "#" },
  ];

  const serviceLinks = [
    { label: t("footer.tradingSolutions"), href: "#services" },
    { label: t("footer.blockchainDev"), href: "#services" },
    { label: t("footer.mqlBots"), href: "#services" },
    { label: t("footer.mobileApps"), href: "#services" },
    { label: t("footer.webDev"), href: "#services" },
    { label: t("footer.customSolutions"), href: "#services" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        color: "#E0E0E0",
        padding: { xs: "40px 20px", sm: "60px 20px" },
        borderTop: "1px solid rgba(0, 229, 255, 0.2)",
        position: "relative",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          bottom: "30px",
          [isRTL ? "left" : "right"]: "30px",
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
            color: "#0a0a0a",
            width: 50,
            height: 50,
            "&:hover": {
              background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
              transform: "translateY(-3px)",
              boxShadow: "0 10px 30px rgba(0, 229, 255, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <ArrowUp />
        </IconButton>
      </motion.div>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 1.5fr" },
            gap: 4,
            marginBottom: "40px",
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: "15px" }}>
              <Box
                sx={{
                  height: { xs: "48px", sm: "56px", md: "64px" },
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  "& svg": {
                    height: "100%",
                    width: "auto",
                    filter: "drop-shadow(0 0 10px rgba(0, 229, 255, 0.3))",
                  },
                  "&:hover svg": {
                    filter: "drop-shadow(0 0 20px rgba(0, 229, 255, 0.6))",
                  },
                }}
              >
                <Logo
                 />
              </Box>
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#00E5FF",
                display: "block",
                marginBottom: "10px",
                fontStyle: "italic",
              }}
            >
              {t("footer.tagline")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#A0A0A0",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {t("footer.description")}
            </Typography>
            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1.5, flexDirection: isRTL ? "row-reverse" : "row" }}>
              {[
                { icon: <Twitter size={20} />, link: getSocialLink("twitter"), name: "Twitter" },
                { icon: <Linkedin size={20} />, link: getSocialLink("linkedin"), name: "LinkedIn" },
                { icon: <Github size={20} />, link: getSocialLink("github"), name: "GitHub" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <IconButton
                    href={social.link}
                    sx={{
                      background: "rgba(0, 229, 255, 0.1)",
                      color: "#00E5FF",
                      padding: "12px",
                      borderRadius: "12px",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transition: "left 0.5s ease",
                      },
                      "&:hover": {
                        background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                        color: "#0a0a0a",
                        transform: "translateY(-3px)",
                        boxShadow: "0 15px 30px rgba(0, 229, 255, 0.4)",
                      },
                      "&:hover::before": {
                        left: "100%",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1rem",
                color: "#E0E0E0",
              }}
            >
              {t("footer.services")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { key: "footer.tradingSolutions", href: "#services" },
                { key: "footer.blockchainDev", href: "#services" },
                { key: "footer.mqlBots", href: "#services" },
                { key: "footer.mobileApps", href: "#services" },
                { key: "footer.webDev", href: "#services" },
                { key: "footer.customSolutions", href: "#services" },
              ].map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                >
                  <MuiLink
                    href={service.href}
                    sx={{
                      fontFamily: "Droid Sans, sans-serif",
                      color: "#A0A0A0",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      position: "relative",
                      display: "inline-block",
                      "&::before": {
                        content: '"▶"',
                        position: "absolute",
                        [isRTL ? "right" : "left"]: isRTL ? "100%" : "-15px",
                        color: "#00E5FF",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        color: "#00E5FF",
                        [isRTL ? "paddingRight" : "paddingLeft"]: "20px",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {t(service.key)}
                  </MuiLink>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1rem",
                color: "#E0E0E0",
              }}
            >
              {t("footer.quickLinks")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  sx={{
                    fontFamily: "Droid Sans, sans-serif",
                    color: "#A0A0A0",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#00E5FF",
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1rem",
                color: "#E0E0E0",
              }}
            >
              {t("footer.newsletter")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#A0A0A0",
                marginBottom: "15px",
                lineHeight: 1.6,
              }}
            >
              {t("footer.newsletterText")}
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box 
                component="form" 
                onSubmit={handleNewsletterSubmit}
                sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 1.5,
                  direction: isRTL ? "rtl" : "ltr",
                }}
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <TextField
                    type="email"
                    placeholder={t("footer.emailPlaceholder")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                      setSubscriptionStatus("");
                    }}
                    error={!!emailError}
                    helperText={emailError}
                    size="small"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        color: "#E0E0E0",
                        fontFamily: "Droid Sans, sans-serif",
                        backgroundColor: "#2A2A2A",
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: emailError ? "#f44336" : "rgba(0, 229, 255, 0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: emailError ? "#f44336" : "#00E5FF",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: emailError ? "#f44336" : "#00E5FF",
                          boxShadow: emailError ? "0 0 10px rgba(244, 67, 54, 0.3)" : "0 0 10px rgba(0, 229, 255, 0.3)",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "#f44336",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        "&::placeholder": {
                          color: "#707070",
                          opacity: 1,
                        },
                      },
                      "& .MuiFormHelperText-root": {
                        fontFamily: "Droid Sans, sans-serif",
                        color: "#f44336",
                        fontSize: "0.8rem",
                        marginTop: "4px",
                        textAlign: isRTL ? "right" : "left",
                      },
                    }}
                  />
                </motion.div>

                {subscriptionStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert 
                      severity="success"
                      sx={{
                        backgroundColor: "rgba(76, 175, 80, 0.1)",
                        color: "#4caf50",
                        border: "1px solid rgba(76, 175, 80, 0.3)",
                        borderRadius: "8px",
                        "& .MuiAlert-icon": {
                          color: "#4caf50",
                        },
                        "& .MuiAlert-message": {
                          fontFamily: "Droid Sans, sans-serif",
                          fontSize: "0.85rem",
                        }
                      }}
                    >
                      {isRTL ? "تم الاشتراك بنجاح!" : "Successfully subscribed!"}
                    </Alert>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      fontFamily: "Droid Sans, sans-serif",
                      background: "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
                      color: "#0a0a0a",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "8px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      padding: "10px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: isRTL ? "8px" : "8px",
                      flexDirection: isRTL ? "row-reverse" : "row",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        transition: "left 0.5s ease",
                      },
                      "&:hover": {
                        background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                        boxShadow: "0 8px 20px rgba(0, 229, 255, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      "&:hover::before": {
                        left: "100%",
                      },
                    }}
                  >
                    <span>{t("footer.subscribe")}</span>
                    <Send size={16} />
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </motion.div>
        </Box>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              borderTop: "1px solid rgba(0, 229, 255, 0.2)",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: "15px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#A0A0A0",
                textAlign: isRTL ? "right" : "left",
              }}
            >
              © {currentYear} {COMPANY_INFO.name}. {t("footer.rightsReserved")}.
            </Typography>
            
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              <MapPin size={16} color="#00E5FF" />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Droid Sans, sans-serif",
                  color: "#00E5FF",
                  fontWeight: 600,
                }}
              >
                {getLocation(true)}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
