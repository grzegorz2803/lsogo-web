import { LoginForm } from "../components/Auth/LoginForm";

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
