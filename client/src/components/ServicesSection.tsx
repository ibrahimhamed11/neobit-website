import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { services } from "../data/services";

export default function ServicesSection() {
  const { t, i18n } = useTranslation();
  const description = t("services.description");
  const isRTL = i18n.language === 'ar';

  return (
    <Box
      sx={{
        padding: { xs: "60px 20px", sm: "80px 20px", md: "100px 20px" },
        background: "linear-gradient(180deg, #121212 0%, #0a0a0a 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Droid Sans, sans-serif",
              textAlign: "center",
              marginBottom: "20px",
              background:
                "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {t("services.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Droid Sans, sans-serif",
              textAlign: "center",
              color: "#A0A0A0",
              marginTop: "40px",
              marginBottom: "100px",
              maxWidth: "700px",
              margin: "40px auto 100px auto",
              fontSize: "1.1rem",
            }}
          >
            {description}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            marginBottom: "60px",
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(145deg, #1E1E1E 0%, #2A2A2A 100%)",
                  border: "2px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    zIndex: 0,
                  },
                  "&:hover": {
                    boxShadow: "0 25px 50px rgba(0, 229, 255, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)",
                    borderColor: "rgba(0, 229, 255, 0.8)",
                    transform: "translateY(-8px) scale(1.02)",
                    "&::before": {
                      opacity: 0.08,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    background: service.gradient,
                    padding: "35px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFFFFF",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40 }} />
                  </motion.div>
                </Box>
                <CardContent sx={{ padding: "30px", position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Droid Sans, sans-serif",
                      fontSize: "1.4rem",
                      marginBottom: "15px",
                      color: "#00E5FF",
                      fontWeight: 700,
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#69FFFF",
                      },
                    }}
                  >
                    {t(service.titleKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Droid Sans, sans-serif",
                      color: "#B0B0B0",
                      lineHeight: 1.8,
                      fontSize: "0.9rem",
                    }}
                  >
                    {t(service.descriptionKey)}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
          })}
        </Box>
      </Container>
    </Box>
  );
}
