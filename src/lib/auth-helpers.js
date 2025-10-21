'use client'

import { useSession, signIn, signOut, getSession } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession()
  const isLoading = status === "loading"
  const isAuthenticated = status === "authenticated"

  return {
    session,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
  }
}

export async function getCurrentUser() {
  try {
    const session = await getSession()
    return session?.user
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}