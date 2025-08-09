import BusinessReviewCard from "@/components/dashboard/cards/BusinessReviewCard";
import EventCard from "@/components/dashboard/cards/EventCard";
import GoodDeedCard from "@/components/dashboard/cards/GoodDeedCard";
import IssueCard from "@/components/dashboard/cards/IssueCard";
import JobCard from "@/components/dashboard/cards/JobCard";
import RentalCard from "@/components/dashboard/cards/RentalCard";

const componentMap: { [key: string]: React.ElementType } = {
    BusinessReview: BusinessReviewCard,
    Event: EventCard,
    GoodDeed: GoodDeedCard,
    Issue: IssueCard,
    Job: JobCard,
    Rental: RentalCard,
};

export default function Feed({ posts }: { posts: any[] }) {
    if (!posts || posts.length === 0) {
        return <p className="text-center text-gray-500 mt-8">No posts yet. Be the first to contribute!</p>;
    }

    return (
        <div className="space-y-4 mt-6">
            {posts.map((post) => {
                const CardComponent = componentMap[post.type];
                return CardComponent ? <CardComponent key={post.id} {...post} /> : null;
            })}
        </div>
    );
}