import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import axios from "@/config/axios";

const useBonds = () => {
  const { token } = useAuth();

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/bonds/", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      return data;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['bonds'],
    queryFn: fetchData,
  });

  return { data, error, isLoading };
};

export default useBonds;
