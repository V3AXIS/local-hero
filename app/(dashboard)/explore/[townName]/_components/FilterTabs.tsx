"use client";

import { Button } from "@/components/ui/button";
import { ICONS } from "@/lib/data";

const FILTERS = ['All', 'Job', 'Issue', 'Event', 'Deed', 'Business', 'Rent'];

export default function FilterTabs({ activeFilter, onFilterChange }: { activeFilter: string, onFilterChange: (filter: string) => void }) {
    return (
        <div className="flex space-x-1 overflow-x-auto">
            {FILTERS.map(filter => {
                const Icon = ICONS[filter.toLowerCase()];
                return (
                    <Button
                        key={filter}
                        variant={activeFilter === filter ? 'secondary' : 'ghost'}
                        className="flex-shrink-0"
                        onClick={() => onFilterChange(filter)}
                    >
                        {Icon && <Icon className="h-4 w-4" />}
                        {filter}
                    </Button>
                )
            })}
        </div>
    );
}