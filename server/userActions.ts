"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { getSession } from "./getSession";
import { user } from "@/db/schema";

export const getCurrentUser = (async () => {
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
});
