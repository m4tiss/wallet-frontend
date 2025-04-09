export interface DashboardCardProps {
    title: string;
    value: string;
    percentage: string;
    trend: "up" | "down";
    trendColor: string;
    specialBg?: boolean;
  }