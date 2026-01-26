import { LoginForm } from "@/components/login-form"
import { DemoCredentials } from "@/components/DemoCredentials"

export default function LoginPage() {
  return (
    <div className="bg-white min-h-svh overflow-x-auto">
      <div className="flex justify-center px-6 py-10">
        <div className="flex gap-6 min-w-max">
          <DemoCredentials />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
