'use client'

export function DemoCredentials() {
  const credentials = `username=developerzohaib@email.com
password=developerzohaib`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(credentials)
    alert('Credentials copied!')
  }

  return (
    <div className="border rounded-lg p-4 bg-gray-50 text-sm">
      <p className="font-semibold mb-2">Demo Credentials</p>

      <div className="font-mono text-gray-700">
        <p>username: <span className="font-semibold">developerzohaib@email.com</span></p>
        <p>password: <span className="font-semibold">developerzohaib</span></p>
      </div>

      <button
        onClick={copyToClipboard}
        className="mt-3 w-full rounded-md bg-black text-white py-2 text-sm hover:opacity-90"
      >
        Copy Credentials
      </button>
    </div>
  )
}
