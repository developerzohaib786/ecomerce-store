import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  const credentials = `username=developerzohaib@email.com
password=developerzohaib`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(credentials)
    alert("Credentials copied!")
  }

  return (
    <div className="bg-white flex min-h-svh flex-col items-center justify-center p-6 md:p-10 overflow-y-hidden">
      <div className="w-full max-w-sm md:max-w-3xl p-6 space-y-4">

        {/* Credentials Box */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold mb-2">Demo Credentials</p>

          <div className="font-mono text-gray-700">
            <p>username: <span className="font-semibold">developerzohaib@email.com</span></p>
            <p>password: <span className="font-semibold">developerzohaib</span></p>
          </div>

          <button
            onClick={copyToClipboard}
            className="mt-3 w-full rounded-md bg-black text-white py-2 text-sm hover:opacity-90 transition"
          >
            Copy Credentials
          </button>
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  )
}
