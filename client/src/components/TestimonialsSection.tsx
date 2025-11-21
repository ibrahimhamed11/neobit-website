import { Box, Container, Typography, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Star, FormatQuote } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

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
          top: "30%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
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
            {t("testimonials.title")}
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
            {t("testimonials.description")}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(145deg, rgba(30, 30, 30, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%)",
                  border: "2px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  },
                  "&:hover": {
                    borderColor: "rgba(0, 229, 255, 0.8)",
                    boxShadow: "0 20px 40px rgba(0, 229, 255, 0.3)",
                    "&::before": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 }, position: "relative", zIndex: 1 }}>
                  {/* Quote icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: isRTL ? "auto" : -10,
                      left: isRTL ? -10 : "auto",
                      opacity: 0.1,
                    }}
                  >
                    <FormatQuote sx={{ fontSize: 80, color: "#00E5FF" }} />
                  </Box>

                  {/* Rating */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      marginBottom: "20px",
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + i * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Star
                          sx={{
                            fontSize: 20,
                            color: "#FFD700",
                            fill: "#FFD700",
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>

                  {/* Testimonial content */}
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#D5D5D5",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                      fontFamily: "Droid Sans, sans-serif",
                      fontStyle: "italic",
                    }}
                  >
                    "{t(testimonial.contentKey)}"
                  </Typography>

                  {/* Client info */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      paddingTop: "20px",
                      borderTop: "1px solid rgba(0, 229, 255, 0.2)",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        background: "linear-gradient(135deg, #00E5FF 0%, #00B8D4 100%)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        fontFamily: "Droid Sans, sans-serif",
                        boxShadow: "0 4px 15px rgba(0, 229, 255, 0.4)",
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#00E5FF",
                          fontFamily: "Droid Sans, sans-serif",
                        }}
                      >
                        {t(testimonial.nameKey)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#B0B0B0",
                          fontFamily: "Droid Sans, sans-serif",
                        }}
                      >
                        {t(testimonial.roleKey)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "#808080",
                          fontFamily: "Droid Sans, sans-serif",
                          marginTop: "2px",
                        }}
                      >
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              marginTop: "60px",
              padding: "40px",
              background: "linear-gradient(145deg, rgba(0, 229, 255, 0.05) 0%, rgba(0, 229, 255, 0.1) 100%)",
              borderRadius: "20px",
              border: "2px solid rgba(0, 229, 255, 0.3)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "12px",
                fontFamily: "Droid Sans, sans-serif",
              }}
            >
              {t("testimonials.joinTitle")}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#B0B0B0",
                fontFamily: "Droid Sans, sans-serif",
                lineHeight: 1.8,
              }}
            >
              {t("testimonials.joinDescription")}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
