import Feed from "./_components/Feed";
import CreatePost from "./_components/CreatePost";
import FilterControls from "@/components/dashboard/FilterControls";

// Mock data fetching - replace with actual API call to '/api/posts'
async function getTownFeed(townId: string, filter: string) {
    // This would fetch from your backend, applying filters.
    const allPosts = [
        { id: '1', type: 'Event', title: 'Summer Festival', date: '2025-08-15', rsvps: 45, limit: 100 },
        { id: '2', type: 'Issue', title: 'Pothole on Main St', upvotes: 22, status: 'Reported' },
        { id: '3', type: 'Job', title: 'Barista at The Coffee Shop', salary: '$18/hr' },
        { id: '4', type: 'GoodDeed', title: 'Community Garden Cleanup', kudos: 15 },
        { id: '5', type: 'BusinessReview', title: 'Review for "The Local Diner"', rating: 5 },
        { id: '6', type: 'Rental', title: '2-Bedroom Apartment', price: '$1500/mo' },
    ];

    if (!filter || filter === 'all') return allPosts;
    return allPosts.filter(post => post.type.toLowerCase() === filter.toLowerCase());
}

export default async function TownHubPage({ params, searchParams }: { params: { townId: string }, searchParams: { filter: string } }) {
    const posts = await getTownFeed(params.townId, searchParams.filter);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Town Hub</h1>
                    <CreatePost />
                </div>
                <FilterControls />
                <Feed posts={posts} />
            </div>
            <div className="hidden lg:block">
                {/* Placeholder for potential widgets, ads, or town info */}
            </div>
        </div>
    );
}