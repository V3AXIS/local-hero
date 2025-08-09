import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Wrench, Calendar, Building, Home, Heart, LucideIcon } from 'lucide-react';

interface Post {
    type: string;
    title: string;
    summary: string;
    user: string;
    timestamp: string;
}

interface CardConfig {
    color: string;
    bgColor: string;
    icon: LucideIcon;
}

const cardConfig: Record<string, CardConfig> = {
    job: { color: 'blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20', icon: Briefcase },
    issue: { color: 'red-500', bgColor: 'bg-red-50 dark:bg-red-900/20', icon: Wrench },
    event: { color: 'purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20', icon: Calendar },
    businessreview: { color: 'yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20', icon: Building },
    rental: { color: 'green-500', bgColor: 'bg-green-50 dark:bg-green-900/20', icon: Home },
    gooddeed: { color: 'pink-500', bgColor: 'bg-pink-50 dark:bg-pink-900/20', icon: Heart },
};

export default function ContentCard({ post, onSelect }: { post: Post, onSelect?: (post: Post) => void }) {
    const postType = post.type.toLowerCase().replace(' ', '');
    const config = cardConfig[postType] || cardConfig['job'];
    const Icon = config.icon;

    return (
        <Card
            onClick={() => onSelect && onSelect(post)}
            className={`overflow-hidden hover:shadow-xl cursor-pointer transition-shadow duration-300 border-l-4 border-${config.color}`}
        >
            <CardHeader>
                <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-full ${config.bgColor} mr-3`}>
                        <Icon className={`text-${config.color}`} size={20} />
                    </div>
                    <Badge variant="outline" className="uppercase">{post.type}</Badge>
                </div>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground">Posted by {post.user} • {post.timestamp}</p>
            </CardFooter>
        </Card>
    );
}