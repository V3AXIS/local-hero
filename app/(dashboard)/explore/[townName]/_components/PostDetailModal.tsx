import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ICONS } from '@/lib/data';
import CommentThread from "./CommentThread";
import { ExternalLink, Star, ThumbsUp, MapPin, Heart, MessageSquare, Calendar, Navigation } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const DetailItem = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex flex-col">
        <p className="text-sm font-semibold text-muted-foreground">{label}</p>
        <p className="text-base font-semibold">{children}</p>
    </div>
);

export default function PostDetailModal({ isOpen, onClose, post }: { isOpen: boolean, onClose: () => void, post: any }) {
    if (!post) return null;

    const Icon = ICONS[post.type];
    const severityConfig: any = { High: 'destructive', Medium: 'secondary', Low: 'default' };

    const ActionButton = () => {
        switch (post.type) {
            case 'job': return <Button className="w-full" size="sm"><ExternalLink  />Apply Now</Button>;
            case 'event': return <Button size="sm" className="w-full" ><Star  />RSVP ({post.details.rsvps}/{post.details.rsvpLimit})</Button>;
            case 'issue': return <Button size="sm" className="w-full" variant="outline" ><ThumbsUp />Upvote ({post.upvotes})</Button>;
            case 'deed': return <Button size="sm" className="w-full " ><Heart  />Give Kudos ({post.details.kudos})</Button>;
            case 'rent': return <Button size="sm" className="w-full" ><MessageSquare  />Contact Landlord</Button>;
            case 'business': return <Button size="sm" className="w-full" ><Navigation  />Get Directions</Button>
            default: return null;
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent  className="sm:max-w-3xl flex flex-col p-0 ">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    {/* Left Side: Image and Details */}
                    <div className="hidden md:block bg-muted/30 p-6 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-accent rounded-lg shadow-sm  border-2"><Icon className="h-4 w-4 text-primary" /></div>
                            <h2 className="text-xl font-semibold tracking-tight capitalize">{post.type} Details</h2>
                        </div>
                        <div className="space-y-4">
                            {post.details.pay && <DetailItem label="Pay">{post.details.pay}</DetailItem>}
                            {post.details.company && <DetailItem label="Company">{post.details.company}</DetailItem>}
                            {post.details.date && <DetailItem label="When">{post.details.date} at {post.details.time}</DetailItem>}
                            {post.details.location && <DetailItem label="Where">{post.details.location}</DetailItem>}
                            {post.details.price && <DetailItem label="Price">{post.details.price}</DetailItem>}
                            {post.details.specs && <DetailItem label="Specs">{post.details.specs}</DetailItem>}
                            {post.details.severity && <div className="flex justify-between items-center"><p className="text-sm font-semibold text-muted-foreground">Severity</p><Badge variant={severityConfig[post.details.severity]}>{post.details.severity}</Badge></div>}
                            {post.details.status && <div className="flex justify-between items-center"><p className="text-sm font-semibold text-muted-foreground">Status</p><Badge>{post.details.status}</Badge></div>}
                        </div>

                        <ActionButton />

                        {post.details.photos && (
                            <div className="space-y-2">
                                <h3 className="font-semibold">Photos</h3>
                                <div className="grid grid-cols-2 gap-2">{post.details.photos.map((p: string, index: number) => <img key={index} src={p} className="rounded-lg w-full h-auto" />)}</div>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Content and Comments */}
                    <ScrollArea className="md:col-span-2 p-6 flex flex-col h-[80vh] overflow-y-auto">
                        <div className="flex-shrink-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <Badge variant="secondary" className="capitalize">{post.type}</Badge>
                                    <h1 className="text-2xl font-bold mt-1">{post.title}</h1>
                                    <p className="text-sm text-muted-foreground mt-1">Posted by u/{post.user} • {post.timestamp}</p>
                                </div>
                            </div>
                            <p className="text-base text-muted-foreground my-4">{post.details.description || post.summary}</p>
                            <Separator />
                        </div>

                        <div className="flex-grow overflow-y-auto pt-4 -mr-6 pr-6">
                            <CommentThread comments={post.details.comments || []} />
                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
}