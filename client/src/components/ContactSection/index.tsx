import { Box, Container, Typography } from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { COMPANY_INFO, getContactEmail, getLocation } from "@/config/constants";
import { getPhoneDisplay, getAddress, getEmailLink, getPhoneLink } from "@/data/contactInfo";
import SectionHeader from "./SectionHeader";
import ContactInfoCard from "./ContactInfoCard";
import ProcessStepper from "./ProcessStepper";
import ContactForm from "./ContactForm";
import * as styles from "./styles";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      title: t("contact.email"),
      value: getContactEmail(),
      description: isArabic ? "راسلنا في أي وقت" : "Send us an email anytime",
      color: "#00E5FF",
      link: getEmailLink(),
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24 }} />,
      title: t("contact.phone"),
      value: getPhoneDisplay(isArabic),
      description: isArabic ? "دعم على مدار الساعة" : `${COMPANY_INFO.availability.support} Support`,
      color: "#69FFFF",
      link: getPhoneLink(),
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
      title: t("contact.location"),
      value: getAddress(isArabic),
      description: isArabic ? "دعم عالمي متاح" : "Worldwide support available",
      color: "#00E5FF",
    },
  ];

  return (
    <Box id="contact" sx={styles.containerSx}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <SectionHeader />

        {/* Contact Info Cards */}
        <Box sx={styles.contactCardsGridSx}>
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              value={info.value}
              description={info.description}
              color={info.color}
              index={index}
              link={info.link}
            />
          ))}
        </Box>

        {/* Software Development Process Steps */}
        <ProcessStepper />

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={styles.additionalInfoSx}>
            <ScheduleIcon sx={{ fontSize: 18, color: "#00E5FF" }} />
            <Typography variant="body2" sx={styles.responseTimeSx}>
              {t("contact.responseTime") || "We typically respond within 24 hours"}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
