import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Zarejestruj się</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Wpisz swoj dane, aby założyć konto
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Nazwa Użytkownika</Label>
          <Input
            id="username"
            type="text"
            placeholder="Wpisz swoją nazwę użytkownika"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@przyklad.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Hasło</Label>
          <Input
            id="password"
            type="password"
            placeholder="Wpisz hasło"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Potwierdź hasło"
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
