import { Box, Container, Typography, Button, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Link } from "wouter";
import {
  ArrowBack as ArrowBackIcon,
  OpenInNew as OpenInNewIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Language as LanguageIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsDetailData } from "@/data/portfolioData";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const project = projectId ? projectsDetailData[projectId] : null;

  if (!project) {
    return (
      <Box>
        <Header />
        <Container maxWidth="lg" sx={{ padding: "100px 20px", textAlign: "center" }}>
          <Typography variant="h2" color="#00E5FF">Project not found</Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ marginTop: "20px" }}>Go Home</Button>
          </Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Header />
      
      <Box sx={{ paddingTop: "80px" }}>
        {/* Hero Section */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "60px 20px" },
            background: project.gradient,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
            }}
          />
          
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                startIcon={isRTL ? null : <ArrowBackIcon sx={{ fontSize: 20 }} />}
                endIcon={isRTL ? <ArrowBackIcon sx={{ fontSize: 20 }} /> : null}
                sx={{
                  color: "#FFFFFF",
                  marginBottom: "30px",
                  "& .MuiButton-startIcon": {
                    marginRight: isRTL ? 0 : "8px",
                    marginLeft: isRTL ? "8px" : 0,
                  },
                  "& .MuiButton-endIcon": {
                    marginLeft: isRTL ? 0 : "8px",
                    marginRight: isRTL ? "8px" : 0,
                  },
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {t("common.backToHome")}
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label={t(project.categoryKey)}
                sx={{
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                  fontWeight: 600,
                  fontFamily: "Droid Sans, sans-serif",
                }}
              />
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t(project.nameKey)}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  maxWidth: "800px",
                  lineHeight: 1.8,
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t(project.descriptionKey)}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, marginTop: "30px", flexWrap: "wrap" }}>
                {project.websiteUrl && (
                  <Button
                    variant="contained"
                    startIcon={isRTL ? null : <LanguageIcon sx={{ fontSize: 20 }} />}
                    endIcon={isRTL ? <LanguageIcon sx={{ fontSize: 20 }} /> : <OpenInNewIcon sx={{ fontSize: 18 }} />}
                    href={project.websiteUrl}
                    target="_blank"
                    sx={{
                      background: "#FFFFFF",
                      color: "#000000",
                      fontWeight: 600,
                      padding: "12px 28px",
                      fontFamily: "Droid Sans, sans-serif",
                      "& .MuiButton-startIcon": {
                        marginRight: isRTL ? 0 : "8px",
                        marginLeft: isRTL ? "8px" : 0,
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: isRTL ? 0 : "8px",
                        marginRight: isRTL ? "8px" : 0,
                      },
                      "&:hover": {
                        background: "#F0F0F0",
                      },
                    }}
                  >
                    {t("portfolio.visitWebsite")}
                  </Button>
                )}
                {project.androidUrl && (
                  <Button
                    variant="outlined"
                    startIcon={isRTL ? null : <PhoneAndroidIcon sx={{ fontSize: 20 }} />}
                    endIcon={isRTL ? <PhoneAndroidIcon sx={{ fontSize: 20 }} /> : null}
                    href={project.androidUrl}
                    target="_blank"
                    sx={{
                      borderColor: "#FFFFFF",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      padding: "12px 28px",
                      fontFamily: "Droid Sans, sans-serif",
                      "& .MuiButton-startIcon": {
                        marginRight: isRTL ? 0 : "8px",
                        marginLeft: isRTL ? "8px" : 0,
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: isRTL ? 0 : "8px",
                        marginRight: isRTL ? "8px" : 0,
                      },
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderColor: "#FFFFFF",
                      },
                    }}
                  >
                    {t("portfolio.downloadAndroid")}
                  </Button>
                )}
                {project.iosComingSoon && (
                  <Chip
                    label={t("portfolio.iosComingSoon")}
                    sx={{
                      background: "rgba(255, 215, 0, 0.2)",
                      color: "#FFD700",
                      fontWeight: 600,
                      padding: "20px 12px",
                      fontFamily: "Droid Sans, sans-serif",
                    }}
                  />
                )}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Screenshots Slider */}
        <Container maxWidth="lg" sx={{ padding: { xs: "40px 20px", md: "60px 20px" } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#00E5FF",
              marginBottom: "30px",
              fontFamily: "Droid Sans, sans-serif",
            }}
          >
            {t("portfolio.screenshots")}
          </Typography>

          <Box
            sx={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#1E1E1E",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                background: "#000000",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={project.screenshots[currentScreenshot]}
                alt={`Screenshot ${currentScreenshot + 1}`}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                onError={(e: any) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%231E1E1E' width='800' height='450'/%3E%3Ctext fill='%2300E5FF' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EScreenshot Preview%3C/text%3E%3C/svg%3E";
                }}
              />
            </Box>

            {/* Navigation arrows */}
            {project.screenshots.length > 1 && (
              <>
                <IconButton
                  onClick={prevScreenshot}
                  sx={{
                    position: "absolute",
                    left: isRTL ? undefined : "30px",
                    right: isRTL ? "30px" : undefined,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 229, 255, 0.2)",
                    color: "#00E5FF",
                    "&:hover": {
                      background: "rgba(0, 229, 255, 0.4)",
                    },
                  }}
                >
                  {isRTL ? <ChevronRightIcon sx={{ fontSize: 30 }} /> : <ChevronLeftIcon sx={{ fontSize: 30 }} />}
                </IconButton>

                <IconButton
                  onClick={nextScreenshot}
                  sx={{
                    position: "absolute",
                    right: isRTL ? undefined : "30px",
                    left: isRTL ? "30px" : undefined,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 229, 255, 0.2)",
                    color: "#00E5FF",
                    "&:hover": {
                      background: "rgba(0, 229, 255, 0.4)",
                    },
                  }}
                >
                  {isRTL ? <ChevronLeftIcon sx={{ fontSize: 30 }} /> : <ChevronRightIcon sx={{ fontSize: 30 }} />}
                </IconButton>
              </>
            )}

            {/* Dots indicator */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                marginTop: "20px",
              }}
            >
              {project.screenshots.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: index === currentScreenshot ? "#00E5FF" : "#555555",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#00E5FF",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Project Details */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
              gap: 4,
              marginTop: "60px",
            }}
          >
            {/* Description */}
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#00E5FF",
                  marginBottom: "20px",
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t("portfolio.aboutProject")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#B0B0B0",
                  lineHeight: 1.8,
                  marginBottom: "30px",
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t(project.longDescriptionKey)}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#00E5FF",
                  marginBottom: "20px",
                  fontFamily: "Droid Sans, sans-serif",
                }}
              >
                {t("portfolio.keyFeatures")}
              </Typography>
              <Box component="ul" sx={{ 
                paddingLeft: isRTL ? 0 : "20px",
                paddingRight: isRTL ? "20px" : 0,
              }}>
                {project.featuresKey.map((featureKey, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      color: "#D5D5D5",
                      fontSize: "1rem",
                      marginBottom: "12px",
                      fontFamily: "Droid Sans, sans-serif",
                      direction: isRTL ? 'rtl' : 'ltr',
                      "&::marker": {
                        color: "#00E5FF",
                      },
                    }}
                  >
                    {t(featureKey)}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Sidebar */}
            <Box>
              <Box
                sx={{
                  background: "linear-gradient(145deg, rgba(30, 30, 30, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%)",
                  border: "2px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#808080",
                    marginBottom: "8px",
                    fontFamily: "Droid Sans, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t("portfolio.projectInfo")}
                </Typography>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#808080",
                      marginBottom: "4px",
                      fontFamily: "Droid Sans, sans-serif",
                    }}
                  >
                    {t("portfolio.year")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#E0E0E0",
                      marginBottom: "16px",
                      fontFamily: "Droid Sans, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {project.year}
                  </Typography>
                </Box>

                {project.client && (
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "#808080",
                        marginBottom: "4px",
                        fontFamily: "Droid Sans, sans-serif",
                      }}
                    >
                      {t("portfolio.client")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        color: "#E0E0E0",
                        marginBottom: "16px",
                        fontFamily: "Droid Sans, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {project.client}
                    </Typography>
                  </Box>
                )}

                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#808080",
                      marginBottom: "12px",
                      fontFamily: "Droid Sans, sans-serif",
                    }}
                  >
                    {t("portfolio.technologies")}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          background: "rgba(0, 229, 255, 0.1)",
                          color: "#69FFFF",
                          fontSize: "0.75rem",
                          fontFamily: "Droid Sans, sans-serif",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
