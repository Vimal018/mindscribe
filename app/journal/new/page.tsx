// app/journal/new/page.tsx

import JournalEntryForm from "@/components/JournalEntryForm"

export default function NewJournalPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">New Journal Entry</h1>
      <JournalEntryForm />
    </div>
  )
}
