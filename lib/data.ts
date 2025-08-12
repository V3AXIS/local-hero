import { Briefcase, Wrench, Calendar, Building, Home, Heart } from 'lucide-react';

export const ICONS: any = { job: Briefcase, issue: Wrench, event: Calendar, business: Building, rent: Home, deed: Heart };

export const MOCK_USER_PROFILE = {
    name: 'Alex',
    username: 'alex_hero',
    town: 'Greenwood',
    avatar: `https://placehold.co/100x100/16a34a/ffffff?text=A`,
    stats: { deeds: 4, issues: 2, events: 8 },
    recentActivity: [
        { type: 'attended', text: 'Attended "Summer Farmers Market".' },
        { type: 'reported', text: 'Reported "Broken streetlamp on Oak & 3rd".' },
    ]
};

export const MOCK_TOWNS: any = {
    greenwood: {
        name: 'Greenwood',
        banner: 'https://i.pinimg.com/1200x/5c/af/8b/5caf8b6f362075df735194c49f9b18a6.jpg',
        icon: `https://placehold.co/100x100/16a34a/ffffff?text=G`,
        population: 12500, activeUsers: 850, createdAt: 'Created Aug 1, 2024',
        description: 'A vibrant community nestled in the rolling hills. Known for its active event calendar and beautiful parks.',
        rules: [
            { title: 'Be a Good Neighbor', description: 'Treat everyone with respect and kindness.' },
            { title: 'Keep it Local', description: 'Posts should be relevant to the Greenwood community.' },
            { title: 'No Spam or Self-Promotion', description: 'Contribute value, don\'t just advertise.' },
        ],
        posts: [
            {
                id: 1, type: 'job', title: 'Barista at The Daily Grind',
                summary: 'Full-time position, experience preferred. Responsibilities include crafting perfect espresso drinks and providing excellent customer service.',
                user: 'Alice', timestamp: '2h ago', distance: 0.5, upvotes: 12, comments: 4,
                details: { pay: '$18/hr', company: 'The Daily Grind', description: 'The Daily Grind is looking for a passionate and experienced barista to join our morning crew. Responsibilities include crafting perfect espresso drinks, providing excellent customer service, and maintaining a clean and welcoming environment.', qualifications: ['1+ year barista experience', 'Friendly and outgoing personality', 'Ability to work early mornings'], companyLogo: 'https://placehold.co/40x40/a0aec0/ffffff?text=DG', applyLink: '#' }
            },
            {
                id: 2, type: 'issue', title: 'Broken streetlamp on Oak & 3rd',
                summary: 'The light has been out for 3 days now. It\'s very dark and feels unsafe at night. I reported it to the city but wanted to post here for awareness.',
                user: 'Bob', timestamp: '5h ago', distance: 1.2, upvotes: 38, comments: 2,
                details: { severity: 'High', status: 'Reported', description: 'The streetlamp on the northwest corner of Oak St and 3rd Ave is completely out. I reported it to the city but wanted to post here for awareness.', updates: [{ user: 'City Council', text: 'We have received the report and a crew is scheduled for tomorrow.', timestamp: '1h ago' }], upvotes: 38, comments: [{ id: 1, user: 'Claire', timestamp: '4h ago', text: 'Thanks for reporting, I almost tripped there last night!', replies: [{ id: 3, user: 'Bob', timestamp: '4h ago', text: 'Exactly! Be careful.' }] }, { id: 2, user: 'David', timestamp: '3h ago', text: 'I called the city too, hopefully it gets fixed soon.' }] }
            },
            {
                id: 3, type: 'event', title: 'Summer Farmers Market',
                summary: 'Fresh produce, local crafts, and live music! A perfect way to spend your Saturday morning.',
                user: 'Greenwood Council', timestamp: '1d ago', distance: 2.1, upvotes: 112, comments: 23,
                details: { date: 'Sat, Aug 9', time: '9am - 1pm', location: 'Town Square', rsvps: 112, rsvpLimit: 150, description: 'Join us for our weekly Summer Farmers Market! A perfect way to spend your Saturday morning.', category: 'Community', calendarLink: '#' }
            },
            {
                id: 5, type: 'deed', title: 'Community Garden Cleanup',
                summary: 'Huge thank you to the 12 volunteers who came out this morning to help weed, mulch, and plant new flowers in the community garden. It looks beautiful!',
                user: 'Diana', timestamp: '8h ago', distance: 3.5, upvotes: 76, comments: 15,
                details: { volunteers: 12, kudos: 76, description: 'Huge thank you to the 12 volunteers who came out this morning to help weed, mulch, and plant new flowers in the community garden. It looks beautiful!', photos: ['https://i.pinimg.com/1200x/5c/af/8b/5caf8b6f362075df735194c49f9b18a6.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZU8nQRQYLMCldixI1BKwhl5fPtBG_mBlneuYhckf55VpJj-KG3LrqBE7CkkAD5bFwA3U&usqp=CAU'] }
            },
            {
                id: 4, type: 'business', title: 'Review: The Corner Bookstore',
                summary: 'A cozy spot with a great selection. The owner is lovely and always has great recommendations. It\'s the heart of our town.',
                user: 'Charlie', timestamp: '2d ago', distance: 0.8, upvotes: 45, comments: 6,
                details: { rating: 5, review: 'I can\'t recommend The Corner Bookstore enough. The owner is lovely and always has great recommendations. It\'s the heart of our town.', hours: '9am - 6pm, Mon-Sat', directionsLink: '#' }
            },
            {
                id: 6, type: 'rent', title: '2-Bedroom Apartment for Rent',
                summary: 'Spacious apartment near the park. Bright and sunny, available Sept 1st. Hardwood floors, new appliances, and a shared backyard. No pets.',
                user: 'Eve', timestamp: '3d ago', distance: 2.8, upvotes: 21, comments: 7,
                details: { price: '$1500/mo', specs: '2 Bed / 1 Bath / 950 sq.ft.', contactLink: '#', description: 'Bright and sunny 2-bedroom, 1-bath apartment available Sept 1st. Hardwood floors, new appliances, and a shared backyard. No pets.' }
            }
        ]
    },
    'maple-creek': {
        name: 'Maple Creek',
        banner: 'https://images.unsplash.com/photo-1502228239634-45a4a5a54d58?q=80&w=2070&auto=format&fit=crop',
        icon: `https://placehold.co/100x100/ea580c/ffffff?text=M`,
        population: 8200, activeUsers: 420, createdAt: 'Created May 12, 2024',
        description: 'A quiet, close-knit town with beautiful parks and a strong sense of community.',
        rules: [{ title: 'Be Respectful', description: 'Common decency is required.' }],
        posts: [
            { id: 7, type: 'job', title: 'Part-time dog walker', summary: 'Walk my beagle on weekday afternoons.', user: 'Frank', timestamp: '1h ago', distance: 0.3, upvotes: 5, comments: 1, details: { pay: '$15/hr', company: 'Private Citizen', applyLink: '#' } },
            { id: 8, type: 'event', title: 'Outdoor Movie Night', summary: 'Enjoy "The Goonies" under the stars!', user: 'Maple Creek Parks', timestamp: '4d ago', distance: 4.0, upvotes: 95, comments: 18, details: { date: 'Fri, Aug 15', time: '8:30pm', location: 'Creekside Park', rsvps: 95, rsvpLimit: 250, description: 'This week\'s movie is "The Goonies". Bring a blanket and some snacks!', category: 'Entertainment', calendarLink: '#' } },
            { id: 9, type: 'issue', title: 'Graffiti on the bridge', summary: 'Someone tagged the pedestrian bridge again.', user: 'Grace', timestamp: '1d ago', distance: 1.5, upvotes: 11, comments: 3, details: { severity: 'Medium', status: 'Reported', description: 'The pedestrian bridge over the creek was vandalized with spray paint sometime last night.' } },
        ]
    }
};