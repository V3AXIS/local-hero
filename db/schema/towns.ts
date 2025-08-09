import { pgTable, varchar, serial } from 'drizzle-orm/pg-core';

export const towns = pgTable('towns', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    state: varchar('state', { length: 2 }).notNull(),
    country: varchar('country', { length: 2 }).notNull(),
});