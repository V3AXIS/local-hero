import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownRight, ArrowUpFromDot, ArrowDownToDot } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Comment = ({ comment, isReply = false }: { comment: any, isReply?: boolean }) => (
    <div className={`flex gap-3 ${isReply ? 'ml-6' : ''}`}>
        <Avatar className="h-8 w-8">
            <AvatarFallback>{comment.user[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
            <div className="text-xs">
                <span className="font-semibold">{comment.user}</span>
                <span className="text-muted-foreground"> • {comment.timestamp}</span>
            </div>
            <p className="text-sm mt-1">{comment.text}</p>
            <div className="flex items-center gap-1 text-muted-foreground -ml-2 my-3">
                <Button variant="ghost" size="icon" ><ArrowUpFromDot /></Button>
                <Button variant="ghost" size="icon" ><ArrowDownToDot /></Button>
                <Button variant="ghost" size="sm" ><CornerDownRight /> Reply</Button>
            </div>
            {comment.replies && comment.replies.map((reply: any) => (
                <Comment key={reply.id} comment={reply} isReply={true} />
            ))}
        </div>
    </div>
);


export default function CommentThread({ comments }: { comments: any[] }) {
    return (
        <div className="space-y-6">
            <div>
                <Label htmlFor="comment" className="text-sm font-semibold">Join the conversation</Label>
                <Textarea id="comment" placeholder="Add your comment..." className="mt-1" />
                <Button size="sm" className="mt-2">Submit</Button>
            </div>
            <Separator />
            <h3 className="font-semibold">Comments ({comments.length})</h3>
            <div className="space-y-4">
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}