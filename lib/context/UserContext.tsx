"use client";

import { createContext, useContext } from 'react';

// Define the shape of your user object
type UserProfile = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    town: string;
    // Add any other user properties you need
} | null;

export const UserContext = createContext<UserProfile>(null);

export const UserProvider = UserContext.Provider;

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};