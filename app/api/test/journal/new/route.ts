// app/api/journal/new/route.ts

import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
    try {
      const body = await req.json()
      console.log("Received body:", body)
  
      const { content, emotion, userId } = body
  
      const entry = await prisma.entry.create({
        data: {
          content,
          emotions: [emotion], // Store the emotion as an array
          userId,
          sentiment: "neutral", // Provide a default or dynamic value for sentiment
          user: { connect: { id: userId } }, // Connect the user by their ID (removed, not valid)
        },
      });
  
      console.log("Entry saved:", entry)
  
      return NextResponse.json(entry, { status: 201 })
    } catch (error) {
      console.error("Error saving journal entry:", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
  }
  

  export async function GET() {
    try {
      console.log("✅ Available Prisma models:", Object.keys(prisma)); // 👈 Add this line
  
      const entries = await prisma.entry.findMany({
        orderBy: { createdAt: "desc" },
      });
  
      return NextResponse.json(entries, { status: 200 });
    } catch (error) {
      console.error("Error fetching journal entries:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
