import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PostBreakdownChart from "@/components/charts/PostBreakdownChart";
import PositiveVsIssuesChart from "@/components/charts/PositiveVsIssuesChart";
import WeeklyActivityChart from "@/components/charts/WeeklyActivityChart";

// Mock data fetching function - replace with your actual API call to Supabase
async function getTownAnalytics(townId: string) {
    // In a real app, you would fetch this from your '/api/towns' endpoint
    return {
        totalPosts: 258,
        jobAvailability: 22,
        reportedIssues: 45,
        postBreakdown: [
            { name: 'Jobs', value: 22 },
            { name: 'Issues', value: 45 },
            { name: 'Events', value: 30 },
            { name: 'Reviews', value: 61 },
            { name: 'Rentals', value: 50 },
            { name: 'Good Deeds', value: 50 },
        ],
        positiveVsIssues: [
            { name: 'Positive', value: 50 },
            { name: 'Issues', value: 45 },
        ],
        weeklyActivity: [
            { day: 'Mon', count: 20 },
            { day: 'Tue', count: 32 },
            { day: 'Wed', count: 18 },
            { day: 'Thu', count: 45 },
            { day: 'Fri', count: 33 },
            { day: 'Sat', count: 55 },
            { day: 'Sun', count: 21 },
        ],
    };
}

export default async function ExplorePage({ searchParams }: { searchParams: { townId: string } }) {
    const analyticsData = await getTownAnalytics(searchParams.townId || 'default-town');

    return (
        <div className="space-y-6 w-full">
            <h1 className="text-3xl font-bold">Community Evaluation & Insights</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{analyticsData.totalPosts}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Job Availability</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{analyticsData.jobAvailability}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Reported Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">{analyticsData.reportedIssues}</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Positive vs. Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PositiveVsIssuesChart data={analyticsData.positiveVsIssues} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Post Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PostBreakdownChart data={analyticsData.postBreakdown} />
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Weekly Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <WeeklyActivityChart data={analyticsData.weeklyActivity} />
                </CardContent>
            </Card>
        </div>
    );
}