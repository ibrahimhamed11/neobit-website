// App Configuration
export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "NeoBit";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO || "/assets/images/neobit-logo.svg";

// Session Management
export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// OAuth Configuration (if needed)
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  
  if (!oauthPortalUrl || !appId) {
    console.warn("OAuth configuration not found");
    return "";
  }
  
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Navigation Items
export const NAV_ITEMS = [
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

// ============================================
// COMPANY INFORMATION - CENTRALIZED
// Import from centralized contact info data file
// ============================================
import { contactInfo as centralContactInfo } from "@/data/contactInfo";

export const COMPANY_INFO = {
  name: "NeoBit",
  legalName: "NeoBit Technology Solutions",
  establishedYear: 2026,
  launchDate: "2026-01-01",
  
  // Contact Information - Using centralized data
  contact: {
    email: centralContactInfo.email.primary,
    phone: {
      international: centralContactInfo.phone.display,
      uae: centralContactInfo.phone.display, // Using same format for consistency
      display: centralContactInfo.phone.display
    },
    whatsapp: centralContactInfo.phone.whatsapp,
    telegram: "@neobitofficial"
  },
  
  // Location Information - Using centralized data
  location: {
    city: "Cairo",
    country: "Egypt",
    region: "Middle East & North Africa",
    fullAddress: centralContactInfo.address.en,
    coordinates: {
      lat: 30.0444,
      lng: 31.2357
    }
  },
  
  // Social Media Links - Using centralized data
  social: centralContactInfo.social,
  
  // Business Information
  business: {
    taglines: {
      en: "Building the Future of Digital Solutions",
      ar: "نبني مستقبل الحلول الرقمية"
    },
    slogan: {
      en: "Innovate. Build. Transform.",
      ar: "ابتكر. اصنع. حوّل."
    },
    description: {
      en: "NeoBit is a leading technology company delivering advanced solutions specialized in financial trading and blockchain programming. We develop sophisticated MQL4/5 trading robots, modern mobile applications, and professional websites.",
      ar: "نيو بت هي شركة تقنية رائدة تقدم حلولًا متقدمة متخصصة في التداول المالي وبرمجة البلوك تشين. نطور روبوتات تداول MQL4/5 متطورة وتطبيقات جوال حديثة ومواقع ويب احترافية."
    }
  },
  
  // Statistics
  stats: {
    happyClients: "20+",
    successRate: "98%",
    projectsCompleted: "50+",
    yearsExperience: "5+",
    countriesServed: "10+"
  },
  
  // Working Hours - Using centralized data
  availability: {
    support: "24/7",
    businessHours: {
      en: centralContactInfo.workingHours.en,
      ar: centralContactInfo.workingHours.ar
    }
  },
  
  // Service Categories
  services: [
    "Trading Solutions",
    "Blockchain Development",
    "MQL4/5 Bots & Indicators",
    "Mobile App Development",
    "Web Development",
    "Custom Software Solutions"
  ]
} as const;

// Helper function to get contact email
export const getContactEmail = () => COMPANY_INFO.contact.email;

// Helper function to get contact phone
export const getContactPhone = (format: "international" | "uae" | "display" = "display") => 
  COMPANY_INFO.contact.phone[format];

// Helper function to get location
export const getLocation = (includeCountry = true) => 
  includeCountry ? `${COMPANY_INFO.location.city}, ${COMPANY_INFO.location.country}` : COMPANY_INFO.location.city;

// Helper function to get full address
export const getFullAddress = () => COMPANY_INFO.location.fullAddress;

// Helper function to get social media link
export const getSocialLink = (platform: keyof typeof COMPANY_INFO.social) => 
  COMPANY_INFO.social[platform] || "#";

// Helper function to get tagline
export const getTagline = (lang: "en" | "ar" = "en") => 
  COMPANY_INFO.business.taglines[lang];

// Helper function to get slogan
export const getSlogan = (lang: "en" | "ar" = "en") => 
  COMPANY_INFO.business.slogan[lang];

// Re-export centralized contact info for direct access
export { centralContactInfo as contactInfoData };

