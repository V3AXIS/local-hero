import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import UpvoteButton from "../actions/UpvoteButton";
import { Badge } from "@/components/ui/badge";

export default function IssueCard({ id, title, upvotes, status }: { id: string, title: string, upvotes: number, status: string }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle>{title}</CardTitle>
                    <Badge variant={status === 'Resolved' ? 'default' : 'destructive'}>{status}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600">This a issue has been highlighted by the community.</p>
            </CardContent>
            <CardFooter>
                <UpvoteButton postId={id} currentUpvotes={upvotes} />
            </CardFooter>
        </Card>
    );
}