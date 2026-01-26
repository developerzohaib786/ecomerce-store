'use client'

export function DemoCredentials() {
  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text)
    alert('Copied!')
  }

  return (
    <div className="border rounded-lg p-4 bg-gray-50 text-sm min-w-[320px]">
      <p className="font-semibold mb-3 text-black">Demo Credentials</p>

      <div className="space-y-3 font-mono text-gray-800">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate">
            username: <strong>developerzohaib@email.com</strong>
          </span>
          <button
            onClick={() => copyText('developerzohaib@email.com')}
            className="shrink-0 rounded-md bg-black text-white px-3 py-1 text-xs hover:opacity-90"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="truncate">
            password: <strong>developerzohaib</strong>
          </span>
          <button
            onClick={() => copyText('developerzohaib')}
            className="shrink-0 rounded-md bg-black text-white px-3 py-1 text-xs hover:opacity-90"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}
