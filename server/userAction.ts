"use server";

import { db } from "@/db";
import { eq, sql } from "drizzle-orm";
import { getSession } from "./getSession";
import { towns, user } from "@/db/schema";

export const getCurrentUser = async () => {
  const session = await getSession();

  if (!session?.user?.id) {
    return null;
  }

  try {
    const currentUser = await db.query.user.findFirst({
      where: eq(user.id, session.user.id),
    });

    return currentUser ?? null;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

export async function checkUserOnboarding(userId: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    return null;
  }
  try {
    const data = await db.query.towns.findFirst({
      columns:{
        onboardingCompleted: true
      },
      where: eq(towns.userId, userId),
    });
    if (data){
      return {
        hasProfile:true,
        onboardingCompleted: data.onboardingCompleted
      }
    }
    return {
      hasProfile:false,
      onboardingCompleted: false
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
    return {
      hasProfile:false,
      onboardingCompleted: false
    }
  }
}
export async function completeOnboarding(data:any ) {
  const session = await getSession();
  if (!session?.user?.id) {
    return null;
  }
  try {
    await db.insert(towns).values({
      userId:session.user.id,
      ...data,
      polygon:data.polygon ? sql`ST_GeomFromText(${data.polygon}, 4326)` : null,
      onboardingCompleted:true
    });
    return true;
  } catch (error) {
    console.error("Error completing onboarding:", error);
    return null;
  }
}