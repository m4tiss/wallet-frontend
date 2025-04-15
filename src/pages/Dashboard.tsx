import DashboardCard from "@/components/dashboard/DashboardCard";
import MoneyChart from "@/components/dashboard/MoneyChart";
import InformationPanel from "@/components/dashboard/InformationPanel";
import { investmentData } from "@/data/InformationItems";
import useUserDashboard from "@/hooks/useUserDashboard";

const Dashboard = () => {
  const { data } = useUserDashboard();
  console.log(data);
  return (
    <div className="flex flex-col xl:mt-25 xl:mb-0 mt-5 mb-25 gap-6">
      <h2 className="text-4xl my-4 text-center xl:text-start">Strona główna</h2>
      <div className="flex gap-4 flex-wrap justify-center xl:justify-start">
        <DashboardCard
          title="Całkowite oszczędności"
          value={(Number(data?.total_value ?? 0) + 2000).toString()}
          percentage={(Number(data?.percent ?? 0) + 1).toString()}
          trend="up"
          trendColor="#227755"
          specialBg={true}
        />
        <DashboardCard
          title="Obligacje"
          value={data?.total_value ?? 0}
          percentage={data?.percent ?? 0}
          trend="up"
          trendColor="#227755"
        />
        <DashboardCard
          title="Etf"
          value="2 000"
          percentage="1.00"
          trend="up"
          trendColor="#227755"
        />
        <DashboardCard
          title="Zysk"
          value="2 123 zł"
          percentage="13.3"
          trend="up"
          trendColor="#227755"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
      <MoneyChart data={{ bonds:Number(data?.total_value ?? 0), etf: 2000 }} />
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
