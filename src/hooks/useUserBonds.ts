import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import axios from "@/config/axios";

const useUserBonds = () => {
  const { token } = useAuth();

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/userBonds/", {
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
    queryKey: ['UserBonds'],
    queryFn: fetchData,
  });

  return { data, error, isLoading };
};

export default useUserBonds;
