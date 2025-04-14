import { useMutation } from '@tanstack/react-query'
import axios from '../config/axios'

type BondData = {
    amount:number,
    name:string,
    duration_months:number,
    type: string
    interest_type: string
    first_period_interest: number,
    margin: number | null
}

export function useCreateUserBond() {
  return useMutation({
    mutationFn: async (data: BondData) => {
      const response = await axios.post('/userBonds/', data)
      return response.data
    },
  })
}
