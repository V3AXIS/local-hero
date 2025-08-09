"use client";
import Link from "next/link";

import { ModeToggle } from "../mode-toggle";
import AuthButtons from "../layout/AuthButtons";
import UserMenu from "../layout/UserMenu";

export default function DesktopHeader({ user }: any) {
    const links = [
        { to: "/", label: "Home" },
        { to: "/dashboard", label: "Dashboard" },
        { to: "/explore", label: "Explore" },
    ];

    return (
        <div>
            <div className="flex flex-row items-center justify-between px-2 py-1">
                <nav className="flex gap-4 text-lg">
                    {links.map(({ to, label }) => {
                        return (
                            <Link key={to} href={to}>
                                {label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-2">
                    <ModeToggle />

                    {!user && <AuthButtons />}
                    {user && <UserMenu user={user} />}
                </div>
            </div>
            <hr />
        </div>
    );
}
