import { Card } from "@/components/ui/card";
import useBonds from "@/hooks/useBonds";
import BondCard from "@/components/bonds/BondCard";
import { BondCardProps } from "@/interfaces/BondCardProps";

const Bonds = () => {
  const { data, error, isLoading } = useBonds();

  console.log(data);

  return (
    <div className="flex flex-col xl:mt-25 xl:mb-0 mt-5 mb-25 gap-6">
      <h2 className="text-4xl my-4 text-center xl:text-start">
        Twoje obligacje
      </h2>
      <Card className="w-96" />
      <h2 className="text-4xl my-4 text-center xl:text-start">Kup obligacje</h2>
      <div className="w-full">
        <div className="flex flex-wrap gap-y-4">
          {data?.map((bond: BondCardProps, index: number) => (
            <div
              className="w-full flex justify-center xl:justify-start md:w-1/2 lg:w-1/3"
              key={bond.id || index}
            >
              <BondCard bond={bond} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonds;
