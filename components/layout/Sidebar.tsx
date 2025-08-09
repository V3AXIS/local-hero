import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-950 border-r">
            <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-2">
                    <Link href="/town-hub/1" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                        <Home className="h-5 w-5" />
                        Town Hub
                    </Link>
                    <Link href="/explore?townId=1" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                        <Compass className="h-5 w-5" />
                        Explore
                    </Link>
                </nav>
            </div>
        </aside>
    );
}