"use client";

import { LoginForm } from "@/components/login-form"
import { FiCopy, FiCheck } from "react-icons/fi" 
import { useState } from "react"

export default function LoginPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const demoCredentials = {
    email: "demo@example.com",
    password: "password123",
  }

  const copyToClipboard = (text: string, field: string) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      // Reset icon after 2 seconds
      setTimeout(() => setCopiedField(null), 2000);
    }
  }

  return (
    <div className="bg-slate-50 min-h-svh flex items-center justify-center p-6 w-full">
      {/* min-w-max ensures the container expands to fit the widest content */}
      <div className="flex flex-col gap-4 w-[-webkit-fill-available] bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Login to Admin Panel</h1>
          
          {/* Demo Credentials Section immediately below the title */}
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-left">
            <p className="text-blue-700 font-medium mb-2">Demo Credentials:</p>
            
            <div className="w-[900px] max-w-full mx-auto space-y-2">
              <div className="flex items-center justify-between gap-8 group">
                <span className="text-slate-600">Email: <b className="text-slate-900">{demoCredentials.email}</b></span>
                <button 
                  onClick={() => copyToClipboard(demoCredentials.email, 'email')}
                  className="p-1.5 hover:bg-blue-200 rounded transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <FiCheck className="text-green-600" /> : <FiCopy className="text-blue-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between gap-8 group">
                <span className="text-slate-600">Pass: <b className="text-slate-900">{demoCredentials.password}</b></span>
                <button 
                  onClick={() => copyToClipboard(demoCredentials.password, 'pass')}
                  className="p-1.5 hover:bg-blue-200 rounded transition-colors"
                  title="Copy Password"
                >
                  {copiedField === 'pass' ? <FiCheck className="text-green-600" /> : <FiCopy className="text-blue-500" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}