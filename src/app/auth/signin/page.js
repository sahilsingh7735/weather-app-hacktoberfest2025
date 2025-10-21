'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {/* <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full"
            variant="outline"
          >
            Sign in with Google
          </Button> */}

          <Button
            onClick={() => signIn("github", { callbackUrl: "/weather" })}
            className="w-full"
            variant="outline"
          >
            Sign in with GitHub
          </Button>

          {/* <Button
            onClick={() => signIn("gitlab", { callbackUrl: "/" })}
            className="w-full"
            variant="outline"
          >
            Sign in with GitLab
          </Button> */}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Email/Password form will be added here */}
          <Button
            onClick={() => signIn("credentials", { callbackUrl: "/" })}
            className="w-full"
          >
            Sign in with Email
          </Button>
        </div>
      </div>
    </div>
  )
}