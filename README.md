# 🧠 MindScribe – AI Journal and Mood Tracker

MindScribe is a modern mental‑wellness journaling app that helps users reflect on their thoughts, track emotional trends, and receive intelligent insights using AI. It offers a secure and calming space for writing, supported by sentiment analysis and visual mood tracking.

---

## 🚀 Features

| Feature                    | Description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| 📝 **Journal Entry**       | A private, secure space to record daily thoughts and feelings.                  |
| 🧠 **Sentiment Chart**     | Line/bar charts showing how your emotional tone changes over time.              |
| 📊 **Pie Chart**           | Quick visual breakdown of emotion distribution for any selected period.         |
| ✅ **To‑Do List**           | Lightweight task list to capture actionable items that arise while journaling.  |
| 🗒 **Notes Section**       | Scratch‑pad for ideas, reflections, or follow‑ups separate from formal entries. |
| 🔒 **Secure Auth (Clerk)** | Only you can access your journal, charts, and personal data.                    |

---

## 🧑‍💻 Tech Stack

| Layer      | Tech Used                                    |
| ---------- | -------------------------------------------- |
| Frontend   | Next.js, React, Tailwind CSS, shadcn/ui      |
| Backend    | Prisma, PostgreSQL                           |
| AI Engine  | OpenRouter (GPT/Gemini models)               |
| Auth       | Clerk                                        |
| Deployment | Vercel (frontend), Railway/Render (DB & API) |

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mindscribe.git
cd mindscribe
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup `.env`

Create a `.env` file in the root:

```env
DATABASE_URL=your_postgresql_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENROUTER_API_KEY=your_openrouter_key
```

### 4. Run database setup (if needed)

```bash
npx prisma migrate dev --name init
# or just push schema
npx prisma db push
npx prisma generate
```

### 5. Start development server

```bash
npm run dev
# or
yarn dev
```

> The app runs at `http://localhost:3000`.

---

## 🛡️ Security & Privacy

MindScribe is built with privacy in mind. All data is securely stored and accessible only to the authenticated user via Clerk. No personal journal data is shared.

---

## 🧩 Roadmap

* ✅ Journal entry system
* ✅ Sentiment & emotion detection
* ✅ Sentiment line/bar and pie‑chart visualisations
* ✅ To‑do list module
* ✅ Notes section

> Future roadmap items will be added based on user feedback.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or PR.

---

## 📄 License

MIT License

---

## ✨ Acknowledgements

* [OpenRouter](https://openrouter.ai/) – AI API for sentiment analysis
* [Clerk.dev](https://clerk.dev/) – Authentication
* [Prisma](https://www.prisma.io/) – ORM for PostgreSQL
* [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) – UI Components

---

> Built with 💙 to support mindful reflection and emotional growth.
