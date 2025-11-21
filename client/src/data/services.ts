import {
  TrendingUpRounded,
  CodeRounded,
  SmartphoneRounded,
  PublicRounded,
  FlashOnRounded,
  LockRounded,
} from "@mui/icons-material";

export interface Service {
  titleKey: string;
  descriptionKey: string;
  icon: any;
  gradient: string;
}

export const services: Service[] = [
  {
    titleKey: "services.tradingSolutions.title",
    descriptionKey: "services.tradingSolutions.description",
    icon: TrendingUpRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00B8D4 50%, #0097A7 100%)",
  },
  {
    titleKey: "services.blockchain.title",
    descriptionKey: "services.blockchain.description",
    icon: LockRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00D4E5 50%, #00C4D4 100%)",
  },
  {
    titleKey: "services.mqlBots.title",
    descriptionKey: "services.mqlBots.description",
    icon: FlashOnRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #26C6DA 50%, #4DD0E1 100%)",
  },
  {
    titleKey: "services.mobileApps.title",
    descriptionKey: "services.mobileApps.description",
    icon: SmartphoneRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #18FFFF 50%, #69FFFF 100%)",
  },
  {
    titleKey: "services.webDevelopment.title",
    descriptionKey: "services.webDevelopment.description",
    icon: PublicRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00ACC1 50%, #0097A7 100%)",
  },
  {
    titleKey: "services.customSolutions.title",
    descriptionKey: "services.customSolutions.description",
    icon: CodeRounded,
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00BCD4 50%, #80DEEA 100%)",
  },
];
