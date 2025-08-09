"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export default function UpvoteButton({ postId, currentUpvotes }: any) {
    const path = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            // Replace with actual user ID from auth
            // toggleInteraction(postId, 'user_id_from_auth', 'Upvote', path);
            console.log("Upvoting post:", postId);
        });
    };

    return (
        <Button variant="outline" size="sm" onClick={handleClick} disabled={isPending}>
            <ArrowUpCircle className="w-4 h-4 mr-2" />
            Upvote ({currentUpvotes})
        </Button>
    );
}