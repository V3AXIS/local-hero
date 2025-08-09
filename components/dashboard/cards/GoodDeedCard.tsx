import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import KudosButton from "../actions/KudosButton"; 
import { Heart } from "lucide-react";

export default function GoodDeedCard({ id, title, content, author, interactions }: any) {
    const kudosCount = interactions?.filter((i: any) => i.type === 'Kudo').length || 0;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Heart className="w-5 h-5 mr-2 text-pink-500" />{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-700">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p className="text-xs text-gray-500">By {author?.username || 'Anonymous'}</p>
                <KudosButton postId={id} currentKudos={kudosCount} />
            </CardFooter>
        </Card>
    );
}