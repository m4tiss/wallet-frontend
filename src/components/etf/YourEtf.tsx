import YourEtfCard from "@/components/etf/YourEtfCard";
import useUserEtf from "@/hooks/useUserEtf";
import HashLoader from "react-spinners/HashLoader";
import { YourEtfCardProps } from "@/interfaces/YourEtfCardProps";

const YourEtf = () => {
  const { data, isLoading } = useUserEtf();
    console.log(data)
  return (
<div className="w-full flex flex-wrap gap-5 justify-center xl:justify-start">
  {isLoading ? (
    <HashLoader className="mx-10" size={100} />
  ) : 
  (
    data?.map((etf: YourEtfCardProps, index: number) => (
      <YourEtfCard etf={etf} key={index} />
    ))
  )
  }
</div>
  );
};

export default YourEtf;
