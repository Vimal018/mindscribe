// /lib/findOrCreateUser.ts
import { prisma } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

export // In the findOrCreateUser function
async function findOrCreateUser(userId: string) {
  let user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    const client = await clerkClient(); // Await the Clerk client if it's a function
    const userData = await client.users.getUser(userId) as { email?: string }; // Get user details from Clerk with proper typing
    console.log("Clerk User Data: ", userData); // Log the Clerk data for debugging
    
    user = await prisma.user.create({
      data: {
        clerkId: userId,
        email: userData.email || "default@gmail.com", // Use Clerk's email
      },
    });

    console.log("Created user in DB: ", user); // Log the newly created user
  }

  return user;
}


