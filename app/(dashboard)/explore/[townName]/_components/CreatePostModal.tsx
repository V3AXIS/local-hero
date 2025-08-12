"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft } from 'lucide-react';
import { ICONS } from '@/lib/data';

const POST_TYPES = [
    { name: 'Report an Issue', type: 'issue' },
    { name: 'Add an Event', type: 'event' },
    { name: 'Post a Job', type: 'job' },
    { name: 'Share a Good Deed', type: 'deed' },
    { name: 'Review a Business', type: 'business' },
    { name: 'List a Rental', type: 'rent' },
];

export default function CreatePostModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<any>(null);

    const handleSelectType = (type: any) => {
        setSelectedType(type);
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
        setSelectedType(null);
    };

    // Reset state when the dialog is closed
    const handleClose = () => {
        onClose();
        setTimeout(() => { // Delay reset to allow for closing animation
            setStep(1);
            setSelectedType(null);
        }, 300);
    };

    const renderFormFields = () => {
        if (!selectedType) return null;
        // This is where you'd have more complex, specific forms
        switch (selectedType.type) {
            case 'job': return (<><div className="space-y-1"><Label>Job Title</Label><Input placeholder="e.g., Barista at The Daily Grind" /></div><div className="space-y-1"><Label>Pay / Salary</Label><Input placeholder="e.g., $20/hr" /></div></>);
            case 'issue': return (<><div className="space-y-1"><Label>Issue</Label><Input placeholder="e.g., Broken streetlamp on Oak & 3rd" /></div><div className="space-y-1"><Label>Severity</Label><Select><SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger><SelectContent><SelectItem value="Low">Low</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="High">High</SelectItem></SelectContent></Select></div></>);
            case 'event': return (<><div className="space-y-1"><Label>Event Name</Label><Input placeholder="e.g., Summer Farmers Market" /></div><div className="space-y-1"><Label>Date & Time</Label><Input type="datetime-local" /></div><div className="space-y-1"><Label>Location</Label><Input placeholder="e.g., Town Square" /></div></>);
            default: return <div className="space-y-1"><Label>Title</Label><Input placeholder="Title of your post" /></div>;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    {step === 2 && <Button variant="ghost" size="icon" className="absolute left-4 top-4" onClick={handleBack}><ChevronLeft /></Button>}
                    <DialogTitle className="text-center">{step === 1 ? 'Create a Post' : `New ${selectedType.name}`}</DialogTitle>
                    <DialogDescription className="text-center">{step === 1 ? 'What would you like to share with your community?' : `Fill in the details for your ${selectedType.type} post.`}</DialogDescription>
                </DialogHeader>

                {step === 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                        {POST_TYPES.map(type => {
                            const Icon = ICONS[type.type];
                            return (
                                <Button key={type.type} size={'sm'} variant='outline' onClick={() => handleSelectType(type)}>
                                    <Icon />
                                    <span>{type.name}</span>
                                </Button>
                            );
                        })}
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4 py-4">
                        {renderFormFields()}
                        <div className="space-y-1">
                            <Label>Description</Label>
                            <Textarea placeholder="Add more details here..." />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <DialogFooter>
                        <Button variant="ghost" size={'sm'} onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} size={'sm'} >Submit Post</Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    )
}