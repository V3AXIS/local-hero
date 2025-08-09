// Mock data for notifications
const mockNotifications = [
    { id: 1, text: 'Your report "Broken streetlamp" was updated.', timestamp: '1h ago', read: false },
    { id: 2, text: 'Diana mentioned you in a comment on "Community Garden Cleanup".', timestamp: '3h ago', read: false },
    { id: 3, text: 'Reminder: "Summer Farmers Market" is tomorrow at 9am.', timestamp: '12h ago', read: true },
];

export default async function NotificationsPage() {
    // In a real app, you would fetch notifications from your database
    const notifications = mockNotifications;

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Updates</h1>
            <ul className="space-y-4">
                {notifications.map(n => (
                    <li key={n.id} className={`p-4 rounded-lg flex items-start gap-4 transition-colors ${!n.read ? 'bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500' : 'bg-card'}`}>
                        <div className={`mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${!n.read ? 'bg-teal-500' : 'bg-transparent'}`}></div>
                        <div className="flex-grow">
                            <p className="text-card-foreground">{n.text}</p>
                            <p className="text-xs text-muted-foreground mt-1">{n.timestamp}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}