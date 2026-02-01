import { LoginForm } from "@/components/login-form"
import { FiCopy } from "react-icons/fi" // Using react-icons for copy icon
import { useState } from "react"

export default function LoginPage() {
  // Demo credentials
  const demoCredentials = {
    email: "demo@example.com",
    password: "password123",
  }

  // Copy function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!") // optional feedback
  }

  return (
    <div className="bg-white min-h-svh overflow-x-auto">
      <div className="flex justify-center px-6 py-10">
        <div className="flex flex-col gap-6 min-w-max">
          {/* Login Form */}
          <LoginForm />

          {/* Demo Credentials inside LoginForm div */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <h4 className="font-semibold mb-2">Demo Credentials</h4>
            <div className="flex items-center justify-between mb-1">
              <span>Email: {demoCredentials.email}</span>
              <FiCopy
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => copyToClipboard(demoCredentials.email)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Password: {demoCredentials.password}</span>
              <FiCopy
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => copyToClipboard(demoCredentials.password)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
