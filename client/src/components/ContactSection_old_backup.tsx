import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const isRTL = i18n.language === "ar";
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(26, 26, 46, 0.8) 100%)",
        "linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(0, 229, 255, 0.05) 100%)",
        "linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(26, 26, 46, 0.8) 100%)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  // Create validation schema based on current language
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("contact.form.validation.nameMin"))
      .max(50, t("contact.form.validation.nameMax"))
      .required(t("contact.form.validation.nameRequired")),
    email: Yup.string()
      .email(t("contact.form.validation.emailInvalid"))
      .required(t("contact.form.validation.emailRequired")),
    subject: Yup.string()
      .min(3, t("contact.form.validation.subjectMin"))
      .max(100, t("contact.form.validation.subjectMax"))
      .required(t("contact.form.validation.subjectRequired")),
    message: Yup.string()
      .min(10, t("contact.form.validation.messageMin"))
      .max(500, t("contact.form.validation.messageMax"))
      .required(t("contact.form.validation.messageRequired")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      setSubmitted(true);
      resetForm();
      setTimeout(() => setSubmitted(false), 5000);
    },
  });

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: t("contact.email"),
      value: "info@neobit.dev",
      description: "Send us an email anytime",
      color: "#00E5FF",
    },
    {
      icon: <Phone size={28} />,
      title: t("contact.phone"),
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "#69FFFF",
    },
    {
      icon: <MapPin size={28} />,
      title: t("contact.location"),
      value: t("contact.globalOperations"),
      description: "Worldwide support available",
      color: "#00E5FF",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        padding: { xs: "80px 20px", sm: "100px 20px", md: "120px 20px" },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "radial-gradient(circle at 30% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(105, 255, 255, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "70px" }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  padding: "8px 20px",
                  background: "rgba(0, 229, 255, 0.1)",
                  border: "1px solid rgba(0, 229, 255, 0.3)",
                  borderRadius: "999px",
                  marginBottom: "25px",
                }}
              >
                <MessageSquare size={18} color="#00E5FF" />
                <Typography
                  sx={{
                    fontFamily: "Droid Sans, sans-serif",
                    color: "#00E5FF",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {t("contact.badge") || "Get in Touch"}
                </Typography>
              </Box>
            </motion.div>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #00E5FF 50%, #69FFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
                fontWeight: 800,
                letterSpacing: "-1px",
                lineHeight: 1.2,
              }}
            >
              {t("contact.title")}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#B0B0B0",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              {t("contact.description")}
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Info Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            marginBottom: "60px",
          }}
        >
          {contactInfo.map((info, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Card
                  sx={{
                    background: isHovered === index
                      ? "linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(26, 26, 46, 0.9) 100%)"
                      : "rgba(30, 30, 30, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${isHovered === index ? "rgba(0, 229, 255, 0.5)" : "rgba(0, 229, 255, 0.2)"}`,
                    borderRadius: "16px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered === index ? "translateY(-10px)" : "translateY(0)",
                    boxShadow: isHovered === index
                      ? "0 20px 40px rgba(0, 229, 255, 0.3)"
                      : "0 4px 20px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${info.color}, transparent)`,
                      transform: isHovered === index ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.4s ease",
                    },
                  }}
                >
                  <CardContent sx={{ padding: "30px !important" }}>
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        border: `1px solid ${info.color}40`,
                        transition: "all 0.3s ease",
                        transform: isHovered === index ? "scale(1.1) rotate(5deg)" : "scale(1)",
                      }}
                    >
                      <Box sx={{ color: info.color }}>{info.icon}</Box>
                    </Box>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Droid Sans, sans-serif",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      {info.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Droid Sans, sans-serif",
                        color: "#00E5FF",
                        marginBottom: "8px",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                      }}
                    >
                      {info.value}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Droid Sans, sans-serif",
                        color: "#909090",
                        fontSize: "0.85rem",
                      }}
                    >
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            component={motion.div}
            animate={controls}
            sx={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "rgba(30, 30, 30, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <CardContent sx={{ padding: { xs: "30px", sm: "40px", md: "50px" } }}>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  direction: isRTL ? "rtl" : "ltr",
                }}
              >
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert
                      severity="success"
                      sx={{
                        background: "rgba(0, 229, 255, 0.1)",
                        border: "1px solid rgba(0, 229, 255, 0.3)",
                        color: "#00E5FF",
                        "& .MuiAlert-icon": {
                          color: "#00E5FF",
                        },
                      }}
                    >
                      {t("contact.form.success")}
                    </Alert>
                  </motion.div>
                )}

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 3,
                  }}
                >
                  <Box>
                    <TextField
                      label={t("contact.form.name")}
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#E0E0E0",
                          fontFamily: "Droid Sans, sans-serif",
                          backgroundColor: "rgba(20, 20, 20, 0.5)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "& fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            borderWidth: "1.5px",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.6)",
                          },
                          "&.Mui-focused": {
                            backgroundColor: "rgba(0, 229, 255, 0.05)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00E5FF",
                            borderWidth: "2px",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#A0A0A0",
                          fontFamily: "Droid Sans, sans-serif",
                          "&.Mui-focused": {
                            color: "#00E5FF",
                          },
                          "&.Mui-error": {
                            color: "#ff6b6b",
                          },
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily: "Droid Sans, sans-serif",
                          textAlign: isRTL ? "right" : "left",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <TextField
                      label={t("contact.form.email")}
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#E0E0E0",
                          fontFamily: "Droid Sans, sans-serif",
                          backgroundColor: "rgba(20, 20, 20, 0.5)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "& fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            borderWidth: "1.5px",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.6)",
                          },
                          "&.Mui-focused": {
                            backgroundColor: "rgba(0, 229, 255, 0.05)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00E5FF",
                            borderWidth: "2px",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#A0A0A0",
                          fontFamily: "Droid Sans, sans-serif",
                          "&.Mui-focused": {
                            color: "#00E5FF",
                          },
                          "&.Mui-error": {
                            color: "#ff6b6b",
                          },
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily: "Droid Sans, sans-serif",
                          textAlign: isRTL ? "right" : "left",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label={t("contact.form.subject")}
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.subject && Boolean(formik.errors.subject)}
                      helperText={formik.touched.subject && formik.errors.subject}
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#E0E0E0",
                          fontFamily: "Droid Sans, sans-serif",
                          backgroundColor: "rgba(20, 20, 20, 0.5)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "& fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            borderWidth: "1.5px",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.6)",
                          },
                          "&.Mui-focused": {
                            backgroundColor: "rgba(0, 229, 255, 0.05)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00E5FF",
                            borderWidth: "2px",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#A0A0A0",
                          fontFamily: "Droid Sans, sans-serif",
                          "&.Mui-focused": {
                            color: "#00E5FF",
                          },
                          "&.Mui-error": {
                            color: "#ff6b6b",
                          },
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily: "Droid Sans, sans-serif",
                          textAlign: isRTL ? "right" : "left",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label={t("contact.form.message")}
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                      fullWidth
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#E0E0E0",
                          fontFamily: "Droid Sans, sans-serif",
                          backgroundColor: "rgba(20, 20, 20, 0.5)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "& fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.3)",
                            borderWidth: "1.5px",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 229, 255, 0.6)",
                          },
                          "&.Mui-focused": {
                            backgroundColor: "rgba(0, 229, 255, 0.05)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00E5FF",
                            borderWidth: "2px",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#A0A0A0",
                          fontFamily: "Droid Sans, sans-serif",
                          "&.Mui-focused": {
                            color: "#00E5FF",
                          },
                          "&.Mui-error": {
                            color: "#ff6b6b",
                          },
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily: "Droid Sans, sans-serif",
                          textAlign: isRTL ? "right" : "left",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ width: "100%", maxWidth: "400px" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={!isRTL && <Send size={20} />}
                      startIcon={isRTL && <Send size={20} />}
                      fullWidth
                      sx={{
                        fontFamily: "Droid Sans, sans-serif",
                        background: "linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)",
                        color: "#0a0a0a",
                        padding: "14px 40px",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        borderRadius: "12px",
                        textTransform: "none",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 8px 25px rgba(0, 229, 255, 0.4)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          transition: "left 0.6s ease",
                        },
                        "&:hover": {
                          background: "linear-gradient(135deg, #69FFFF 0%, #00E5FF 100%)",
                          boxShadow: "0 12px 35px rgba(0, 229, 255, 0.6)",
                          transform: "translateY(-2px)",
                        },
                        "&:hover::before": {
                          left: "100%",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {t("contact.form.send")}
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              marginTop: "50px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Clock size={18} color="#00E5FF" />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Droid Sans, sans-serif",
                color: "#909090",
                fontSize: "0.95rem",
              }}
            >
              {t("contact.responseTime") || "We typically respond within 24 hours"}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
