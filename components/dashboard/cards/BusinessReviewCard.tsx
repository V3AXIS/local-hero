import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function BusinessReviewCard({ title, content, author, metadata }: any) {
    const rating = metadata?.rating || 0;
    return (
        <Card>
            <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
            <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>
                <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                    ))}
                </div>
            </CardContent>
            <CardFooter><p className="text-xs text-muted-foreground dark:text-muted-foreground">Reviewed by {author?.username || 'Anonymous'}</p></CardFooter>
        </Card>
    );
}