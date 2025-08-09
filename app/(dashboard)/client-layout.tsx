"use client";

import Sidebar from "@/components/layout/Sidebar";
import { UserProvider } from "@/lib/context/UserContext";

type UserProfile = {
    id: string;
    email: string;
    name: string;
    avatar: string;
    town: string;
} | null;

interface ClientLayoutProps {
    children: React.ReactNode;
    userProfile: UserProfile;
}

export function ClientLayout({ children, userProfile }: ClientLayoutProps) {
    return (
        <UserProvider value={userProfile}>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <main className="flex-1 overflow-y-auto pb-24 md:pb-8">
                        {children}
                    </main>
                </div>
            </div>
        </UserProvider>
    );
}
