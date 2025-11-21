import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Rocket, Zap, TrendingUp, ArrowRight } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Convert numbers using Intl API for proper localization
  const formatNumber = (num: number) => {
    const paddedNum = String(num).padStart(2, '0');
    
    if (i18n.language?.startsWith('ar')) {
      // Use Intl.NumberFormat for Arabic-Indic numerals
      return paddedNum.split('').map(digit => 
        new Intl.NumberFormat('ar-EG', { useGrouping: false }).format(parseInt(digit))
      ).join('');
    }
    
    // Use Intl.NumberFormat for English numerals
    return new Intl.NumberFormat('en-US', { 
      minimumIntegerDigits: 2,
      useGrouping: false 
    }).format(num);
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-01-01T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({
    value,
    label,
    delay,
  }: {
    value: number;
    label: string;
    delay: number;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(145deg, rgba(0, 229, 255, 0.1), rgba(0, 229, 255, 0.05))",
              borderRadius: { xs: "16px", sm: "20px" },
              padding: { xs: "16px 20px", sm: "24px 28px", md: "28px 32px" },
              minWidth: { xs: "70px", sm: "100px", md: "120px" },
              textAlign: "center",
              border: "2px solid rgba(0, 229, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 229, 255, 0.2)",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.2), transparent)",
                animation: "shimmer 3s infinite",
                "@keyframes shimmer": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#00E5FF",
                fontWeight: 900,
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                fontFamily: "Droid Sans, sans-serif",
                lineHeight: 1,
                textShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
                letterSpacing: "-0.02em",
              }}
            >
              {formatNumber(value)}
            </Typography>
          </Box>
          
          <Typography
            variant="body1"
            sx={{
              color: "#E0E0E0",
              fontWeight: 600,
              fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontFamily: "Droid Sans, sans-serif",
            }}
          >
            {label}
          </Typography>
        </Box>
      </motion.div>
    );
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        padding: { xs: "60px 20px", sm: "80px 20px", md: "100px 20px" },
        position: "relative",
        margin: 0,
        overflow: "hidden",
        direction: isRTL ? "rtl" : "ltr",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "20%",
          [isRTL ? "left" : "right"]: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "20%",
          [isRTL ? "right" : "left"]: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
          animation: "float 6s ease-in-out infinite reverse",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: { xs: "40px", md: "60px" } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box 
              sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 1.5,
                background: "rgba(0, 229, 255, 0.1)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                borderRadius: "50px",
                padding: "8px 20px",
                marginBottom: "20px",
              }}
            >
              <Rocket size={20} color="#00E5FF" />
              <Typography
                sx={{
                  color: "#00E5FF",
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {isRTL ? "إطلاق قريب" : "Launching Soon"}
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                fontFamily: "Droid Sans, sans-serif",
                fontWeight: 800,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #FFFFFF 0%, #00E5FF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("countdown.title")}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              sx={{
                color: "#A0A0A0",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontFamily: "Droid Sans, sans-serif",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              {isRTL 
                ? "استعد لتجربة الجيل القادم من حلول التداول والبلوكشين. شيء كبير قادم!"
                : "Get ready for the next generation of trading and blockchain solutions. Something big is coming!"
              }
            </Typography>
          </motion.div>
        </Box>

        {/* Countdown Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "repeat(2, 1fr)", 
              sm: "repeat(4, 1fr)" 
            },
            gap: { xs: "20px", sm: "28px", md: "40px" },
            maxWidth: "900px",
            margin: "0 auto",
            marginBottom: { xs: "40px", md: "60px" },
          }}
        >
          <TimeUnit value={timeLeft.days} label={t("countdown.days")} delay={0.3} />
          <TimeUnit value={timeLeft.hours} label={t("countdown.hours")} delay={0.4} />
          <TimeUnit value={timeLeft.minutes} label={t("countdown.minutes")} delay={0.5} />
          <TimeUnit value={timeLeft.seconds} label={t("countdown.seconds")} delay={0.6} />
        </Box>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              gap: 2, 
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              href="#contact"
              sx={{
                background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                color: "#0a0a0a",
                padding: { xs: "14px 32px", sm: "16px 40px" },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                fontFamily: "Droid Sans, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 8px 32px rgba(0, 229, 255, 0.4)",
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "320px", sm: "none" },
                "&:hover": {
                  background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                  boxShadow: "0 12px 40px rgba(0, 229, 255, 0.6)",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Zap size={20} />
              {isRTL ? "إشترك الآن" : "Get Early Access"}
              <ArrowRight size={20} />
            </Button>

            <Button
              variant="outlined"
              href="#about"
              sx={{
                color: "#00E5FF",
                borderColor: "rgba(0, 229, 255, 0.5)",
                borderWidth: "2px",
                padding: { xs: "14px 32px", sm: "16px 40px" },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                fontFamily: "Droid Sans, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "320px", sm: "none" },
                "&:hover": {
                  backgroundColor: "rgba(0, 229, 255, 0.1)",
                  borderColor: "#00E5FF",
                  borderWidth: "2px",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <TrendingUp size={20} />
              {isRTL ? "إكتشف المزيد" : "Learn More"}
            </Button>
          </Box>
        </motion.div>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
            marginTop: { xs: "60px", md: "80px" },
            maxWidth: "1000px",
            margin: { xs: "60px auto 0", md: "80px auto 0" },
          }}
        >
          {[
            {
              icon: <Rocket size={24} />,
              title: isRTL ? "حلول متقدمة" : "Advanced Solutions",
              desc: isRTL ? "تكنولوجيا متطورة للتداول" : "Cutting-edge trading technology"
            },
            {
              icon: <Zap size={24} />,
              title: isRTL ? "سريع وآمن" : "Fast & Secure",
              desc: isRTL ? "أداء عالي مع أمان كامل" : "High performance with full security"
            },
            {
              icon: <TrendingUp size={24} />,
              title: isRTL ? "نمو مستمر" : "Continuous Growth",
              desc: isRTL ? "نظام قابل للتوسع" : "Scalable ecosystem"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: { xs: "24px", sm: "28px" },
                  background: "rgba(0, 229, 255, 0.05)",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 229, 255, 0.1)",
                    border: "1px solid rgba(0, 229, 255, 0.4)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0, 229, 255, 0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 229, 255, 0.1))",
                    border: "2px solid rgba(0, 229, 255, 0.3)",
                    marginBottom: "16px",
                    color: "#00E5FF",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    fontFamily: "Droid Sans, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#A0A0A0",
                    fontSize: "0.95rem",
                    fontFamily: "Droid Sans, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
