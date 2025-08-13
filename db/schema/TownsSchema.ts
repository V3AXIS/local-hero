import { pgTable, serial,text,boolean, geometry } from 'drizzle-orm/pg-core';
import { user } from './AuthSchema';

export const towns = pgTable('towns', {
    id: serial('id').primaryKey(),
    userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
    country:text('country'),
    country_code:text('country_code'),
    state:text('state'),
    state_district:text('state_district'),
    town:text('town'),
    municipality:text('municipality'),
    display_name:text('display_name'),
    lat:text('lat'),
    lon:text('lon'),
    name:text('name'),
    onboardingCompleted: boolean("onboarding_completed").notNull().default(false),
    polygon:geometry('polygon',{type:'polygon',srid:4326}),
});