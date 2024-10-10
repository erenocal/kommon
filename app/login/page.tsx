import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Log in to StudentStay</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
        <Button className="w-full">Log in</Button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don't have an account? <Link href="/signup" className="text-black underline">Sign up</Link>
      </p>
    </div>
  )
}