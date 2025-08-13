"use client";

import Link from "next/link";
import Logo from "@/shared/logo";
import MobileHeader from "./mobile-header";
import AuthButtons from "../layout/AuthButtons";
import UserMenu from "../layout/UserMenu";
import { ModeToggle } from "../theme/mode-toggle";

export default function DesktopHeader({ user }: any) {
    const links = [
        { href: "/", title: "Home" },
        { href: "/explore/greenwood", title: "Explore" },
        { href: "/select-location", title: "Locate" },
        { href: "/profile/alex_hero", title: "Profile" },
    ];
    return (
        <header className="z-30 absolute  top-5 w-full">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex h-14 items-center justify-between gap-3 rounded-xl backdrop-blur ">
                    <Logo />
                    <ul className="flex flex-1 items-center justify-end gap-2">
                        <li className="lg:pr-4 md:not-sr-only sr-only">
                            <div className="space-y-6 text-base lg:flex lg:gap-6 lg:space-y-0 lg:text-sm">
                                {links.map((item: any, index: any) => (
                                    <div key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.title}</span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </li>
                        <div className="md:border-l pl-4 flex items-center gap-2">
                            {!user && <AuthButtons />}
                            {user && <UserMenu user={user} />}
                            <ModeToggle />
                            <span className="sm:hidden block"><MobileHeader /></span>
                        </div>

                    </ul>
                </div>
            </div>
        </header>
    );
}
