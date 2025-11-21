export interface ProjectData {
  id: string;
  nameKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  categoryKey: string;
  screenshots: string[];
  technologies: string[];
  features: string[];
  websiteUrl?: string;
  androidUrl?: string;
  iosComingSoon?: boolean;
  gradient: string;
  year: string;
  client?: string;
  tags: string[];
}

export const projectsData: ProjectData[] = [
  {
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
    features: [
      "Real-time market data",
      "Advanced trading signals",
      "Portfolio tracking",
      "Social trading community",
      "Custom alerts",
      "Multi-language support",
    ],
    tags: ["React", "Node.js", "Trading", "Real-time"],
    websiteUrl: "https://market-whales.com",
    androidUrl: "https://play.google.com/store/apps/details?id=com.marketwhales",
    iosComingSoon: true,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    year: "2024",
    client: "Market Whales Inc.",
  },
  {
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
    features: [
      "Decentralized trading",
      "Smart contract integration",
      "Wallet connectivity",
      "Liquidity pools",
      "Staking mechanism",
    ],
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts"],
    websiteUrl: "https://example-crypto.com",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    year: "2024",
  },
  {
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
    features: [
      "Automated trading strategies",
      "AI-powered predictions",
      "Risk management",
      "Backtesting framework",
      "Real-time alerts",
    ],
    tags: ["MQL5", "Trading", "Automation", "AI"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    year: "2023",
  },
];

export const getProjectById = (id: string): ProjectData | undefined => {
  return projectsData.find((project) => project.id === id);
};
