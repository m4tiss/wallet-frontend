import useEtf from "@/hooks/useEtf";
import HashLoader from "react-spinners/HashLoader";
import Iusq from "@/components/etf/Iusq";

const Etf = () => {
  const { data, isLoading } = useEtf();
  console.log(data);
  return (
    <div className="flex flex-col xl:mt-25 xl:mb-0 mt-5 mb-25 gap-6">
      <h2 className="text-4xl my-4 text-center xl:text-start">Twoje Etfy</h2>

      <h2 className="text-4xl my-4 text-center xl:text-start">Dostępne Etfy</h2>
      <div className="flex justify-center xl:justify-start">
         {isLoading ? <HashLoader className="mx-10" size={100} />: <Iusq etf={data} />}
      </div>
     
    </div>
  );
};

export default Etf;
