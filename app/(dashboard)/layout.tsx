import Sidebar from "@/components/layout/Sidebar";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { ClientLayout } from "./client-layout";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    // In a real app, you would fetch the full user profile from your 'users' table
    const userProfile = data.user ? {
        id: data.user.id,
        email: data.user.email || '',
        name: data.user.email?.split('@')[0] || 'User', 
        avatar: `https://placehold.co/100x100/16a34a/ffffff?text=${data.user.email?.[0].toUpperCase() || 'U'}`,
        town: 'Greenwood'
    } : null;

    return (
        <ClientLayout userProfile={userProfile}>
            {children}
        </ClientLayout>
    );
}