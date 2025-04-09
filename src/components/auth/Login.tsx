import { LoginForm } from "@/components/auth/login-form";
import loginImage from "@/assets/loginImage.jpg"
const Login = () => {
  return (
    <div className="h-screen w-full">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <img
            src={loginImage}
            alt="loginImage"
            className="absolute h-full w-full object-cover brightness-[0.6] "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
