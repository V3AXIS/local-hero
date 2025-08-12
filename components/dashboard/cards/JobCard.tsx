import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign } from "lucide-react";

export default function JobCard({ title, content, author, metadata }: any) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Briefcase className="w-5 h-5 mr-2" />{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {metadata?.salary && (
                    <div className="flex items-center text-green-600 font-semibold mb-2">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{metadata.salary}</span>
                    </div>
                )}
                <p className="text-sm text-gray-700">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Posted by {author?.username || 'Company'}</p>
                <Button size={'sm'}>Apply Now</Button>
            </CardFooter>
        </Card>
    );
}