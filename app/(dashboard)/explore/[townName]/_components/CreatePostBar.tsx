"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function CreatePostBar({ onCreatePost }: { onCreatePost: () => void }) {
    return (
        <div className="flex items-center gap-3">
            <Avatar className=" size-9">
                <AvatarFallback>G</AvatarFallback> {/* G for Guest */}
            </Avatar>
            <Input
                placeholder="What's happening in your town?"
                onClick={onCreatePost}
                readOnly
            />
            <Button onClick={onCreatePost}>Create Post</Button>
        </div>
    );
}