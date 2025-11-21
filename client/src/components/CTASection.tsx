import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { 
  FlashOn as FlashOnIcon, 
  Lock as LockIcon, 
  CheckCircle as CheckCircleIcon,
  Stars as StarsIcon 
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: { xs: "80px 20px", sm: "100px 20px", md: "120px 20px" },
        background: "linear-gradient(180deg, #1E1E1E 0%, #0a0a0a 50%, #1a1a2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float-cta 8s ease-in-out infinite",
          "@keyframes float-cta": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "33%": { transform: "translate(30px, -30px) scale(1.1)" },
            "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float-cta-reverse 10s ease-in-out infinite",
          "@keyframes float-cta-reverse": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "50%": { transform: "translate(-40px, -40px) scale(1.15)" },
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: "linear-gradient(145deg, rgba(0, 229, 255, 0.08) 0%, rgba(0, 229, 255, 0.15) 100%)",
              borderRadius: "30px",
              padding: { xs: "50px 30px", sm: "70px 50px" },
              border: "3px solid rgba(0, 229, 255, 0.3)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
              boxShadow: "0 30px 60px rgba(0, 229, 255, 0.2)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
                animation: "rotate-gradient 20s linear infinite",
                "@keyframes rotate-gradient": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              },
            }}
          >
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            >
              <Sparkles size={40} color="#00E5FF" opacity={0.5} />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
              }}
            >
              <Zap size={35} color="#69FFFF" opacity={0.5} />
            </motion.div>

            <Box sx={{ position: "relative", zIndex: 1 }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "8px 20px",
                    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(105, 255, 255, 0.2) 100%)",
                    borderRadius: "20px",
                    border: "1px solid rgba(0, 229, 255, 0.5)",
                    marginBottom: "24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#00F0FF",
                      fontFamily: "Droid Sans, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      justifyContent: "center",
                    }}
                  >
                    <StarsIcon sx={{ fontSize: 16 }} /> {t("cta.badge")}
                  </Typography>
                </Box>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #00F5FF 0%, #7DFFFF 50%, #00E5FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Droid Sans, sans-serif",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                    textShadow: "0 0 40px rgba(0, 245, 255, 0.3)",
                  }}
                >
                  {t("cta.title")}
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.15rem" },
                    color: "#D5D5D5",
                    lineHeight: 1.8,
                    fontFamily: "Droid Sans, sans-serif",
                    maxWidth: "600px",
                    margin: "0 auto 40px",
                  }}
                >
                  {t("cta.description")}
                </Typography>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      href="#contact"
                      sx={{
                        background: "linear-gradient(135deg, #00F5FF 0%, #00B8D4 100%)",
                        color: "#0a0a0a",
                        padding: { xs: "14px 32px", sm: "16px 40px" },
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        fontWeight: 700,
                        borderRadius: "30px",
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontFamily: "Droid Sans, sans-serif",
                        boxShadow: "0 8px 30px rgba(0, 245, 255, 0.4)",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #7DFFFF 0%, #00F5FF 100%)",
                          boxShadow: "0 12px 40px rgba(0, 245, 255, 0.6)",
                        },
                      }}
                    >
                      {t("cta.primaryButton")}
                      <ArrowRight size={20} />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      href="#services"
                      sx={{
                        color: "#00F5FF",
                        borderColor: "rgba(0, 245, 255, 0.6)",
                        borderWidth: "2px",
                        padding: { xs: "14px 32px", sm: "16px 40px" },
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        fontWeight: 700,
                        borderRadius: "30px",
                        textTransform: "none",
                        fontFamily: "Droid Sans, sans-serif",
                        background: "rgba(0, 245, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 245, 255, 0.15)",
                          borderColor: "#00F5FF",
                          borderWidth: "2px",
                        },
                      }}
                    >
                      {t("cta.secondaryButton")}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#A0A0A0",
                      fontFamily: "Droid Sans, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FlashOnIcon sx={{ fontSize: 20, color: "#FFD700" }} /> {t("cta.quickResponse")}
                  </Typography>
                  <Box
                    sx={{
                      width: "2px",
                      height: "20px",
                      background: "rgba(0, 229, 255, 0.3)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#A0A0A0",
                      fontFamily: "Droid Sans, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <LockIcon sx={{ fontSize: 18, color: "#4CAF50" }} /> {t("cta.securePayment")}
                  </Typography>
                  <Box
                    sx={{
                      width: "2px",
                      height: "20px",
                      background: "rgba(0, 229, 255, 0.3)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#A0A0A0",
                      fontFamily: "Droid Sans, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18, color: "#00E5FF" }} /> {t("cta.noCommitment")}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
