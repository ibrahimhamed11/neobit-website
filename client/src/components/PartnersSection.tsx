import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PartnersSection() {
  const { t } = useTranslation();

  const partners = [
    { name: "MetaTrader", logo: "MT" },
    { name: "Binance", logo: "BN" },
    { name: "AWS", logo: "AWS" },
    { name: "Ethereum", logo: "ETH" },
    { name: "React", logo: "RC" },
    { name: "Node.js", logo: "NJ" },
    { name: "Docker", logo: "DK" },
    { name: "MongoDB", logo: "MDB" },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "60px 20px", sm: "80px 20px", md: "100px 20px" },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1E1E1E 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "70%",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "16px",
              background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontFamily: "Droid Sans, sans-serif",
              fontWeight: 800,
            }}
          >
            {t("partners.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#B0B0B0",
              maxWidth: "700px",
              margin: "0 auto",
              marginBottom: "60px",
              fontSize: "1rem",
              fontFamily: "Droid Sans, sans-serif",
              lineHeight: 1.8,
            }}
          >
            {t("partners.description")}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Box
                sx={{
                  height: "120px",
                  background: "linear-gradient(145deg, rgba(30, 30, 30, 0.6) 0%, rgba(42, 42, 42, 0.6) 100%)",
                  borderRadius: "16px",
                  border: "2px solid rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    borderColor: "rgba(0, 229, 255, 0.5)",
                    boxShadow: "0 10px 30px rgba(0, 229, 255, 0.2)",
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Droid Sans, sans-serif",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {partner.logo}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
