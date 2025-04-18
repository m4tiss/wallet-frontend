import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { YourBondCardProps } from "@/interfaces/YourBondCardProps";
import { CalendarIcon, TrendingUp } from "lucide-react";

const YourBondCard = ({ bond }: { bond: YourBondCardProps }) => {
  return (
    <Card className="min-w-80 min-h-36 shadow-md hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{bond.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="w-full flex justify-center items-end gap-2 text-2xl font-semibold">
          <span className="text-foreground">{(bond.amount * 100).toFixed(2)} zł</span>
          <span className="text-muted-foreground">+</span>
          <span className="text-lime-500 flex items-center gap-1">
            <TrendingUp className="w-5 h-5" />
            {bond.generated_money.toFixed(2)} zł
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <div className="w-full">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(bond.start_date).toLocaleDateString("pl-PL")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(bond.end_date).toLocaleDateString("pl-PL")}</span>
            </div>
          </div>

          <Progress value={Number(bond.percent_progress)} />
          <p className="text-sm text-muted-foreground mt-1">
            Postęp: <span className="font-medium">{Number(bond.percent_progress).toFixed(2)}%</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default YourBondCard;
