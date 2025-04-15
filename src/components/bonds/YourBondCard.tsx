import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {YourBondCardProps} from "@/interfaces/YourBondCardProps"

const YourBondCard = ({ bond }: { bond: YourBondCardProps }) => {
  return (
    <Card className="min-w-60 min-80 h-36 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <div className="w-full flex justify-center items-center gap-1 text-3xl text-center font-semibold">
          <p>{(bond.amount*100).toFixed(2)}</p>
          <p>+</p>
          <p className="text-lime-400">{bond.generated_money.toFixed(2)}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="text-xl font-semibold">{bond.name}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default YourBondCard;
