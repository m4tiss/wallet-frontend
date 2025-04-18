import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BondCardProps } from "@/interfaces/BondCardProps";
import BuyBondDrawer from "./BuyBondDrawer";
import { Clock, Percent } from "lucide-react";

const BuyBondCard = ({ bond }: { bond: BondCardProps }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsDrawerOpen(true)}
        className="w-80 h-80 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative overflow-hidden"
      >
        <CardHeader className="flex items-center justify-end">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-xl text-3xl font-bold">
            {bond.first_period_interest}%
          </div>
        </CardHeader>

        <CardContent className="flex flex-col justify-between h-full pb-6">
          <div className="space-y-3">
            <CardTitle className="text-xl font-semibold">{bond.name}</CardTitle>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <p>
                <span className="font-medium text-foreground">Czas trwania:</span>{" "}
                {bond.duration_months} miesięcy
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Percent className="w-4 h-4" />
              <p>
                <span className="font-medium text-foreground">Rodzaj oprocentowania:</span>{" "}
                {bond.interest_type === "fixed"
                  ? "Stałoprocentowe"
                  : bond.interest_type === "variable"
                  ? "Zmiennoprocentowe"
                  : "Indeksowane"}
              </p>
            </div>

            {bond.interest_type === "variable" && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Percent className="w-4 h-4" />
                <p>
                  <span className="font-medium text-foreground">Marża:</span> {bond.margin}%
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <BuyBondDrawer
        bond={bond}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default BuyBondCard;
