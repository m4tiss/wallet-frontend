import { useMutation } from '@tanstack/react-query'
import axios from '../../config/axios'

type RegisterData = {
  email: string
  name: string
  password: string
}

export function useRegister() {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await axios.post('/accounts/register/', data)
      return response.data
    },
  })
}
