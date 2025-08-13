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
    muncipality:text('muncipality'),
    display_name:text('display_name'),
    lat:text('lat'),
    lon:text('lon'),
    name:text('name'),
    onboardingCompleted: boolean("onboarding_completed").notNull().default(false),
    polygon:geometry('polygon',{type:'point',srid:4326}),
});