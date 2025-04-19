import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { EtfCardProps } from "@/interfaces/EtfCardProps";
import { HelpCircle } from "lucide-react";
import iusqImage from "@/assets/iusq_de.png";

const Iusq = ({ etf }: { etf: EtfCardProps }) => {
  const getTextColor = (value?: string) => {
    if (!value) return "text-white text-4xl";
    return value.startsWith("-") ? "text-red-500 text-4xl" : "text-green-500 text-4xl";
  };

  return (
    <Card className="w-80 h-auto shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative overflow-hidden bg-black text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Avatar>
            <AvatarImage src={iusqImage} />
          </Avatar>
          <div>IUSQ.DE</div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 space-y-5">
        <div className="flex flex-col justify-between items-center">
          <span className="text-white text-4xl">
            {etf?.exchange}
          </span>
          <span className="font-normal text-sm">Kurs</span>
        </div>

        <div className="flex flex-col justify-between items-center">
          <span className={getTextColor(etf?.daily_change_value)}>
            {etf?.daily_change_value}
          </span>
          <span className="font-medium">Dzienne odchylenie</span>
        </div>

        <div className="flex flex-col justify-between items-center">
          <span className={getTextColor(etf?.daily_change_percent)}>
            {etf?.daily_change_percent} %
          </span>
          <span className="font-medium text-center">Dzienne odchylenie procentowe</span>
        </div>

        <div className="flex justify-evenly gap-4">
          <div className="flex flex-col justify-between items-center">
            <span className="font-medium">Cena kupna</span>
            {etf?.ask ? (
              <span>{etf.ask}</span>
            ) : (
              <HelpCircle className="text-gray-400 w-8 h-8" />
            )}
          </div>

          <div className="flex flex-col justify-between items-center">
            <span className="font-medium">Cena sprzedaży</span>
            {etf?.bid ? (
              <span>{etf.bid}</span>
            ) : (
              <HelpCircle className="text-gray-400 w-8 h-8" />
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="w-full flex justify-center items-center text-xl text-center font-semibold">
        {etf?.time} {etf?.date}
      </CardFooter>
    </Card>
  );
};

export default Iusq;
