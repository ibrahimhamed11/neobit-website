import { Box, Fab, Tooltip } from "@mui/material";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getWhatsAppLink } from "@/data/contactInfo";

export default function WhatsAppButton() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // Get WhatsApp URL from centralized contact info
  const message = t("whatsapp.message") || undefined;
  const whatsappUrl = getWhatsAppLink(message);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: isRTL ? "30px" : "auto",
        left: isRTL ? "auto" : "30px",
        zIndex: 9999,
      }}
    >
      <Tooltip 
        title={t("whatsapp.tooltip") || "Chat with us on WhatsApp"}
        placement={isRTL ? "left" : "right"}
        arrow
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(37, 211, 102, 0.4)",
              "0 0 0 20px rgba(37, 211, 102, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            borderRadius: "50%",
          }}
        >
          <Fab
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 60,
              height: 60,
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "#FFFFFF",
              boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
                boxShadow: "0 12px 35px rgba(37, 211, 102, 0.6)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::before": {
                opacity: 1,
              },
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 32 }} />
            </motion.div>
          </Fab>
        </motion.div>
      </Tooltip>
    </motion.div>
  );
}
