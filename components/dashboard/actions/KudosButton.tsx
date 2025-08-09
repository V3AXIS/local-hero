"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { toggleInteraction } from "../../../server/interactionsAction";

export default function KudosButton({ postId, currentKudos }: { postId: number; currentKudos: number }) {
    const path = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleKudo = () => {
        startTransition(() => {
            // NOTE: The user ID should be retrieved from your authentication state (e.g., a session hook).
            const userId = "user_id_from_auth";
            toggleInteraction(postId, userId, 'Kudo', path);
        });
    };

    return (
        <Button variant="outline" size="sm" onClick={handleKudo} disabled={isPending}>
            <Heart className="w-4 h-4 mr-2" />
            Kudos ({currentKudos})
        </Button>
    );
}