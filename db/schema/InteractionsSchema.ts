import { pgTable, serial, integer, text,pgEnum } from 'drizzle-orm/pg-core';
import { posts } from './PostsSchema';
import { user } from './AuthSchema';

export const interactionTypeEnum = pgEnum('interaction_type', ['Upvote', 'Rsvp', 'Kudo']);

export const interactions = pgTable('interactions', {
    id: serial('id').primaryKey(),
    postId: integer('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
    userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    type: interactionTypeEnum('type').notNull(),
});