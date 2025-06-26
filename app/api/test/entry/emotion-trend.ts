// API route: /api/entries/emotion-trends.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const entries = await prisma.entry.findMany({
      where: { userId },
      select: {
        createdAt: true,
        sentiment: true,
        emotions: true,
      },
      orderBy: { createdAt: "asc" },
    });

    // Format the entries for emotion trend visualization
    type Entry = {
  createdAt: Date;
  sentiment: string;
  emotions: string[];
};
const emotionData = entries.map((entry) => ({
  date: entry.createdAt.toISOString(),
  sentiment: entry.sentiment ?? "",
  emotions: entry.emotions // still string[] format
}));


    return NextResponse.json(emotionData, { status: 200 });
  } catch (error) {
    console.error("Error fetching emotion trends:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
