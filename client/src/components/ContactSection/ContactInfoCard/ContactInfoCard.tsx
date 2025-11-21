import { Card, CardContent, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import * as styles from "./styles";

export interface ContactInfoCardProps {
  icon: React.ReactElement;
  title: string;
  value: string;
  description: string;
  color: string;
  index: number;
  link?: string;
}

export default function ContactInfoCard({
  icon,
  title,
  value,
  description,
  color,
  index,
  link,
}: ContactInfoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardWrapper = link ? motion.a : motion.div;
  const cardProps = link
    ? {
        href: link,
        target: link.startsWith("mailto:") || link.startsWith("tel:") ? undefined : "_blank",
        rel: link.startsWith("mailto:") || link.startsWith("tel:") ? undefined : "noopener noreferrer",
        style: { textDecoration: "none", display: "block" },
      }
    : {};

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...cardProps}
    >
      <Card sx={styles.getCardSx(isHovered, color)}>
        <CardContent sx={styles.cardContentSx}>
          <Box sx={styles.getIconContainerSx(isHovered, color)}>
            <Box sx={styles.iconSx(color)}>{icon}</Box>
          </Box>

          <Typography variant="h6" sx={styles.titleSx}>
            {title}
          </Typography>

          <Typography variant="body1" sx={styles.valueSx}>
            {value}
          </Typography>

          <Typography variant="body2" sx={styles.descriptionSx}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
