// components/JournalEntryForm.tsx

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useUser } from "@clerk/nextjs"

export default function JournalEntryForm() {
  const router = useRouter()
  const { user } = useUser()

  const [content, setContent] = useState("")
  const [emotion, setEmotion] = useState("happy")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/test/journal/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          emotion,
          userId: user?.id, // from Clerk
        }),
      })

      if (!response.ok) {
        throw new Error("Something went wrong while saving.")
      }

      // Reset form & redirect
      setContent("")
      setEmotion("happy")
      router.push("/journal") // Go to journal list
    } catch (err: any) {
      setError(err.message || "Failed to submit entry.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-6">
      <div>
        <Label htmlFor="content">What’s on your mind?</Label>
        <Textarea
          id="content"
          placeholder="Write your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[150px]"
          required
        />
      </div>

      <div>
        <Label htmlFor="emotion">How do you feel?</Label>
        <select
          id="emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="angry">😡 Angry</option>
          <option value="anxious">😰 Anxious</option>
          <option value="calm">😌 Calm</option>
          <option value="excited">😄 Excited</option>
        </select>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Journal Entry"}
      </Button>
    </form>
  )
}
