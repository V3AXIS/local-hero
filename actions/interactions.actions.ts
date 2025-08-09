"use server";

import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { interactions } from "@/db/schema";

export const toggleInteraction = async (
    postId: number,
    userId: string,
    type: 'Upvote' | 'Rsvp' | 'Kudo',
    path: string
) => {
    if (!postId || !userId || !type) {
        return { error: "Missing required parameters" };
    }

    try {
        const existingInteraction = await db.query.interactions.findFirst({
            where: and(
                eq(interactions.postId, postId),
                eq(interactions.userId, userId),
                eq(interactions.type, type)
            )
        });

        if (existingInteraction) {
            await db.delete(interactions).where(eq(interactions.id, existingInteraction.id));
        } else {
            await db.insert(interactions).values({ postId, userId, type });
        }

        revalidatePath(path);
        return { success: true };
    } catch (error) {
        console.error(`Error toggling ${type}:`, error);
        return { error: `Failed to process ${type} interaction` };
    }
};