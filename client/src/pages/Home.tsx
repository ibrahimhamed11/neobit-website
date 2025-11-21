import { Box } from "@mui/material";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesSection from "@/components/ServicesSection";
import TradingExpertsSection from "@/components/TradingExpertsSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <TradingExpertsSection />
        <AboutSection />
        <TechnologiesSection />
        {/* <PortfolioSection /> */}
        <TestimonialsSection />
        <ClientsSection />
        <CTASection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
