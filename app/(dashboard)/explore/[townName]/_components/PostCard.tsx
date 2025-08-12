"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigUp, ArrowBigDown, MessageSquare, MapPin, Briefcase } from 'lucide-react';
import { ICONS } from '@/lib/data';

export default function PostCard({ post, onSelectPost }: { post: any, onSelectPost: () => void }) {
    const Icon = ICONS[post.type] || Briefcase;

    return (
        <Card onClick={onSelectPost} className={`flex overflow-hidden cursor-pointer transition-all ease-in-out  `}>
            <CardHeader>
                <CardTitle className="text-lg mt-1">{post.title}</CardTitle>
                <div className="text-xs text-muted-foreground flex items-center flex-wrap gap-x-2 gap-y-1">
                    <Icon className="h-4 w-4" />
                    <Badge variant={post.type === 'issue' ? 'destructive' : 'secondary'} className="capitalize rounded-full">{post.type}</Badge>
                    <span>Posted by u/{post.user}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                    {post.distance && <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{post.distance}km</span>}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.summary}</p>
            </CardContent>
            <CardFooter className="py-1 flex justify-between items-center px-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <MessageSquare />
                    {post.comments} Comments
                </Button>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hover:text-primary"><ArrowBigUp /></Button>
                    <span className="font-bold text-sm">{post.upvotes}</span>
                    <Button variant="ghost" size="sm" className="hover:text-destructive"><ArrowBigDown /></Button>
                </div>
            </CardFooter>
        </Card>
    );
}