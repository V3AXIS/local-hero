import { pgTable, text, varchar, timestamp, serial, integer, jsonb, pgEnum } from 'drizzle-orm/pg-core';
import { towns } from './TownsSchema';
import { user } from './AuthSchema';

export const postTypeEnum = pgEnum('post_type', ['Job', 'Issue', 'Event', 'BusinessReview', 'Rental', 'GoodDeed']);
export const issueStatusEnum = pgEnum('issue_status', ['Reported', 'In Progress', 'Resolved']);

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    content: text('content'),
    type: postTypeEnum('type').notNull(),
    authorId: text('author_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    townId: integer('town_id').notNull().references(() => towns.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    metadata: jsonb('metadata'),
});