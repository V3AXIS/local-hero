"use client";
import Link from "next/link";

import { ModeToggle } from "../mode-toggle";
import AuthButtons from "../layout/AuthButtons";
import UserMenu from "../layout/UserMenu";
import { Button } from "../ui/button";

export default function DesktopHeader({ user }: any) {
    const links = [
        { to: "/", label: "Home" },
        { to: "/explore", label: "Explore" },
    ];

    return (
        <div>
            <div className="flex flex-row items-center justify-between md:px-16 px-4 py-3">
                <nav className="flex gap-4 text-sm">
                    {links.map(({ to, label }) => {
                        return (
                            <Button variant={'ghost'}>
                                <Link key={to} href={to}>
                                    {label}
                                </Link>
                           </Button>
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
