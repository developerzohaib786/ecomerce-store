'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import LoginImg from '@/public/login-page.jpg'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result.error)
      setLoading(false)
    } else {
      router.push('/dashboard/allposts')
    }
  }

  return (
    <div
      className={cn("flex flex-col gap-6 bg-white min-h-screen p-4", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0 bg-white border-neutral-700">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-black">Admin Login</h1>
                <p className="text-black">Login to Admin Panel</p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-white border-neutral-600 text-black placeholder-black focus:ring-[#FF5F1F] focus:border-[#FF5F1F]"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password" className="text-black">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-white border-neutral-600 text-black placeholder-black focus:ring-[#FF5F1F] focus:border-[#FF5F1F]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF5F1F] text-white hover:bg-[#f59772] font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>

          <div className="bg-black relative hidden md:block">
            <img
              src={LoginImg.src}
              alt="Login Background"
              className="absolute inset-0 h-full w-full object-cover brightness-[0.3] grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
