import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, TrendingUp, TrendingDown } from "lucide-react";
import { YourEtfCardProps } from "@/interfaces/YourEtfCardProps";
import iusqImage from "@/assets/iusq_de.png"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const YourEtfCard = ({ etf }: { etf: YourEtfCardProps }) => {
  const percent = parseFloat(etf.percent_change);
  const isPositive = percent >= 0;
  const changeColor = isPositive ? "text-lime-500" : "text-red-500";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  const valueChange = Number(etf.current_value) - Number(etf.initial_value);
  const valueChangeColor = valueChange >= 0 ? "text-lime-500" : "text-red-500";

  return (
    <Card className="w-80 min-h-36 shadow-md hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer">
        <CardHeader>
          <CardTitle className="flex justify-center items-center gap-2 text-xl font-semibold">
            <Avatar>
              <AvatarImage src={iusqImage} />
            </Avatar>
            <div>IUSQ.DE</div>
          </CardTitle>
        </CardHeader>

      <CardContent className="space-y-3">

        <div className="w-full flex flex-col justify-center items-center gap-2 text-lg font-semibold">
          <div className="flex flex-col">
            <span className="text-foreground text-xl">{etf.initial_value} zł</span>
            <span className="text-xs">Wartość początkowa</span>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-xl">{etf.current_value} zł</span>
            <span className="text-xs">Wartość obecna</span>
          </div>
          <div className="flex flex-col">
            <span className={`${changeColor} flex items-center gap-1`}>
              <TrendIcon className="w-5 h-5" />
              {etf.percent_change}%
            </span>
            <span className="text-xs">Procentowa zmiana</span>
          </div>
          <div className="flex flex-col">
            <span className={`${valueChangeColor} text-xl`}>
              {valueChange.toFixed(4)} zł
            </span>
            <span className="text-xs">Zmiana wartości</span>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-xl">{etf.units}</span>
            <span className="text-xs">Jednostki</span>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-xl">{etf.purchase_price} zł</span>
            <span className="text-xs">Cena zakupu</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="text-sm text-muted-foreground flex flex-col gap-1">
        <div className="text-sm text-muted-foreground flex justify-center items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          <span>{new Date(etf.purchase_date).toLocaleDateString("pl-PL")}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default YourEtfCard;
