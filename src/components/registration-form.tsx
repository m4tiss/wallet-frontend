import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/auth/useRegister";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { mutate } = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warning("Hasła muszą być takie same");
      return;
    }
    mutate(
      { email, name, password },
      {
        onSuccess: () => {
          toast.success("Użytkownik stworzony pomyślnie");
          navigate("/login");
        },
        onError: () => {
          toast.error("Brak połączenia z serwerem");
        },
      }
    );
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Zarejestruj się</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Wpisz swoje dane, aby założyć konto
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Nazwa Użytkownika</Label>
          <Input
            id="username"
            type="text"
            placeholder="Wpisz swoją nazwę użytkownika"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@przyklad.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Hasło</Label>
          <Input
            id="password"
            type="password"
            placeholder="Wpisz hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Potwierdź hasło"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Zarejestruj się
        </Button>
      </div>
      <div className="text-center text-sm">
        Masz już konto?{" "}
        <a href="/login" className="underline underline-offset-4">
          Zaloguj się
        </a>
      </div>
    </form>
  );
}
