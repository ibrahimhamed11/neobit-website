import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { headerContainerStyles, badgeStyles, titleStyles, descriptionStyles } from "./styles";

export default function SectionHeader() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50, rotateY: isRTL ? 15 : -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Box
        sx={{
          ...headerContainerStyles,
          textAlign: { xs: "center", md: isRTL ? "right" : "left" },
        }}
      >
        {/* Badge with pulse effect */}
        <motion.div variants={itemVariants}>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Typography
              component={motion.span}
              variant="overline"
              sx={badgeStyles}
              whileHover={{
                scale: 1.1,
                letterSpacing: "4px",
                transition: { duration: 0.3 },
              }}
            >
              {t("tradingExperts.badge")}
            </Typography>
          </motion.div>
        </motion.div>

        {/* Title with 3D effect and gradient animation */}
        <motion.div variants={titleVariants}>
          <Typography
            component={motion.h2}
            variant="h2"
            sx={titleStyles}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
              transition: { duration: 0.3 },
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {t("tradingExperts.title")}
          </Typography>
        </motion.div>

        {/* Description with fade-in and slide */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            x: isRTL ? -5 : 5,
            transition: { duration: 0.3 },
          }}
        >
          <Typography variant="body1" sx={descriptionStyles}>
            {t("tradingExperts.description")}
          </Typography>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #00E5FF, #69FFFF)",
            marginTop: "20px",
            borderRadius: "2px",
            marginLeft: isRTL ? "auto" : "0",
            marginRight: isRTL ? "0" : "auto",
          }}
        />
      </Box>
    </motion.div>
  );
}
