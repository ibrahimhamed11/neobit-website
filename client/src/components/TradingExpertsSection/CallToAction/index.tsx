import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ctaContainerStyles, titleStyles, descriptionStyles } from "./styles";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <Box sx={{ position: "relative" }}>
      {/* Background wave animation */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(105, 255, 255, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          borderRadius: "20px",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [
              Math.sin(i) * 30,
              Math.sin(i + Math.PI) * 30,
              Math.sin(i) * 30,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: `${(i / 12) * 100}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#00E5FF" : "#69FFFF",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#00E5FF" : "#69FFFF"}`,
            zIndex: 1,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        }}
        viewport={{ once: true }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Box
          component={motion.div}
          sx={{
            ...ctaContainerStyles,
            position: "relative",
            overflow: "visible",
            zIndex: 2,
          }}
          animate={{
            boxShadow: [
              "0 10px 40px rgba(0, 229, 255, 0.2), inset 0 0 30px rgba(0, 229, 255, 0.05)",
              "0 15px 60px rgba(0, 229, 255, 0.4), inset 0 0 50px rgba(0, 229, 255, 0.1)",
              "0 10px 40px rgba(0, 229, 255, 0.2), inset 0 0 30px rgba(0, 229, 255, 0.05)",
            ],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.03,
            y: -10,
            rotateY: 2,
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 300,
            },
          }}
        >
          {/* Pulsing border */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid #00E5FF",
              borderRadius: "20px",
              pointerEvents: "none",
            }}
          />

          {/* Animated corner glow */}
          {[
            { top: "-10px", left: "-10px" },
            { top: "-10px", right: "-10px" },
            { bottom: "-10px", right: "-10px" },
            { bottom: "-10px", left: "-10px" },
          ].map((pos, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.75,
              }}
              style={{
                position: "absolute",
                ...pos,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
                filter: "blur(5px)",
              }}
            />
          ))}

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <Typography
              component={motion.h5}
              variant="h5"
              sx={{
                ...titleStyles,
                background: "linear-gradient(90deg, #00E5FF, #69FFFF, #00E5FF, #69FFFF)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              {t("tradingExperts.cta.title")}
            </Typography>
          </motion.div>

          {/* Description with fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            viewport={{ once: true }}
          >
            <Typography
              component={motion.p}
              variant="body1"
              sx={descriptionStyles}
              whileHover={{
                x: 5,
                transition: { duration: 0.3 },
              }}
            >
              {t("tradingExperts.cta.description")}
            </Typography>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 1.2,
              delay: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              height: "3px",
              background: "linear-gradient(90deg, transparent, #00E5FF, #69FFFF, transparent)",
              borderRadius: "2px",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              boxShadow: [
                "0 0 10px rgba(0, 229, 255, 0.5)",
                "0 0 20px rgba(0, 229, 255, 1)",
                "0 0 10px rgba(0, 229, 255, 0.5)",
              ],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Spotlight effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.1,
              transition: { duration: 0.3 },
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "150%",
              height: "150%",
              background:
                "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
