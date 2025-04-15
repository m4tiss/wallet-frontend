import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { DashboardCardProps } from "@/interfaces/DashboardCardProps";
import cardBackground from "@/assets/cardBackground.jpg";

const DashboardCard = ({
  title,
  value,
  percentage,
  trend,
  trendColor,
  specialBg = false,
}: DashboardCardProps) => {
  const backgroundImage = specialBg ? `url(${cardBackground})` : "none";

  return (
    <Card
      className={`w-80 xl:flex-1 
    ${specialBg ? "text-white" : ""} group`}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl">{value} zł</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <div className={`text-[${trendColor}] flex gap-1`}>
            {trend === "up" ? (
              <TrendingUp
                color={trendColor}
                className="group-hover:translate-y-[-5px] transition-transform duration-300"
              />
            ) : (
              <TrendingDown
                color={trendColor}
                className="group-hover:translate-y-[5px] transition-transform duration-300"
              />
            )}
            <p>{percentage}%</p>
          </div>
          <p> wygenerowanego zysku</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DashboardCard;
