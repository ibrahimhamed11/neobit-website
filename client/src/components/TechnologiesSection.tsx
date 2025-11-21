import { Box, Typography, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { technologies } from "../data/technologies";

export default function TechnologiesSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "40px 0", md: "60px 0" },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background effects */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(50px, -30px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: { xs: "0 20px", md: "0 40px" } }}>
        {/* Header */}
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
              marginBottom: "10px",
              background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 50%, #00E5FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontFamily: "Droid Sans, sans-serif",
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            {t("technologies.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#B0B0B0",
              maxWidth: "600px",
              margin: "0 auto",
              marginBottom: "40px",
              fontSize: "0.95rem",
              fontFamily: "Droid Sans, sans-serif",
              lineHeight: 1.6,
            }}
          >
            {t("technologies.description")}
          </Typography>
        </motion.div>

        {/* Creative Compact Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter((tech) => tech.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.06,
                }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    background: "linear-gradient(145deg, rgba(30, 30, 30, 0.6) 0%, rgba(20, 20, 40, 0.6) 100%)",
                    borderRadius: "12px",
                    padding: "16px",
                    border: "1px solid rgba(0, 229, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, #00E5FF 0%, #69FFFF 50%, #00E5FF 100%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      borderColor: "rgba(0, 229, 255, 0.4)",
                      boxShadow: "0 8px 24px rgba(0, 229, 255, 0.2)",
                      transform: "translateY(-4px)",
                      "&::before": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Category Header with Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      marginBottom: "12px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid rgba(0, 229, 255, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(105, 255, 255, 0.1) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "3px",
                          background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        color: "#00E5FF",
                        fontFamily: "Droid Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        lineHeight: 1,
                      }}
                    >
                      {category}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#666",
                        fontFamily: "Droid Sans, sans-serif",
                        marginLeft: "auto",
                      }}
                    >
                      {categoryTechs.length}
                    </Typography>
                  </Box>

                  {/* Technologies Mini Cards Grid */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "repeat(auto-fill, minmax(65px, 1fr))",
                        sm: "repeat(auto-fill, minmax(70px, 1fr))",
                      },
                      gap: 1,
                    }}
                  >
                    {categoryTechs.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.06 + index * 0.02,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.08,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Tooltip
                          title={tech.description || tech.name}
                          arrow
                          placement="top"
                          componentsProps={{
                            tooltip: {
                              sx: {
                                backgroundColor: "rgba(0, 229, 255, 0.95)",
                                color: "#0a0a0a",
                                fontSize: "0.75rem",
                                fontFamily: "Droid Sans, sans-serif",
                                fontWeight: 600,
                                padding: "6px 10px",
                                borderRadius: "6px",
                                boxShadow: "0 4px 16px rgba(0, 229, 255, 0.3)",
                              },
                            },
                            arrow: {
                              sx: {
                                color: "rgba(0, 229, 255, 0.95)",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 0.5,
                              padding: "10px 6px",
                              background: `linear-gradient(135deg, ${tech.color}08 0%, rgba(20, 20, 30, 0.5) 100%)`,
                              borderRadius: "8px",
                              border: `1px solid ${tech.color}20`,
                              backdropFilter: "blur(5px)",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                              aspectRatio: "1",
                              minHeight: { xs: "65px", sm: "70px" },
                              "&:hover": {
                                background: `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`,
                                borderColor: `${tech.color}60`,
                                boxShadow: `0 4px 16px ${tech.color}30`,
                                "& img, & > div > img": {
                                  transform: "scale(1.15)",
                                },
                              },
                            }}
                          >
                            {/* Technology Logo */}
                            <Box
                              sx={{
                                width: { xs: 20, sm: 24 },
                                height: { xs: 20, sm: 24 },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                              }}
                            >
                              <Box
                                component="img"
                                src={tech.logo}
                                alt={tech.name}
                                loading="lazy"
                                onError={(e: any) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${tech.color}30; border-radius: 4px; font-size: 10px; font-weight: 700; color: ${tech.color};">${tech.name.substring(0, 2).toUpperCase()}</div>`;
                                  }
                                }}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  transition: "transform 0.3s ease",
                                  filter: "drop-shadow(0 2px 6px rgba(0, 229, 255, 0.2))",
                                }}
                              />
                            </Box>
                            {/* Technology Name */}
                            <Typography
                              sx={{
                                fontSize: "0.65rem",
                                color: "#E0E0E0",
                                fontWeight: 600,
                                fontFamily: "Droid Sans, sans-serif",
                                textAlign: "center",
                                lineHeight: 1.1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                width: "100%",
                              }}
                            >
                              {tech.name}
                            </Typography>
                          </Box>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              marginTop: "30px",
              padding: { xs: "20px", md: "24px" },
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(0, 229, 255, 0.12) 100%)",
              borderRadius: "16px",
              border: "1px solid rgba(0, 229, 255, 0.25)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                fontFamily: "Droid Sans, sans-serif",
              }}
            >
              {t("technologies.alwaysLearning") || "Always Learning, Always Growing"}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "#B0B0B0",
                fontFamily: "Droid Sans, sans-serif",
                lineHeight: 1.5,
              }}
            >
              {t("technologies.learningDescription") || "We continuously expand our tech stack to deliver cutting-edge solutions"}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
