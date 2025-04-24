import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { EtfCardProps } from "@/interfaces/EtfCardProps";
import iusqImage from "@/assets/iusq_de.png";
import BuyEtfDrawer from "./BuyEtfDrawer";

const Iusq = ({ etf }: { etf: EtfCardProps }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsDrawerOpen(true)}
        className="w-80 h-auto shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative overflow-hidden bg-black text-white"
      >
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
            <span className="text-white text-4xl">{etf?.bid}</span>
            <span className="font-normal text-sm">Kurs sprzedaży</span>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-white text-4xl">{etf?.ask}</span>
            <span className="font-normal text-sm">Kurs kupna</span>
          </div>
        </CardContent>
      </Card>
      <BuyEtfDrawer
        etf={etf}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Iusq;
