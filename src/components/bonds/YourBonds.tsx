import YourBondCard from "@/components/bonds/YourBondCard";
import useUserBonds from "@/hooks/useUserBonds";
import { YourBondCardProps } from "@/interfaces/YourBondCardProps";
const YourBonds = () => {
  const { data } = useUserBonds();
  console.log(data)
  return (
    <div className="flex justify-center xl:justify-start flex-wrap gap-4">
      {data?.map((bond: YourBondCardProps, index: number) => (
        <div key={bond.id || index}>
          <YourBondCard bond={bond} />
        </div>
      ))}
    </div>
  );
};

export default YourBonds;
