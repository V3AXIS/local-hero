"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
// Assuming you have a server action similar to the one defined above
// import { createPost } from '@/lib/actions/posts.actions'; 
import { usePathname } from 'next/navigation';

const postTypes = ['Job', 'Issue', 'Event', 'BusinessReview', 'Rental', 'GoodDeed'];

export default function CreatePost() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const path = usePathname();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const postData = {
            ...data,
            // Replace with actual logged-in user ID and town ID from params/context
            authorId: 'user_id_from_auth',
            townId: 1, // Get this from params
            metadata: {
                salary: data.salary,
                price: data.price,
                date: data.eventDate,
                rating: Number(data.rating),
            }
        };

        // await createPost(postData, path);
        console.log("Submitting:", postData); // Placeholder for action call
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a New Post</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Select name="type" onValueChange={setType} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a post category" />
                        </SelectTrigger>
                        <SelectContent>
                            {postTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                    </Select>

                    {type && (
                        <>
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" required />
                            </div>
                            <div>
                                <Label htmlFor="content">Description</Label>
                                <Textarea id="content" name="content" />
                            </div>
                            {type === 'Job' && <div><Label>Salary</Label><Input name="salary" placeholder="$50,000/year" /></div>}
                            {type === 'Event' && <div><Label>Event Date</Label><Input name="eventDate" type="date" /></div>}
                            {type === 'Rental' && <div><Label>Price</Label><Input name="price" placeholder="$2,000/mo" /></div>}
                            {type === 'BusinessReview' && <div><Label>Rating (1-5)</Label><Input name="rating" type="number" min="1" max="5" /></div>}
                            <Button type="submit">Submit Post</Button>
                        </>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    );
}