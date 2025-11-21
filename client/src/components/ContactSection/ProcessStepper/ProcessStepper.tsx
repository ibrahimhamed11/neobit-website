import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import {
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Search as SearchIcon,
  DesignServices as DesignServicesIcon,
  Code as CodeIcon,
  RocketLaunch as RocketLaunchIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as styles from "./styles";

function ColorlibStepIcon(props: any) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <AssignmentTurnedInIcon sx={{ fontSize: { xs: 24, md: 28 } }} />,
    2: <SearchIcon sx={{ fontSize: { xs: 24, md: 28 } }} />,
    3: <DesignServicesIcon sx={{ fontSize: { xs: 24, md: 28 } }} />,
    4: <CodeIcon sx={{ fontSize: { xs: 24, md: 28 } }} />,
    5: <RocketLaunchIcon sx={{ fontSize: { xs: 24, md: 28 } }} />,
  };

  return (
    <styles.ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </styles.ColorlibStepIconRoot>
  );
}

export default function ProcessStepper() {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(-1);

  const processSteps = [
    { label: t("process.requirements") || "Requirements", desc: t("process.requirementsDesc") || "Gathering needs" },
    { label: t("process.study") || "Project Study", desc: t("process.studyDesc") || "Project study" },
    { label: t("process.analysis") || "Analysis", desc: t("process.analysisDesc") || "Detailed analysis" },
    { label: t("process.design") || "Design", desc: t("process.designDesc") || "Planning & Design" },
    { label: t("process.development") || "Development & Delivery", desc: t("process.developmentDesc") || "Coding & Launch" },
  ];

  useEffect(() => {
    setActiveStep(-1);
    let current = -1;
    const interval = setInterval(() => {
      current += 1;
      if (current >= processSteps.length - 1) {
        clearInterval(interval);
      }
      setActiveStep(current);
    }, 1100);
    return () => clearInterval(interval);
  }, [i18n.language, processSteps.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Box sx={styles.containerSx}>
        <Box sx={styles.innerContainerSx}>
          <Typography variant="h3" sx={styles.titleSx}>
            {t("process.title") || "Software Development Process"}
          </Typography>

          <Typography variant="body1" sx={styles.descriptionSx}>
            {t("process.description") || "We follow a structured and professional methodology to ensure high-quality software solutions that meet your requirements and achieve your goals"}
          </Typography>

          {/* Desktop & Tablet View */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<styles.ColorlibConnector />}
              sx={styles.stepperSx}
            >
              {processSteps.map((step, index) => (
                <Step key={index} completed={index < activeStep}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <Box sx={styles.stepLabelContainerSx}>
                      <Typography sx={styles.stepLabelSx}>
                        {step.label}
                      </Typography>
                      <Typography sx={styles.stepDescSx}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Mobile View - Vertical Layout */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: index <= activeStep ? 1 : 0.4,
                    x: 0 
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      padding: "16px",
                      background: index <= activeStep 
                        ? "linear-gradient(135deg, rgba(255, 230, 109, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)"
                        : "rgba(30, 30, 30, 0.5)",
                      borderRadius: "16px",
                      border: index === activeStep
                        ? "2px solid #FFD700"
                        : index < activeStep
                        ? "2px solid rgba(255, 215, 0, 0.5)"
                        : "1px solid rgba(255, 215, 0, 0.2)",
                      transition: "all 0.4s ease",
                      boxShadow: index === activeStep
                        ? "0 8px 24px rgba(255, 215, 0, 0.3)"
                        : "0 2px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        minWidth: 48,
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: index <= activeStep
                          ? "linear-gradient(135deg, #FFE66D 0%, #FFD700 100%)"
                          : "rgba(255, 215, 0, 0.1)",
                        border: index <= activeStep
                          ? "2px solid #FFD700"
                          : "2px solid rgba(255, 215, 0, 0.3)",
                        color: index <= activeStep ? "#0a0a0a" : "#FFD700",
                        transition: "all 0.4s ease",
                        boxShadow: index === activeStep
                          ? "0 4px 16px rgba(255, 215, 0, 0.5)"
                          : "none",
                      }}
                    >
                      <ColorlibStepIcon 
                        active={index === activeStep} 
                        completed={index < activeStep}
                        icon={index + 1}
                      />
                    </Box>

                    {/* Text Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: "Droid Sans, sans-serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: index <= activeStep ? "#FFE66D" : "#B0B0B0",
                          marginBottom: "4px",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {step.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Droid Sans, sans-serif",
                          fontSize: "0.85rem",
                          color: index <= activeStep ? "#D0D0D0" : "#808080",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {step.desc}
                      </Typography>
                    </Box>

                    {/* Step Number Badge */}
                    <Box
                      sx={{
                        minWidth: 28,
                        width: 28,
                        height: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: index <= activeStep
                          ? "linear-gradient(135deg, #FFE66D 0%, #FFD700 100%)"
                          : "rgba(255, 215, 0, 0.1)",
                        color: index <= activeStep ? "#0a0a0a" : "#FFD700",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        fontFamily: "Droid Sans, sans-serif",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {index + 1}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
