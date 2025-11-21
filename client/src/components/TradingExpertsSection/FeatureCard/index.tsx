import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SvgIconComponent } from "@mui/icons-material";
import {
  cardStyles,
  iconBoxStyles,
  iconStyles,
  cardContentStyles,
  titleStyles,
  descriptionStyles,
  particleStyles,
  glowingLineStyles,
} from "./styles";

interface FeatureCardProps {
  icon: SvgIconComponent;
  titleKey: string;
  descriptionKey: string;
  gradient: string;
  index: number;
}

export default function FeatureCard({
  icon: IconComponent,
  titleKey,
  descriptionKey,
  gradient,
  index,
}: FeatureCardProps) {
  const { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          scale: 1.08,
          y: -20,
          rotateY: 5,
          transition: { 
            duration: 0.4, 
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
          },
        }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Card
          component={motion.div}
          sx={cardStyles}
          animate={{
            boxShadow: [
              "0 10px 30px rgba(0, 229, 255, 0.1)",
              "0 15px 40px rgba(0, 229, 255, 0.2)",
              "0 10px 30px rgba(0, 229, 255, 0.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Box sx={iconBoxStyles(gradient)}>
            {/* Floating icon with complex animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
              whileHover={{
                rotate: [0, -15, 15, -10, 10, 0],
                scale: 1.4,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <IconComponent
                component={motion.svg}
                sx={iconStyles}
                animate={{
                  filter: [
                    "drop-shadow(0 0 5px rgba(255,255,255,0.5))",
                    "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                    "drop-shadow(0 0 5px rgba(255,255,255,0.5))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Particle burst effect on hover */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={particleStyles}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos((i / 8) * Math.PI * 2) * 50,
                  y: Math.sin((i / 8) * Math.PI * 2) * 50,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                }}
              />
            ))}
          </Box>

          <CardContent sx={cardContentStyles}>
            {/* Title with slide-in effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                component={motion.h4}
                variant="h4"
                sx={titleStyles}
                whileHover={{
                  x: 10,
                  color: "#69FFFF",
                  transition: { duration: 0.3 },
                }}
              >
                {t(titleKey)}
              </Typography>
            </motion.div>

            {/* Description with character-by-character reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="body2" sx={descriptionStyles}>
                {t(descriptionKey)}
              </Typography>
            </motion.div>
          </CardContent>

          {/* Glowing bottom line */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
            }}
            style={glowingLineStyles}
            animate={{
              backgroundPosition: ["0% 0%", "200% 0%"],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        </Card>
      </motion.div>
    </Box>
  );
}
