import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, DollarSign } from "lucide-react";

export default function RentalCard({ title, content, author, metadata }: any) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Home className="w-5 h-5 mr-2" />{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {metadata?.price && (
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{metadata.price}</span>
                    </div>
                )}
                <p className="text-sm text-gray-700">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Listed by {author?.username || 'Owner'}</p>
                <Button variant="outline">Get Directions</Button>
            </CardFooter>
        </Card>
    );
}