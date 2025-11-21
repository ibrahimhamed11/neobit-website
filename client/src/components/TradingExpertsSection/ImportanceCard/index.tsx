import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  cardContainerStyles,
  numberBoxStyles,
  titleStyles,
  descriptionStyles,
} from "./styles";

interface ImportanceCardProps {
  titleKey: string;
  descriptionKey: string;
  index: number;
}

export default function ImportanceCard({
  titleKey,
  descriptionKey,
  index,
}: ImportanceCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
      >
        <Box sx={cardContainerStyles}>
          <Box sx={numberBoxStyles(isRTL)}>{index + 1}</Box>
          <Box>
            <Typography variant="h5" sx={titleStyles}>
              {t(titleKey)}
            </Typography>
            <Typography variant="body2" sx={descriptionStyles}>
              {t(descriptionKey)}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
