"use client";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const filters = ['all', 'jobs', 'issues', 'events', 'reviews', 'rentals', 'deeds'];

export default function FilterControls() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentFilter = searchParams.get('filter') || 'all';

    const handleFilterChange = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('filter', filter);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex space-x-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    variant={currentFilter === filter ? 'default' : 'outline'}
                    onClick={() => handleFilterChange(filter)}
                    className="capitalize"
                >
                    {filter}
                </Button>
            ))}
        </div>
    );
}