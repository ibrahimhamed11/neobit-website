import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import ChartShowcase from "./ChartShowcase";
import FeatureCard from "./FeatureCard";
import ImportanceCard from "./ImportanceCard";
import CallToAction from "./CallToAction";
import { features, importancePoints } from "./constants";
import {
  sectionContainerStyles,
  backgroundAnimationStyles,
  containerStyles,
  headerShowcaseGridStyles,
  featuresGridStyles,
  importanceSectionStyles,
  decorativeBackgroundStyles,
  importanceTitleStyles,
  importanceGridStyles,
} from "./styles";

export default function TradingExpertsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Box sx={sectionContainerStyles}>
      {/* Background Animation */}
      <Box sx={backgroundAnimationStyles} />

      <Container maxWidth="lg" sx={containerStyles}>
        {/* Header and SVG Showcase in Same Row */}
        <Box
          sx={{
            ...headerShowcaseGridStyles,
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          {/* Header Section */}
          <SectionHeader />

          {/* SVG Showcase Section */}
          <ChartShowcase />
        </Box>

        {/* Features Grid */}
        <Box sx={featuresGridStyles}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              titleKey={feature.titleKey}
              descriptionKey={feature.descriptionKey}
              gradient={feature.gradient}
              index={index}
            />
          ))}
        </Box>

        {/* Importance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={importanceSectionStyles}>
            {/* Decorative Background */}
            <Box sx={decorativeBackgroundStyles} />

            <Typography variant="h3" sx={importanceTitleStyles}>
              {t("tradingExperts.importance.title")}
            </Typography>

            <Box sx={importanceGridStyles}>
              {importancePoints.map((point, index) => (
                <ImportanceCard
                  key={index}
                  titleKey={point.titleKey}
                  descriptionKey={point.descriptionKey}
                  index={index}
                />
              ))}
            </Box>

            {/* Call to Action */}
            <CallToAction />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
