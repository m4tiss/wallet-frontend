import YourBondCard from "@/components/bonds/YourBondCard";
import useUserBonds from "@/hooks/useUserBonds";
import { YourBondCardProps } from "@/interfaces/YourBondCardProps";

const YourBonds = () => {
  const { data } = useUserBonds();

  return (
    <div className="w-full flex flex-wrap gap-5 justify-center xl:justify-start">
      {data?.map((bond: YourBondCardProps, index:number) => (
        <YourBondCard bond={bond} key={index}/>
      ))}
    </div>
  );
};

export default YourBonds;
