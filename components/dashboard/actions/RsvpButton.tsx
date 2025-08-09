"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
// import { toggleInteraction } from "@/lib/actions/interactions.actions";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export default function RsvpButton({ postId }: any) {
    const path = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            // Replace with actual user ID from auth
            // toggleInteraction(postId, 'user_id_from_auth', 'Rsvp', path);
            console.log("RSVPing to post:", postId);
        });
    };

    return (
        <Button onClick={handleClick} disabled={isPending}>
            <CheckCircle className="w-4 h-4 mr-2" />
            RSVP
        </Button>
    );
}