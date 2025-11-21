import {
  Language as LanguageIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Public as PublicIcon,
} from "@mui/icons-material";

export interface Project {
  id: string;
  nameKey: string;
  descriptionKey: string;
  categoryKey: string;
  image: string;
  tags: string[];
  websiteUrl?: string;
  androidUrl?: string;
  iosComingSoon?: boolean;
  gradient: string;
}

export interface ProjectDetailData {
  id: string;
  nameKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  categoryKey: string;
  screenshots: string[];
  technologies: string[];
  featuresKey: string[];
  websiteUrl?: string;
  androidUrl?: string;
  iosComingSoon?: boolean;
  gradient: string;
  year: string;
  client?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "market-whales",
    nameKey: "portfolio.marketWhales.name",
    descriptionKey: "portfolio.marketWhales.description",
    categoryKey: "portfolio.marketWhales.category",
    image: "/assets/images/market-whales-preview.png",
    tags: ["React", "Node.js", "Trading", "Real-time"],
    websiteUrl: "https://market-whales.com",
    androidUrl: "https://play.google.com/store/apps/details?id=com.marketwhalesapp.m",
    iosComingSoon: true,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "crypto-exchange",
    nameKey: "portfolio.cryptoExchange.name",
    descriptionKey: "portfolio.cryptoExchange.description",
    categoryKey: "portfolio.cryptoExchange.category",
    image: "/assets/images/crypto-preview.png",
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts"],
    websiteUrl: "https://example-crypto.com",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "trading-bot",
    nameKey: "portfolio.tradingBot.name",
    descriptionKey: "portfolio.tradingBot.description",
    categoryKey: "portfolio.tradingBot.category",
    image: "/assets/images/trading-bot-preview.png",
    tags: ["MQL5", "Trading", "Automation", "AI"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export const projectsDetailData: Record<string, ProjectDetailData> = {
  "market-whales": {
    id: "market-whales",
    nameKey: "portfolio.marketWhales.name",
    descriptionKey: "portfolio.marketWhales.description",
    longDescriptionKey: "portfolio.marketWhales.longDescription",
    categoryKey: "portfolio.marketWhales.category",
    screenshots: [
      "/assets/images/market-whales-1.png",
      "/assets/images/market-whales-2.png",
      "/assets/images/market-whales-3.png",
      "/assets/images/market-whales-4.png",
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Material-UI", "Chart.js"],
    featuresKey: [
      "portfolio.marketWhales.features.feature1",
      "portfolio.marketWhales.features.feature2",
      "portfolio.marketWhales.features.feature3",
      "portfolio.marketWhales.features.feature4",
      "portfolio.marketWhales.features.feature5",
      "portfolio.marketWhales.features.feature6",
    ],
    websiteUrl: "https://market-whales.com",
    androidUrl: "https://play.google.com/store/apps/details?id=com.marketwhalesapp.m",
    iosComingSoon: true,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    year: "2024",
    client: "Market Whales Inc.",
  },
  "crypto-exchange": {
    id: "crypto-exchange",
    nameKey: "portfolio.cryptoExchange.name",
    descriptionKey: "portfolio.cryptoExchange.description",
    longDescriptionKey: "portfolio.cryptoExchange.longDescription",
    categoryKey: "portfolio.cryptoExchange.category",
    screenshots: [
      "/assets/images/crypto-1.png",
      "/assets/images/crypto-2.png",
      "/assets/images/crypto-3.png",
    ],
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    featuresKey: [
      "portfolio.cryptoExchange.features.feature1",
      "portfolio.cryptoExchange.features.feature2",
      "portfolio.cryptoExchange.features.feature3",
      "portfolio.cryptoExchange.features.feature4",
    ],
    websiteUrl: "https://example-crypto.com",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    year: "2024",
  },
  "trading-bot": {
    id: "trading-bot",
    nameKey: "portfolio.tradingBot.name",
    descriptionKey: "portfolio.tradingBot.description",
    longDescriptionKey: "portfolio.tradingBot.longDescription",
    categoryKey: "portfolio.tradingBot.category",
    screenshots: [
      "/assets/images/bot-1.png",
      "/assets/images/bot-2.png",
    ],
    technologies: ["MQL5", "Python", "TensorFlow", "MetaTrader"],
    featuresKey: [
      "portfolio.tradingBot.features.feature1",
      "portfolio.tradingBot.features.feature2",
      "portfolio.tradingBot.features.feature3",
      "portfolio.tradingBot.features.feature4",
    ],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    year: "2023",
  },
};

export const portfolioIcons = {
  language: LanguageIcon,
  phoneAndroid: PhoneAndroidIcon,
  public: PublicIcon,
};
