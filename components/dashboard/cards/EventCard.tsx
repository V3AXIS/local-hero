import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RsvpButton from "../actions/RsvpButton";
import { Users, Calendar } from "lucide-react";

export default function EventCard({ id, title, date, rsvps, limit }: { id: string, title: string, date: string, rsvps: number, limit: number }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{rsvps} / {limit} attending</span>
                </div>
            </CardContent>
            <CardFooter>
                <RsvpButton postId={id} />
            </CardFooter>
        </Card>
    );
}