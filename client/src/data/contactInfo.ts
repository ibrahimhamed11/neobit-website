/**
 * Centralized Contact Information
 * Single source of truth for all contact details used across the application
 */

export interface ContactInfo {
  phone: {
    display: string; // Display format with country code
    displayAr: string; // Arabic RTL format
    raw: string; // Raw number without spaces or special chars
    countryCode: string;
    whatsapp: string; // WhatsApp format (country code + number without +)
  };
  email: {
    primary: string;
    support?: string;
    sales?: string;
  };
  address: {
    en: string;
    ar: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  workingHours: {
    en: string;
    ar: string;
  };
}

export const contactInfo: ContactInfo = {
  phone: {
    display: "+20 109 368 5307",
    displayAr: "5307 368 109 20+",
    raw: "01093685307",
    countryCode: "+20",
    whatsapp: "201093685307", // Format for WhatsApp links (no + or spaces)
  },
  email: {
    primary: "info@neobit-it.com",
    support: "support@neobit-it.com",
    sales: "sales@neobit-it.com",
  },
  address: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  social: {
    facebook: "https://facebook.com/neobit",
    twitter: "https://twitter.com/neobit",
    linkedin: "https://linkedin.com/company/neobit",
    instagram: "https://instagram.com/neobit",
    github: "https://github.com/neobit",
  },
  workingHours: {
    en: "Sun - Thu: 9:00 AM - 6:00 PM",
    ar: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً",
  },
};

// Helper functions for easy access
export const getPhoneDisplay = (isArabic: boolean = false): string => {
  return isArabic ? contactInfo.phone.displayAr : contactInfo.phone.display;
};

export const getPhoneLink = (): string => {
  return `tel:${contactInfo.phone.display.replace(/\s/g, "")}`;
};

export const getWhatsAppLink = (message?: string): string => {
  const baseUrl = `https://wa.me/${contactInfo.phone.whatsapp}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getEmailLink = (type: "primary" | "support" | "sales" = "primary"): string => {
  const email = contactInfo.email[type] || contactInfo.email.primary;
  return `mailto:${email}`;
};

export const getPrimaryEmail = (): string => {
  return contactInfo.email.primary;
};

export const getSupportEmail = (): string => {
  return contactInfo.email.support || contactInfo.email.primary;
};

export const getSalesEmail = (): string => {
  return contactInfo.email.sales || contactInfo.email.primary;
};

export const getEmailByType = (type: "primary" | "support" | "sales"): string => {
  return contactInfo.email[type] || contactInfo.email.primary;
};

export const getAddress = (isArabic: boolean = false): string => {
  return isArabic ? contactInfo.address.ar : contactInfo.address.en;
};

export const getWorkingHours = (isArabic: boolean = false): string => {
  return isArabic ? contactInfo.workingHours.ar : contactInfo.workingHours.en;
};
