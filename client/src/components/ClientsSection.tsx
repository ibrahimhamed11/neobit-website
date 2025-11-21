import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Client {
  name: string;
  logo?: string;
  abbreviation: string;
  color: string;
  description: string;
}

const clients: Client[] = [
  {
    name: "Market Whales",
    abbreviation: "MW",
    color: "#00E5FF",
    description: "Advanced Trading Platform",
    logo: "/assets/clients/market-whales.png",
  },
  {
    name: "Lezz",
    abbreviation: "LZ",
    color: "#69FFFF",
    description: "Digital Solutions",
    logo: "/assets/clients/lezz.png",
  },
  {
    name: "Legend FX",
    abbreviation: "LFX",
    color: "#0091EA",
    description: "Forex Trading Excellence",
    logo: "/assets/clients/legend-fx.png",
  },
  {
    name: "Omda FX",
    abbreviation: "OFX",
    color: "#00BCD4",
    description: "Professional Trading Services",
    logo: "/assets/clients/omda-fx.png",
  },
  {
    name: "Traders Gateway",
    abbreviation: "TG",
    color: "#26C6DA",
    description: "Gateway to Trading Success",
    logo: "/assets/clients/traders-gateway.png",
  },
];

export default function ClientsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "50px 0", md: "70px 0" },
        background: "linear-gradient(180deg, #0a0a0a 0%, #16213e 50%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background effects */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "pulse 6s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
            "50%": { transform: "scale(1.2)", opacity: 0.8 },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "pulse 8s ease-in-out infinite reverse",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: { xs: "0 20px", md: "0 40px" } }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "10px",
              background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 50%, #00E5FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontFamily: "Droid Sans, sans-serif",
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            {isRTL ? "موثوق به من قادة الصناعة" : "Trusted by Industry Leaders"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#B0B0B0",
              maxWidth: "650px",
              margin: "0 auto",
              marginBottom: "50px",
              fontSize: "0.95rem",
              fontFamily: "Droid Sans, sans-serif",
              lineHeight: 1.6,
            }}
          >
            {isRTL 
              ? "نتعاون مع أفضل منصات وأطر العمل التقنية لتقديم حلول عالمية المستوى"
              : "Partnering with leading platforms to deliver world-class solutions"}
          </Typography>
        </motion.div>

        {/* Clients Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: 3,
            marginBottom: "40px",
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  background: "linear-gradient(145deg, rgba(30, 30, 30, 0.7) 0%, rgba(20, 20, 40, 0.7) 100%)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: `1px solid ${client.color}30`,
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  minHeight: "180px",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${client.color} 0%, transparent 100%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  },
                  "&:hover": {
                    borderColor: client.color,
                    boxShadow: `0 12px 40px ${client.color}40`,
                    background: `linear-gradient(145deg, ${client.color}10 0%, rgba(20, 20, 40, 0.8) 100%)`,
                    "&::before": {
                      opacity: 1,
                    },
                    "& .client-logo": {
                      transform: "scale(1.1) rotate(5deg)",
                    },
                    "& .client-abbr": {
                      transform: "scale(1.15)",
                    },
                  },
                }}
              >
                {/* Client Logo or Abbreviation */}
                <Box
                  className="client-abbr"
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${client.color}20 0%, ${client.color}05 100%)`,
                    border: `2px solid ${client.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.4s ease",
                    boxShadow: `0 4px 20px ${client.color}30`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      background: `linear-gradient(135deg, ${client.color} 0%, #69FFFF 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "Droid Sans, sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {client.abbreviation}
                  </Typography>
                </Box>

                {/* Client Name */}
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Droid Sans, sans-serif",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {client.name}
                </Typography>

                {/* Client Description */}
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#999",
                    fontFamily: "Droid Sans, sans-serif",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {client.description}
                </Typography>

                {/* Decorative corner accent */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "40px",
                    height: "40px",
                    background: `linear-gradient(135deg, transparent 0%, ${client.color}10 100%)`,
                    borderTopLeftRadius: "100%",
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              padding: "24px",
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(0, 229, 255, 0.1) 100%)",
              borderRadius: "16px",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                fontFamily: "Droid Sans, sans-serif",
              }}
            >
              {isRTL ? "✨ شريك موثوق لنجاحك" : "✨ Your Trusted Partner for Success"}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "#B0B0B0",
                fontFamily: "Droid Sans, sans-serif",
                lineHeight: 1.5,
              }}
            >
              {isRTL 
                ? "نساعد الشركات على التحول الرقمي وتحقيق أهدافها من خلال التكنولوجيا المتقدمة"
                : "Helping businesses transform digitally and achieve their goals through advanced technology"}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
