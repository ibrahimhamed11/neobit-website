import { Box, Typography } from "@mui/material";
import { ChatBubble as ChatBubbleIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as styles from "./styles";

export default function SectionHeader() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Box sx={styles.containerSx}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={styles.badgeSx}>
            <ChatBubbleIcon sx={{ fontSize: 18, color: "#00E5FF" }} />
            <Typography sx={styles.badgeTextSx}>
              {t("contact.badge") || "Get in Touch"}
            </Typography>
          </Box>
        </motion.div>

        <Typography variant="h2" sx={styles.titleSx}>
          {t("contact.title")}
        </Typography>

        <Typography variant="body1" sx={styles.descriptionSx}>
          {t("contact.description")}
        </Typography>
      </Box>
    </motion.div>
  );
}
