"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { MOCK_TOWNS } from '@/lib/data';

import CommunityHeader from './_components/CommunityHeader';
import CommunityInfo from './_components/CommunityInfo';
import CreatePostBar from './_components/CreatePostBar';
import PostCard from './_components/PostCard';
import FilterTabs from './_components/FilterTabs';
import CreatePostModal from './_components/CreatePostModal';
import PostDetailModal from './_components/PostDetailModal';

export default function TownExploreClientPage({ params }: { params: { townName: string } }) {
    const townData = MOCK_TOWNS[params.townName.toLowerCase()];

    const [filter, setFilter] = useState('All');
    const [selectedPost, setSelectedPost] = useState<any>(null);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    if (!townData) {
        return notFound();
    }

    const filteredPosts = townData.posts.filter((post: any) =>
        filter === 'All' || post.type.toLowerCase() === filter.toLowerCase()
    );

    return (
        <div className="container mx-auto max-w-7xl px-4 pt-32 pb-12">
            <CommunityHeader town={townData} />

            <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <CreatePostBar onCreatePost={() => setCreateModalOpen(true)} />
                    <FilterTabs activeFilter={filter} onFilterChange={setFilter} />

                    <div className="space-y-4">
                        {filteredPosts.map((post: any) => (
                            <PostCard key={post.id} post={post} onSelectPost={() => setSelectedPost(post)} />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <CommunityInfo town={townData} onCreatePost={() => setCreateModalOpen(true)} />
                </div>
            </div>

            <CreatePostModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} />
            <PostDetailModal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} post={selectedPost} />
        </div>
    );
}