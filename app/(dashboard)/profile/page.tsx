import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import ProfileClientPage from "./_components/ProfileClientPage";

// Mock data fetching functions for UI development
async function getUserPosts(userId: string) {
    console.log("Fetching posts for user:", userId);
    return [
        { id: '2', type: 'issue', title: 'Broken streetlamp on Oak & 3rd', summary: 'The light has been out for 3 days now.', user: 'Alex', timestamp: '5h ago' },
        { id: '10', type: 'issue', title: 'Pothole on Main Street', summary: 'Large pothole near the post office.', user: 'Alex', timestamp: '4d ago' },
    ];
}

async function getUserPreferences(userId: string) {
    console.log("Fetching preferences for user:", userId);
    return {
        notifications: { newJobs: true, eventReminders: true, issueUpdates: false }
    }
}

export default async function ProfilePage() {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        return <div>Not logged in</div>;
    }

    const userPosts = await getUserPosts(data.user.id);
    const userPreferences = await getUserPreferences(data.user.id);

    return <ProfileClientPage posts={userPosts} preferences={userPreferences} />;
}