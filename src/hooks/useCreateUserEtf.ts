import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '../config/axios'
import { useAuth } from "@/context/AuthContext";

type EtfData = {
  name: string;
  purchase_date: string;
  purchase_price: string;
  units: string;
}

export function useCreateUserEtf() {
  const { token } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: EtfData) => {
      const response = await axios.post('/etf/iusq_de', data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        }
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['UserEtf'] });
    },
  })
}

