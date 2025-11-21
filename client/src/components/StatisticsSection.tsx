import { Box, Container, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { statistics, Stat } from "../data/statistics";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}

export default function StatisticsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "60px 20px" },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "10px",
              background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" },
              fontFamily: "Droid Sans, sans-serif",
              fontWeight: 800,
            }}
          >
            {t("stats.title")}
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
            {t("stats.description")}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: { xs: "20px 12px", sm: "24px 16px" },
                  background: "rgba(30, 30, 30, 0.5)",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(0, 229, 255, 0.6)",
                    background: "rgba(0, 229, 255, 0.05)",
                  },
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      background: stat.gradient,
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    <IconComponent sx={{ fontSize: { xs: 24, sm: 28 } }} />
                  </Box>
                </motion.div>

                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem" },
                    fontWeight: 800,
                    color: "#00E5FF",
                    fontFamily: "Droid Sans, sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    color: "#B0B0B0",
                    fontFamily: "Droid Sans, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {t(stat.labelKey)}
                </Typography>
              </Box>
            </motion.div>
          );
          })}
        </Box>
      </Container>
    </Box>
  );
}
