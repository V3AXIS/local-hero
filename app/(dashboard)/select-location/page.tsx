"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

export default function SelectLocationPage() {
    const [town, setTown] = useState('');
    const router = useRouter();

    const handleConfirm = () => {
        if (!town) return;
        // Format town name for the URL (e.g., "Maple Creek" -> "maple-creek")
        const formattedTown = town.trim().toLowerCase().replace(/\s+/g, '-');
        router.push(`/explore/${formattedTown}`);
    };

    return (
        <div className="flex items-center justify-center pt-32 pb-12">
            <Card className="w-full bg-transparent  shadow-none  border-none max-w-2xl mx-4">
                <CardHeader className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter leading-tighter">
                        Explore Your <span className="text-muted-foreground">Community</span>.
                    </h1>
                    <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                        Enter a town name to see what's happening locally.
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-2">
                        <div className="relative flex-grow">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                            <Input
                                type="text"
                                value={town}
                                onChange={(e) => setTown(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                                placeholder="e.g., Greenwood"
                                className="w-full pl-10"
                            />
                        </div>
                        <Button onClick={handleConfirm} disabled={!town}><Search className="h-4 w-4" /> Find</Button>
                    </div>
                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Map Preview</p>
                    </div>
                    <Button
                        className="w-full"
                        size="lg"
                        onClick={handleConfirm}
                        disabled={!town}
                    >
                        Confirm Location & Explore
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}