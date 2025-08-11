'use client';

import React from 'react';
import { Drawer } from 'vaul';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MobileHeader() {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)
    const links = [
        { href: "/", title: "Home" },
        { href: "/explore", title: "Explore" },
    ];
    return (
        <Drawer.Root open={open} onOpenChange={(val) => setOpen(val)}>
            <Drawer.Trigger asChild>
                <Button
                    variant="ghost"
                    size={'icon'}
                    className={cn(
                        " bg-accent/60  active:bg-accent/60 border ",
                    )}
                >
                    <div className="relative flex h-8 w-4 items-center justify-center">
                        <div className="relative size-4">
                            <span
                                className={cn(
                                    "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                                    open ? "top-[0.4rem] -rotate-45" : "top-1"
                                )}
                            />
                            <span
                                className={cn(
                                    "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                                    open ? "top-[0.4rem] rotate-45" : "top-2.5"
                                )}
                            />
                        </div>
                        <span className="sr-only">Toggle Menu</span>
                    </div>
                </Button>
            </Drawer.Trigger>

            <Drawer.Portal>
                <Drawer.Overlay className="fixed z-45 inset-0 " />
                <Drawer.Content className=" bg-card p-4 z-50 flex flex-col backdrop-blur-xl dark:bg-background/90 border   rounded-t-[20px]  h-fit fixed bottom-0 left-0 right-0 outline-none">
                    <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                    <div className="w-full">
                        <ScrollArea className="h-[calc(30vh-8rem)] ">
                            <div className="flex flex-col space-y-2">
                                {links?.map((item: any, index: any) => (
                                    <Link
                                        key={index}
                                        href={item.href ?? ""}
                                        className={cn(
                                            "transition-colors py-1 px-3 text-foreground hover:bg-accent rounded-md hover:text-accent-foreground ",
                                            pathname === item.href ? "text-foreground border bg-accent py-1 px-3 rounded-md" : "text-foreground/60"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                    <div className=' flex flex-col space-y-2' >
                        <Link href="/signin">
                            <Button className=' w-full' size={'sm'} variant={'ghost'}>
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button className=' w-full' size={'sm'}>
                                Register
                            </Button>
                        </Link>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}