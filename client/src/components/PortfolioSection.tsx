import { Box, Container, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  OpenInNew as OpenInNewIcon,
  PlayArrow as PlayArrowIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Language as LanguageIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { portfolioProjects } from "@/data/portfolioData";

export default function PortfolioSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Box
      id="portfolio"
      sx={{
        padding: { xs: "40px 20px", md: "60px 20px" },
        background: "linear-gradient(180deg, #1E1E1E 0%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "10px",
              background: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" },
              fontFamily: "Droid Sans, sans-serif",
              fontWeight: 800,
            }}
          >
            {t("portfolio.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#B0B0B0",
              maxWidth: "600px",
              margin: "0 auto",
              marginBottom: "40px",
              fontSize: "0.95rem",
              fontFamily: "Droid Sans, sans-serif",
              lineHeight: 1.6,
            }}
          >
            {t("portfolio.description")}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <Link href={`/project/${project.id}`}>
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(30, 30, 30, 0.6)",
                    border: "1px solid rgba(0, 229, 255, 0.2)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "rgba(0, 229, 255, 0.6)",
                      boxShadow: "0 12px 30px rgba(0, 229, 255, 0.2)",
                    },
                  }}
                >
                  {/* Project Image */}
                  <Box
                    sx={{
                      position: "relative",
                      height: "160px",
                      background: project.gradient,
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
                        background: "rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: 50, color: "#FFFFFF" }} />
                    </Box>
                    
                    {/* Category badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "12px",
                        left: isRTL ? "auto" : "12px",
                        right: isRTL ? "12px" : "auto",
                      }}
                    >
                      <Chip
                        label={t(project.categoryKey)}
                        size="small"
                        sx={{
                          background: "rgba(0, 0, 0, 0.7)",
                          backdropFilter: "blur(10px)",
                          color: "#00E5FF",
                          fontWeight: 600,
                          border: "1px solid rgba(0, 229, 255, 0.5)",
                          fontFamily: "Droid Sans, sans-serif",
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#00E5FF",
                        marginBottom: "10px",
                        fontFamily: "Droid Sans, sans-serif",
                      }}
                    >
                      {t(project.nameKey)}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "#B0B0B0",
                        marginBottom: "14px",
                        lineHeight: 1.5,
                        fontFamily: "Droid Sans, sans-serif",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {t(project.descriptionKey)}
                    </Typography>

                    {/* Tags */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.8,
                        marginBottom: "14px",
                      }}
                    >
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            background: "rgba(0, 229, 255, 0.1)",
                            color: "#69FFFF",
                            fontSize: "0.7rem",
                            fontFamily: "Droid Sans, sans-serif",
                            height: "22px",
                          }}
                        />
                      ))}
                    </Box>

                    {/* Links */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 0.8,
                        flexWrap: "wrap",
                      }}
                    >
                      {project.websiteUrl && (
                        <Button
                          size="small"
                          startIcon={isRTL ? null : <LanguageIcon sx={{ fontSize: 14 }} />}
                          endIcon={isRTL ? <LanguageIcon sx={{ fontSize: 14 }} /> : null}
                          href={project.websiteUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            color: "#00E5FF",
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            fontSize: "0.7rem",
                            textTransform: "none",
                            fontFamily: "Droid Sans, sans-serif",
                            padding: "4px 10px",
                            minWidth: "auto",
                            "& .MuiButton-startIcon": {
                              marginRight: isRTL ? 0 : "4px",
                              marginLeft: isRTL ? "4px" : 0,
                            },
                            "& .MuiButton-endIcon": {
                              marginLeft: isRTL ? 0 : "4px",
                              marginRight: isRTL ? "4px" : 0,
                            },
                            "&:hover": {
                              borderColor: "#00E5FF",
                              background: "rgba(0, 229, 255, 0.1)",
                            },
                          }}
                          variant="outlined"
                        >
                          Web
                        </Button>
                      )}
                      {project.androidUrl && (
                        <Button
                          size="small"
                          startIcon={isRTL ? null : <PhoneAndroidIcon sx={{ fontSize: 14 }} />}
                          endIcon={isRTL ? <PhoneAndroidIcon sx={{ fontSize: 14 }} /> : null}
                          href={project.androidUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            color: "#00E5FF",
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            fontSize: "0.7rem",
                            textTransform: "none",
                            fontFamily: "Droid Sans, sans-serif",
                            padding: "4px 10px",
                            minWidth: "auto",
                            "& .MuiButton-startIcon": {
                              marginRight: isRTL ? 0 : "4px",
                              marginLeft: isRTL ? "4px" : 0,
                            },
                            "& .MuiButton-endIcon": {
                              marginLeft: isRTL ? 0 : "4px",
                              marginRight: isRTL ? "4px" : 0,
                            },
                            "&:hover": {
                              borderColor: "#00E5FF",
                              background: "rgba(0, 229, 255, 0.1)",
                            },
                          }}
                          variant="outlined"
                        >
                          App
                        </Button>
                      )}
                      {project.iosComingSoon && (
                        <Chip
                          label="iOS"
                          size="small"
                          sx={{
                            background: "rgba(255, 215, 0, 0.1)",
                            color: "#FFD700",
                            fontSize: "0.65rem",
                            fontFamily: "Droid Sans, sans-serif",
                            height: "22px",
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </Box>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", marginTop: "40px" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{
                color: "#00E5FF",
                borderColor: "rgba(0, 229, 255, 0.5)",
                padding: "10px 28px",
                fontSize: "0.9rem",
                fontWeight: 600,
                borderRadius: "25px",
                textTransform: "none",
                fontFamily: "Droid Sans, sans-serif",
                "&:hover": {
                  backgroundColor: "rgba(0, 229, 255, 0.1)",
                  borderColor: "#00E5FF",
                },
              }}
            >
              {t("portfolio.viewAllProjects")}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
