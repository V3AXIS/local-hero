"use server";
import { revalidatePath } from "next/cache";
import { and, eq, ilike } from "drizzle-orm";
import { db } from "@/db";
import { posts } from "@/db/schema";

export const createPost = async (data: any, path: string) => {
    if (!data.title || !data.type || !data.authorId || !data.townId) {
        return { error: "Missing required fields" };
    }

    try {
        const newPost = await db.insert(posts).values(data).returning();
        revalidatePath(path);
        return { success: true, post: newPost[0] };
    } catch (error) {
        console.error("Error creating post:", error);
        return { error: "Failed to create post in the database" };
    }
};

export const getPostsByTown = async (townId: string, filter?: string) => {
    try {
        const whereClauses = [eq(posts.townId, Number(townId))];
        if (filter && filter !== 'all') {
            whereClauses.push(ilike(posts.type, filter));
        }

        const townPosts = await db.query.posts.findMany({
            where: and(...whereClauses),
            with: {
                author: { columns: { name: true } },
                interactions: true,
            },
            orderBy: (posts, { desc }) => [desc(posts.createdAt)],
        });

        return { success: true, posts: townPosts };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { error: "Failed to retrieve posts" };
    }
};