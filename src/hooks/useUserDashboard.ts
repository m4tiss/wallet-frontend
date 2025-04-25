import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import axios from "@/config/axios";

const useUserDashboard = () => {
  const { token } = useAuth();

  const fetchBondData = async () => {
    try {
      const { data } = await axios.get("/userBonds/totalValue/", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return data;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };

  const fetchEtfData = async () => {
    try {
      const { data } = await axios.get("/etf/totalValue/", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return data;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };
  const {
    data: bondData,
    error: bondError,
    isLoading: isLoadingBonds,
  } = useQuery({
    queryKey: ['UserBondInfo'],
    queryFn: fetchBondData,
  });

  const {
    data: etfData,
    error: etfError,
    isLoading: isLoadingEtf,
  } = useQuery({
    queryKey: ['UserEtfInfo'],
    queryFn: fetchEtfData,
  });

  const isLoading = isLoadingBonds || isLoadingEtf;
  const error = bondError || etfError;

const total_percent_change = 
  (((bondData?.total_value ?? 0) + (etfData?.total_value ?? 0)) - 
   ((bondData?.start_money ?? 0) + (etfData?.start_money ?? 0))) / 
   ((bondData?.start_money ?? 0) + (etfData?.start_money ?? 0)) * 100;
  return {
    bondData,
    etfData,
    error,
    isLoading,
    total_percent_change
  };
};

export default useUserDashboard;
