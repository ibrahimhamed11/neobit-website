import { Box, TextField, Button, Alert, Card, CardContent, InputAdornment } from "@mui/material";
import { 
  Send as SendIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Subject as SubjectIcon,
  Message as MessageIcon
} from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as styles from "./styles";

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const controls = useAnimation();

  const isRTL = i18n.language === "ar";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Card component={motion.div} animate={controls} sx={styles.getCardSx(controls)}>
        <CardContent sx={styles.cardContentSx}>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={styles.getFormSx(isRTL)}
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert severity="success" sx={styles.alertSx}>
                  {t("contact.form.success")}
                </Alert>
              </motion.div>
            )}

            <Box sx={styles.formGridSx}>
              <TextField
                name="name"
                placeholder={t('contact.form.name')}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
                variant="outlined"
                sx={styles.getTextFieldSx(isRTL)}
                InputProps={{
                  startAdornment: isRTL ? (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                name="email"
                type="email"
                placeholder={t('contact.form.email')}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                variant="outlined"
                sx={styles.getTextFieldSx(isRTL)}
                InputProps={{
                  startAdornment: isRTL ? (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <TextField
              name="subject"
              placeholder={t('contact.form.subject')}
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
              fullWidth
              variant="outlined"
              sx={styles.getTextFieldSx(isRTL)}
              InputProps={{
                startAdornment: isRTL ? (
                  <InputAdornment position="start">
                    <SubjectIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                  </InputAdornment>
                ) : (
                  <InputAdornment position="start">
                    <SubjectIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              name="message"
              placeholder={t('contact.form.message')}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              fullWidth
              multiline
              rows={5}
              variant="outlined"
              sx={styles.getTextFieldSx(isRTL)}
              InputProps={{
                startAdornment: isRTL ? (
                  <InputAdornment position="start" sx={{ alignItems: 'flex-start', mt: 1.5 }}>
                    <MessageIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                  </InputAdornment>
                ) : (
                  <InputAdornment position="start" sx={{ alignItems: 'flex-start', mt: 1.5 }}>
                    <MessageIcon sx={{ color: 'rgba(0, 229, 255, 0.7)', fontSize: 24 }} />
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={styles.buttonContainerSx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.buttonWrapperSx}
              >
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={!isRTL && <SendIcon sx={{ fontSize: 20 }} />}
                  startIcon={isRTL && <SendIcon sx={{ fontSize: 20 }} />}
                  fullWidth
                  sx={styles.getButtonSx(isRTL)}
                >
                  {t("contact.form.send")}
                </Button>
              </motion.div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
