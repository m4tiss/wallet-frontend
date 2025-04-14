import { useMutation } from '@tanstack/react-query'
import axios from '../config/axios'
import { useAuth } from "@/context/AuthContext";

type BondData = {
  amount: number;
  name: string;
  duration_months: number;
  type: string;
  interest_type: string;
  first_period_interest: string;
  margin: string | null;
}

export function useCreateUserBond() {
  const { token } = useAuth()

  return useMutation({
    mutationFn: async (data: BondData) => {
      const response = await axios.post('/userBonds/', data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        }
      })
      return response.data
    },
  })
}
