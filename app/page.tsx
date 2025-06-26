// app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-10 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MindScribe 🧠</h1>
        <p className="text-lg mb-6">Your private AI-powered journal & mood tracker</p>
        <a href="/dashboard" className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
          Go to Dashboard
        </a>
      </div>
    </main>
  );
}
