import { prisma } from '@/lib/prisma';

async function test() {
  console.log("Available Prisma models:", Object.keys(prisma)); // 👈 Add this

  try {
    const entries = await prisma.journalEntry.findMany(); // ✅ use lowercase
    console.log(entries);
  } catch (error) {
    console.error("Error fetching journal entries:", error);
  }
}

test();
