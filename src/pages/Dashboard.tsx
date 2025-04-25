import DashboardCard from "@/components/dashboard/DashboardCard";
import MoneyChart from "@/components/dashboard/MoneyChart";
import InformationPanel from "@/components/dashboard/InformationPanel";
import { investmentData } from "@/data/InformationItems";
import useUserDashboard from "@/hooks/useUserDashboard";
import PropagateLoader from "react-spinners/PropagateLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Dashboard = () => {
  const { bondData, etfData, total_percent_change, isLoading } =
    useUserDashboard();

  return (
    <div className="flex flex-col xl:mt-25 xl:mb-0 mt-5 mb-25 gap-6">
      <h2 className="text-4xl my-4 text-center xl:text-start">Strona główna</h2>
      <div className="flex gap-4 flex-wrap justify-center xl:justify-start">
        {isLoading ? null : (
          <DashboardCard
            title="Całkowite oszczędności"
            value={(bondData?.total_value ?? 0) + (etfData?.total_value ?? 0)}
            percentage={total_percent_change.toFixed(2).toString()}
            specialBg={true}
          />
        )}

        {isLoading ? (
          <div className="flex flex-1 justify-center items-center h-44">
            <PropagateLoader size={15} color="#000000" />
          </div>
        ) : (
          <DashboardCard
            title="Obligacje"
            value={bondData?.total_value ?? 0}
            percentage={bondData?.percent ?? 0}
          />
        )}
        {isLoading ? null : (
          <DashboardCard
            title="Etf"
            value={etfData?.total_value ?? 0}
            percentage={etfData?.percent ?? 0}
          />
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {isLoading ? (
          <div className="flex flex-1 justify-center items-center w-80">
            <ClimbingBoxLoader size={15} color="#000000" />
          </div>
        ) : (
          <MoneyChart
            data={{
              bonds: Number(bondData?.total_value ?? 0),
              etf: Number(etfData?.total_value ?? 0),
            }}
          />
        )}
        {investmentData.map((item, index) => (
          <InformationPanel
            key={index}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
