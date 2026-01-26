import { LoginForm } from "@/components/login-form"
import { DemoCredentials } from "@/app/components/DemoCredentials"

export default function LoginPage() {
  return (
    <div className="bg-white flex min-h-svh flex-col items-center justify-center p-6 md:p-10 overflow-y-hidden">
      <div className="w-full max-w-sm md:max-w-3xl p-6 space-y-4">
        <DemoCredentials />
        <LoginForm />
      </div>
    </div>
  )
}
