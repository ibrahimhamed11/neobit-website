import {
  TrendingUpRounded,
  PeopleRounded,
  CodeRounded,
  EmojiEventsRounded,
  AccessTimeRounded,
  CheckCircleRounded,
} from "@mui/icons-material";

export interface Stat {
  icon: any;
  value: number;
  suffix: string;
  labelKey: string;
  gradient: string;
  delay: number;
}

export const statistics: Stat[] = [
  {
    icon: PeopleRounded,
    value: 50,
    suffix: "+",
    labelKey: "stats.clients",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00B8D4 100%)",
    delay: 0.1,
  },
  {
    icon: CheckCircleRounded,
    value: 120,
    suffix: "+",
    labelKey: "stats.projects",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #26C6DA 100%)",
    delay: 0.2,
  },
  {
    icon: CodeRounded,
    value: 500000,
    suffix: "+",
    labelKey: "stats.linesOfCode",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #4DD0E1 100%)",
    delay: 0.3,
  },
  {
    icon: EmojiEventsRounded,
    value: 98,
    suffix: "%",
    labelKey: "stats.satisfaction",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #69FFFF 100%)",
    delay: 0.4,
  },
  {
    icon: AccessTimeRounded,
    value: 24,
    suffix: "/7",
    labelKey: "stats.support",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #18FFFF 100%)",
    delay: 0.5,
  },
  {
    icon: TrendingUpRounded,
    value: 5,
    suffix: "+",
    labelKey: "stats.experience",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #00ACC1 100%)",
    delay: 0.6,
  },
];
