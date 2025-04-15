import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BondCardProps } from "@/interfaces/BondCardProps";

import BuyBondDrawer from "./BuyBondDrawer";

const BuyBondCard = ({ bond }: { bond: BondCardProps }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Card
        onClick={() => setIsDrawerOpen(true)}
        className="w-80 h-80 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        <CardHeader>
          <p className="text-4xl text-center font-semibold">
            {bond.first_period_interest}%
          </p>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="text-xl font-semibold">{bond.name}</CardTitle>
          <p>
            <span className="font-medium">Czas trwania:</span>{" "}
            {bond.duration_months} miesięcy
          </p>
          <p>
            <span className="font-medium">Rodzaj oprocentowania:</span>{" "}
            {bond.interest_type === "fixed"
              ? "Stałoprocentowe"
              : "Zmiennoprocentowe"}
          </p>
          {bond.interest_type === "variable" && (
            <p>
              <span className="font-medium">Marża:</span> {bond.margin}%
            </p>
          )}
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
