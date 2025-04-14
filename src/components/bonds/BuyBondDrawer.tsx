
import { BondCardProps } from "@/interfaces/BondCardProps";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button";

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


type BuyBondDrawerProps = {
    bond: BondCardProps
    open: boolean
    onOpenChange: (open: boolean) => void
    closeDrawer: () => void
  }

const BuyBondDrawer = ({ bond, open, onOpenChange,closeDrawer }: BuyBondDrawerProps) => {

  return (

      <Drawer open={open} onOpenChange={onOpenChange}>
  <DrawerTrigger />
  <DrawerContent className="flex justify-center items-center p-4">
    <DrawerHeader className="w-full max-w-sm mx-auto text-center gap-6">
      <DrawerTitle className="flex flex-col text-center">
        <div className="text-4xl font-semibold">{bond.first_period_interest}%</div>
        <div className="text-xl text-gray-700">{bond.name}</div>
        <div className="text-sm text-gray-600 mt-4">
          <p>
            <span className="font-medium">Czas trwania:</span> {bond.duration_months} miesięcy
          </p>
          <p>
            <span className="font-medium">Rodzaj oprocentowania:</span>{" "}
            {bond.interest_type === "fixed" ? "Stałoprocentowe" : "Zmiennoprocentowe"}
          </p>
          {bond.interest_type === "variable" && (
            <p>
              <span className="font-medium">Marża:</span> {bond.margin}%
            </p>
          )}
        </div>
      </DrawerTitle>

      <DrawerDescription className="mt-6">
        <Label htmlFor="number" className="block text-sm font-medium text-gray-700">Ilość obligacji</Label>
        <Input type="number" id="number" className="mt-2 p-2 border border-gray-300 rounded-md w-full" />
      </DrawerDescription>
    </DrawerHeader>

    <DrawerFooter className="flex justify-between mt-6 mx-auto w-full max-w-sm">
      <Button className="w-full">Kup</Button>
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

export default BuyBondDrawer;
