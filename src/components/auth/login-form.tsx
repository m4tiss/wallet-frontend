import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useLogin } from "@/hooks/auth/useLogin"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const { mutate } = useLogin()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ email, password }, {
      onSuccess: (data) => {
        login(data.access)
        navigate('/dashboard')
      },
      onError: (err: any) => {

        if (err.response?.status === 401) {
          toast.error("Błędne dane logowania")
        } else {
          toast.error("Brak połączenia z serwerem")
        }
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Zaloguj się</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Wpisz swój adres e-mail, aby się zalogować
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@przyklad.com"  value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Hasło</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Zapomniałeś hasła?
            </a>
          </div>
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full">
          Zaloguj się
        </Button>
      </div>
      <div className="text-center text-sm">
        Nie masz konta?{" "}
        <a href="/registration" className="underline underline-offset-4">
          Zarejestruj się
        </a>
      </div>
    </form>
  )
}
