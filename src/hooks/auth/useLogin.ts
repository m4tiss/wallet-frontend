import { useMutation } from '@tanstack/react-query'
import axios  from "../../config/axios"

type LoginData = {
  email: string
  password: string
}

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await axios.post('/accounts/login/', data)
      return response.data
    },
  })
}
