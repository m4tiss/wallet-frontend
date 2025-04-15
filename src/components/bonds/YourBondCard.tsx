import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const YourBondCard = () => {
  return (
    <>
      <Card className="w-60 h-36 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardHeader>
          <div className=" w-full flex justify-center items-center gap-1 text-3xl text-center font-semibold">
            <p>3000,00</p>
            <p>+</p>
            <p className="text-lime-400">0,86</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="text-xl font-semibold">TOS</CardTitle>
        </CardContent>
      </Card>
    </>
  );
};

export default YourBondCard;
