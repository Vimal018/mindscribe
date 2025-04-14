// pages/api/entry.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { findOrCreateUser } from "@/lib/findOrCreateUser";
import { analyzeEntry } from "@/lib/analyzeEntry"; // Import the AI analysis function

// POST: Create a new journal entry
export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await findOrCreateUser(userId);
    const { content, tags = [] } = await req.json();

    // ✅ AI analysis of the content
    const aiResult = await analyzeEntry(content);
    const sentiment = aiResult?.sentiment || "neutral";
    const emotions = aiResult?.emotions || [];

    // ✅ Save journal entry with sentiment + emotions
    const entry = await prisma.entry.create({
      data: {
        userId: user.id,
        content,
        tags,
        sentiment,
        emotions,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("POST /api/entry error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// GET: Fetch all journal entries for logged-in user
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }, // Find user by Clerk ID
    });

    if (!user) {
      return NextResponse.json({ error: "User not found in DB" }, { status: 404 });
    }

    const entries = await prisma.entry.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("GET /api/test/entry error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
