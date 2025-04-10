import DashboardCard from "@/components/dashboard/DashboardCard";
import MoneyChart from "@/components/dashboard/MoneyChart";
const Dashboard = () => {
  return (
    <div className="flex flex-col xl:mt-25 xl:mb-0 mt-5 mb-25 gap-6">
      <h2 className="text-4xl my-4 text-center xl:text-start">Strona główna</h2>
      <div className="flex gap-4 flex-wrap justify-center xl:justify-start">
        <DashboardCard
          title="Całkowite oszczędności"
          value="24 489 zł"
          percentage="4.3"
          trend="up"
          trendColor="#227755"
          specialBg = {true}
        />
        <DashboardCard
          title="Obligacje"
          value="4 489 zł"
          percentage="5.3"
          trend="up"
          trendColor="#227755"
        />
        <DashboardCard
          title="Etf"
          value="2 489 zł"
          percentage="23.3"
          trend="down"
          trendColor="#d70000"
        />
        <DashboardCard
          title="Zysk"
          value="2 123 zł"
          percentage="13.3"
          trend="up"
          trendColor="#227755"
        />
      </div>
      <div className="flex">
        <MoneyChart/>
      </div>
    </div>
  );
};

export default Dashboard;
