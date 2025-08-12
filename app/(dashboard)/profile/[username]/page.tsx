import { MOCK_USER_PROFILE, MOCK_TOWNS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from 'lucide-react';
import PostCard from "../../explore/[townName]/_components/PostCard";

export default function ProfilePage({ params }: { params: { username: string } }) {
    // For now, we only have one mock user.
    if (params.username !== MOCK_USER_PROFILE.username) {
        return notFound();
    }

    const user = MOCK_USER_PROFILE;
    // Find all posts by this user from all towns
    const userPosts = Object.values(MOCK_TOWNS).flatMap((town: any) => town.posts.filter((p: any) => p.user === user.name));

    return (
        <div className="container mx-auto max-w-7xl px-4  pt-32 pb-12">
            <Card>
                <CardHeader className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 rounded-xl shadow-lg border-4  mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">u/{user.username}</p>
                    <p className="text-muted-foreground flex items-center gap-1 mt-1"><MapPin size={14} /> {user.town}</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 text-center border-t p-4">
                        <div><p className="text-xl font-bold">{user.stats.deeds}</p><p className="text-sm text-muted-foreground">Deeds</p></div>
                        <div><p className="text-xl font-bold">{user.stats.issues}</p><p className="text-sm text-muted-foreground">Issues</p></div>
                        <div><p className="text-xl font-bold">{user.stats.events}</p><p className="text-sm text-muted-foreground">Events</p></div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Post History</h2>
                <div className="space-y-4">
                    {userPosts.map(post => (
                        <PostCard key={post.id} post={post} onSelectPost={() => { /* In a real app, this would open the detail modal */ }} />
                    ))}
                </div>
            </div>
        </div>
    )
}