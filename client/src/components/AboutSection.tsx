import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { 
  People as PeopleIcon, 
  TrackChanges as TrackChangesIcon, 
  FlashOn as FlashOnIcon,
  GpsFixed as GpsFixedIcon,
  Speed as SpeedIcon,
  Rocket as RocketIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface AboutItem {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  gradient: string;
  shadowColor: string;
}

const aboutItems: AboutItem[] = [
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    titleKey: "about.expertTeam.title",
    descriptionKey: "about.expertTeam.description",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00B8D4 100%)",
    shadowColor: "rgba(0, 229, 255, 0.4)",
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40 }} />,
    titleKey: "about.missionDriven.title",
    descriptionKey: "about.missionDriven.description",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #26C6DA 100%)",
    shadowColor: "rgba(0, 229, 255, 0.4)",
  },
  {
    icon: <FlashOnIcon sx={{ fontSize: 40 }} />,
    titleKey: "about.cuttingEdge.title",
    descriptionKey: "about.cuttingEdge.description",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
    shadowColor: "rgba(0, 229, 255, 0.4)",
  },
];

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <Box
      id="about"
      sx={{
        padding: { xs: "60px 16px", sm: "80px 20px", md: "100px 20px" },
        background: "linear-gradient(180deg, #1E1E1E 0%, #121212 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              marginBottom: "16px",
              background:
                "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontFamily: "Droid Sans, sans-serif",
            }}
          >
            {t("about.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#E0E0E0",
              maxWidth: "700px",
              margin: "0 auto",
              marginTop: "16px",
              marginBottom: "80px", // Increased margin for better spacing after description
              fontSize: "1rem",
              fontFamily: "Droid Sans, sans-serif",
              lineHeight: 1.8,
            }}
          >
            {t("about.description")}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            marginBottom: "40px",
          }}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(145deg, #1E1E1E 0%, #2A2A2A 100%)",
                  border: "2px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    zIndex: 0,
                  },
                  "&:hover": {
                    boxShadow: `0 20px 40px ${item.shadowColor}, 0 0 30px ${item.shadowColor}`,
                    borderColor: "rgba(0, 229, 255, 0.8)",
                    "&::before": {
                      opacity: 0.1,
                    },
                  },
                }}
              >
                <CardContent sx={{ padding: "32px 24px", position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                      padding: "20px",
                      background: item.gradient,
                      borderRadius: "50%",
                      color: "#FFFFFF",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "rotate(360deg)",
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -15, 15, -15, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.25rem",
                      marginBottom: "12px",
                      background: item.gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                      fontFamily: "Droid Sans, sans-serif",
                    }}
                  >
                    {t(item.titleKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#B0B0B0",
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                      fontFamily: "Droid Sans, sans-serif",
                    }}
                  >
                    {t(item.descriptionKey)}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* New feature section with Handcode SVG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              marginTop: "80px",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              background: "linear-gradient(145deg, rgba(30, 30, 30, 0.5) 0%, rgba(42, 42, 42, 0.5) 100%)",
              borderRadius: "24px",
              padding: { xs: "40px 24px", md: "60px 50px" },
              border: "2px solid rgba(0, 229, 255, 0.2)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, transparent 50%)",
                pointerEvents: "none",
              },
            }}
          >
            {/* Left side - Content */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 800,
                  marginBottom: "24px",
                  background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Droid Sans, sans-serif",
                  lineHeight: 1.3,
                }}
              >
                {t("about.crafted.title")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#E0E0E0",
                  marginBottom: "24px",
                  lineHeight: 1.8,
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t("about.crafted.description")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  marginTop: "30px",
                }}
              >
                {[
                  { 
                    icon: <GpsFixedIcon sx={{ fontSize: 28, color: "#00E5FF" }} />, 
                    titleKey: "about.crafted.precision.title", 
                    descKey: "about.crafted.precision.description" 
                  },
                  { 
                    icon: <SpeedIcon sx={{ fontSize: 28, color: "#00E5FF" }} />, 
                    titleKey: "about.crafted.speed.title", 
                    descKey: "about.crafted.speed.description" 
                  },
                  { 
                    icon: <RocketIcon sx={{ fontSize: 28, color: "#00E5FF" }} />, 
                    titleKey: "about.crafted.innovation.title", 
                    descKey: "about.crafted.innovation.description" 
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        padding: "16px",
                        background: "rgba(0, 229, 255, 0.05)",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 229, 255, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(0, 229, 255, 0.1)",
                          borderColor: "rgba(0, 229, 255, 0.3)",
                          transform: "translateX(10px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "40px",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#00E5FF",
                            marginBottom: "4px",
                            fontFamily: "Droid Sans, sans-serif",
                          }}
                        >
                          {t(item.titleKey)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            color: "#B0B0B0",
                            fontFamily: "Droid Sans, sans-serif",
                          }}
                        >
                          {t(item.descKey)}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* Right side - Data Extraction SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2,
                type: "spring", 
                stiffness: 80,
                damping: 15,
                mass: 1
              }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: 2, md: 4 },
                }}
              >
                {/* Outer rotating ring with trail effect */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "110%",
                    height: "110%",
                    border: "2px solid rgba(0, 229, 255, 0.2)",
                    borderRadius: "50%",
                    animation: "rotate-ring 20s linear infinite",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-6px",
                      left: "50%",
                      width: "12px",
                      height: "12px",
                      background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 0 20px rgba(0, 229, 255, 0.8), 0 0 40px rgba(0, 229, 255, 0.4)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-6px",
                      right: "50%",
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 0 15px rgba(105, 255, 255, 0.6)",
                    },
                    "@keyframes rotate-ring": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />

                {/* Scanning beam effect */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "2px",
                    height: "100%",
                    background: "linear-gradient(180deg, transparent 0%, rgba(0, 229, 255, 0.8) 50%, transparent 100%)",
                    transformOrigin: "center center",
                    animation: "scan-beam 8s linear infinite",
                    filter: "blur(1px)",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
                    "@keyframes scan-beam": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />

                {/* Multiple glowing layers for depth */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(0, 229, 255, 0.15) 40%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    animation: "glow-pulse-outer 4s ease-in-out infinite",
                    "@keyframes glow-pulse-outer": {
                      "0%, 100%": { 
                        opacity: 0.5, 
                        transform: "scale(0.9)",
                      },
                      "50%": { 
                        opacity: 0.8, 
                        transform: "scale(1.3)",
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: "85%",
                    height: "85%",
                    background: "radial-gradient(circle, rgba(105, 255, 255, 0.3) 0%, rgba(105, 255, 255, 0.15) 50%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    animation: "glow-pulse-inner 3s ease-in-out infinite 0.5s",
                    "@keyframes glow-pulse-inner": {
                      "0%, 100%": { 
                        opacity: 0.6, 
                        transform: "scale(1) rotate(0deg)",
                      },
                      "50%": { 
                        opacity: 1, 
                        transform: "scale(1.2) rotate(180deg)",
                      },
                    },
                  }}
                />
                
                {/* Hexagon border animation */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "90%",
                    height: "90%",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    animation: "rotate-hex 30s linear infinite reverse",
                    "@keyframes rotate-hex": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />

                {/* Main SVG with advanced animations */}
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 4, -4, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                  whileHover={{
                    scale: 1.12,
                    rotate: [0, -3, 3, -3, 3, 0],
                    transition: { 
                      duration: 0.8, 
                      ease: "easeInOut",
                      scale: { duration: 0.3 }
                    },
                  }}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <Box
                    component="img"
                    src="/assets/images/Data extraction-bro.svg"
                    alt="Data Extraction & Code Crafting Illustration"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "350px", sm: "450px", md: "550px", lg: "600px" },
                      height: "auto",
                      filter: "drop-shadow(0 0 35px rgba(0, 229, 255, 0.5)) drop-shadow(0 0 15px rgba(0, 229, 255, 0.3))",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      animation: "subtle-glow 3s ease-in-out infinite",
                      "&:hover": {
                        filter: "drop-shadow(0 0 50px rgba(0, 229, 255, 0.8)) drop-shadow(0 0 30px rgba(0, 229, 255, 0.6)) drop-shadow(0 0 15px rgba(105, 255, 255, 0.4))",
                      },
                      "@keyframes subtle-glow": {
                        "0%, 100%": {
                          filter: "drop-shadow(0 0 35px rgba(0, 229, 255, 0.5)) drop-shadow(0 0 15px rgba(0, 229, 255, 0.3))",
                        },
                        "50%": {
                          filter: "drop-shadow(0 0 45px rgba(0, 229, 255, 0.7)) drop-shadow(0 0 20px rgba(0, 229, 255, 0.5))",
                        },
                      },
                    }}
                  />
                </motion.div>

                {/* Animated particles with advanced motion */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                      x: [
                        0, 
                        Math.cos(i * Math.PI / 4) * 40, 
                        0
                      ],
                      y: [
                        0,
                        Math.sin(i * Math.PI / 4) * 40,
                        0
                      ],
                    }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    style={{
                      position: "absolute",
                      width: "10px",
                      height: "10px",
                      background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
                      borderRadius: "50%",
                      filter: "blur(2px)",
                      top: "50%",
                      left: "50%",
                      boxShadow: "0 0 15px rgba(0, 229, 255, 0.6)",
                    }}
                  />
                ))}

                {/* Energy waves emanating from center */}
                {[0, 1, 2, 3].map((i) => (
                  <Box
                    key={`wave-${i}`}
                    sx={{
                      position: "absolute",
                      width: "40%",
                      height: "40%",
                      border: "2px solid rgba(0, 229, 255, 0.4)",
                      borderRadius: "50%",
                      animation: `energy-wave ${3 + i * 0.5}s ease-out infinite ${i * 0.7}s`,
                      "@keyframes energy-wave": {
                        "0%": {
                          transform: "scale(0)",
                          opacity: 1,
                        },
                        "100%": {
                          transform: "scale(3)",
                          opacity: 0,
                        },
                      },
                    }}
                  />
                ))}

                {/* Orbiting elements */}
                {[0, 1, 2].map((i) => (
                  <Box
                    key={`orbit-${i}`}
                    sx={{
                      position: "absolute",
                      width: `${80 + i * 15}%`,
                      height: `${80 + i * 15}%`,
                      border: `1px dashed rgba(0, 229, 255, ${0.15 - i * 0.03})`,
                      borderRadius: "50%",
                      animation: `orbit-rotate-${i} ${15 + i * 5}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}`,
                      pointerEvents: "none",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "0%",
                        left: "50%",
                        width: "6px",
                        height: "6px",
                        background: `rgba(0, 229, 255, ${0.6 - i * 0.15})`,
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        boxShadow: `0 0 10px rgba(0, 229, 255, ${0.5 - i * 0.1})`,
                      },
                      [`@keyframes orbit-rotate-${i}`]: {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                ))}

                {/* Binary code rain effect */}
                {[...Array(12)].map((_, i) => (
                  <Box
                    key={`binary-${i}`}
                    sx={{
                      position: "absolute",
                      fontSize: "10px",
                      color: "rgba(0, 229, 255, 0.4)",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      animation: `binary-fall ${4 + i * 0.5}s linear infinite ${i * 0.3}s`,
                      top: "-20px",
                      left: `${10 + i * 7}%`,
                      opacity: 0,
                      "&::before": {
                        content: '"01"',
                      },
                      "@keyframes binary-fall": {
                        "0%": {
                          transform: "translateY(0)",
                          opacity: 0,
                        },
                        "10%": {
                          opacity: 0.6,
                        },
                        "90%": {
                          opacity: 0.3,
                        },
                        "100%": {
                          transform: "translateY(300px)",
                          opacity: 0,
                        },
                      },
                    }}
                  />
                ))}

                {/* Corner accent elements with enhanced animation */}
                {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner, i) => (
                  <Box
                    key={corner}
                    sx={{
                      position: "absolute",
                      [corner.split("-")[0]]: "10%",
                      [corner.split("-")[1]]: "10%",
                      width: "3px",
                      height: "30px",
                      background: "linear-gradient(180deg, rgba(0, 229, 255, 0.8) 0%, transparent 100%)",
                      animation: `pulse-line ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                      transform: corner.includes("right") ? "rotate(30deg)" : "rotate(-30deg)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(180deg, rgba(105, 255, 255, 0.8) 0%, transparent 100%)",
                        animation: `line-glow ${1.5 + i * 0.2}s ease-in-out infinite ${i * 0.15}s`,
                      },
                      "@keyframes pulse-line": {
                        "0%, 100%": { 
                          opacity: 0.3,
                          height: "30px",
                        },
                        "50%": { 
                          opacity: 1,
                          height: "45px",
                        },
                      },
                      "@keyframes line-glow": {
                        "0%, 100%": { 
                          opacity: 0,
                        },
                        "50%": { 
                          opacity: 1,
                        },
                      },
                    }}
                  />
                ))}

                {/* Floating data points */}
                {[...Array(6)].map((_, i) => (
                  <Box
                    key={`data-${i}`}
                    sx={{
                      position: "absolute",
                      width: "4px",
                      height: "4px",
                      background: "rgba(0, 229, 255, 0.7)",
                      borderRadius: "50%",
                      boxShadow: "0 0 8px rgba(0, 229, 255, 0.5)",
                      animation: `float-data ${3 + i * 0.4}s ease-in-out infinite ${i * 0.5}s`,
                      top: `${25 + i * 10}%`,
                      left: `${20 + i * 12}%`,
                      "@keyframes float-data": {
                        "0%, 100%": {
                          transform: "translate(0, 0) scale(1)",
                          opacity: 0.3,
                        },
                        "50%": {
                          transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.5)`,
                          opacity: 0.8,
                        },
                      },
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
