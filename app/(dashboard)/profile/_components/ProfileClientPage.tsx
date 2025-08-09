"use client";
import { useState } from 'react';
import { useUser } from '@/lib/context/UserContext';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// You would create this component based on the previous ContentCard logic
import ContentCard from '@/components/dashboard/cards/ContentCard';

interface Post {
    id: string;
    type: string;
    title: string;
    summary: string;
    user: string;
    timestamp: string;
}

interface NotificationPreferences {
    newJobs: boolean;
    eventReminders: boolean;
    issueUpdates: boolean;
}

interface Preferences {
    notifications: NotificationPreferences;
}

const Toggle = ({ label, enabled, onChange }: { label: string, enabled: boolean, onChange: () => void }) => (
    <div className="flex justify-between items-center py-3">
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
        <button onClick={onChange} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${enabled ? 'bg-teal-500' : 'bg-gray-300'}`}>
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    </div>
);


export default function ProfileClientPage({ posts, preferences }: { posts: Post[], preferences: Preferences }) {
    const user = useUser();
    const [activeTab, setActiveTab] = useState('posts');
    const [prefs, setPrefs] = useState(preferences);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                    <img src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full shadow-lg border-4 border-white mb-4" />
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground flex items-center gap-1"><MapPin size={14} /> {user.town}</p>
                </CardContent>
            </Card>

            <div>
                <div className="border-b border-gray-200">
                    <div className="flex space-x-4">
                        <Button variant="ghost" onClick={() => setActiveTab('posts')} className={`rounded-b-none ${activeTab === 'posts' ? 'border-b-2 border-teal-500 text-teal-600' : ''}`}>My Posts</Button>
                        <Button variant="ghost" onClick={() => setActiveTab('prefs')} className={`rounded-b-none ${activeTab === 'prefs' ? 'border-b-2 border-teal-500 text-teal-600' : ''}`}>Preferences</Button>
                    </div>
                </div>

                <div className="mt-6">
                    {activeTab === 'posts' && (
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {posts.length > 0
                                ? posts.map(post => <ContentCard key={post.id} post={post} />)
                                : <p className="text-muted-foreground col-span-full text-center">You haven&apos;t posted anything yet.</p>
                            }
                        </div>
                    )}
                    {activeTab === 'prefs' && (
                        <Card className="max-w-md mx-auto">
                            <CardContent className="p-6 divide-y">
                                <h3 className="text-lg font-bold pb-4">Notification Settings</h3>
                                <Toggle label="New Job Postings" enabled={prefs.notifications.newJobs} onChange={() => setPrefs((p: Preferences) => ({ ...p, notifications: { ...p.notifications, newJobs: !p.notifications.newJobs } }))} />
                                <Toggle label="Event Reminders" enabled={prefs.notifications.eventReminders} onChange={() => setPrefs((p: Preferences) => ({ ...p, notifications: { ...p.notifications, eventReminders: !p.notifications.eventReminders } }))} />
                                <Toggle label="Updates on my Issues" enabled={prefs.notifications.issueUpdates} onChange={() => setPrefs((p: Preferences) => ({ ...p, notifications: { ...p.notifications, issueUpdates: !p.notifications.issueUpdates } }))} />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}