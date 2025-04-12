// app/dashboard/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs"

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to your journal ✍️</h1>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to access your journal.</p>
      </SignedOut>
    </>
  )
}
