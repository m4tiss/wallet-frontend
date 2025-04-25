import { EtfCardProps } from "@/interfaces/EtfCardProps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCreateUserEtf } from "@/hooks/useCreateUserEtf";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { toast } from "sonner";
import { useState } from "react";

type BuyEtfDrawerProps = {
  etf: EtfCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeDrawer: () => void;
};

const BuyEtfDrawer = ({
  etf,
  open,
  onOpenChange,
  closeDrawer,
}: BuyEtfDrawerProps) => {
  const { mutate } = useCreateUserEtf();
  const [price, setPrice] = useState<string>("");
  const [units, setUnits] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [euroExchangeRate, setEuroExchangeRate] = useState<string>("");

  const handleSubmit = () => {
    mutate(
      {
        name: "IUSQ.DE",
        purchase_date: date,
        purchase_price: price,
        units: units,
        euro_exchange_rate: euroExchangeRate,
      },
      {
        onSuccess: () => {
          toast.success("Etf zakupiony pomyślnie!");
          closeDrawer();
        },
        onError: () => {
          toast.error("Zakup etf się nie powiódł!");
          closeDrawer();
        },
      }
    );
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger />
      <DrawerContent className="flex justify-center items-center p-4 ">
        <DrawerHeader className="w-full max-w-sm mx-auto text-center gap-1">
          <DrawerTitle className="flex flex-col text-center">
            <div className="text-4xl font-semibold">IUSQ.DE</div>
          </DrawerTitle>

          <DrawerDescription className="mt-6 space-y-4 text-left">
            <div>
              <Label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Cena za 1 wolumen
              </Label>
              <Input
                type="number"
                step="0.01"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div>
              <Label htmlFor="units" className="block text-sm font-medium text-gray-700">
                Ilość wolumenów
              </Label>
              <Input
                type="number"
                step="0.0001"
                id="units"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div>
              <Label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Data zakupu
              </Label>
              <Input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div>
              <Label htmlFor="euroExchangeRate" className="block text-sm font-medium text-gray-700">
                Kurs euro (EUR/PLN)
              </Label>
              <Input
                type="number"
                step="0.0001"
                id="euroExchangeRate"
                value={euroExchangeRate}
                onChange={(e) => setEuroExchangeRate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="flex justify-between mt-6 mx-auto w-full max-w-sm">
          <Button onClick={handleSubmit} className="w-full">
            Kup
          </Button>
          <DrawerClose>
            <Button
              className="w-full mt-2 border-gray-300 text-gray-700 hover:bg-gray-200"
              variant="outline"
              onClick={closeDrawer}
            >
              Anuluj
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BuyEtfDrawer;
