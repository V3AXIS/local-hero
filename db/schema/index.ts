import { relations } from 'drizzle-orm';
import { towns } from './towns';
import { posts } from './posts';
import { interactions } from './interactions';
import { user } from './AuthSchema';

export const usersRelations = relations(user, ({ many }) => ({
    posts: many(posts),
    interactions: many(interactions),
}));

export const townsRelations = relations(towns, ({ many }) => ({
    posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
    author: one(user, {
        fields: [posts.authorId],
        references: [user.id],
    }),
    town: one(towns, {
        fields: [posts.townId],
        references: [towns.id],
    }),
    interactions: many(interactions),
}));

export const interactionsRelations = relations(interactions, ({ one }) => ({
    post: one(posts, {
        fields: [interactions.postId],
        references: [posts.id],
    }),
    user: one(user, {
        fields: [interactions.userId],
        references: [user.id],
    }),
}));

// Export all schemas and relations
export * from './towns';
export * from './posts';
export * from './interactions';
export * from "./AuthSchema";
