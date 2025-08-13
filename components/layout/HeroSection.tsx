import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <main className="overflow-hidden relative  flex justify-center items-center select-none md:pb-0 pb-12">
            <div className="flex flex-col-reverse lg:flex-row items-center container mx-auto max-w-6xl px-4 gap-8 lg:gap-12">
                {/* Text Content */}
                <div className="max-w-lg w-full text-center lg:text-left lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-tighter">
                        Where Neighbors become Local <span className="text-muted-foreground">Heroes</span>.
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Stay connected, take action, and see your community thrive. Local Hero brings neighbors,
                        events, and opportunities together right where you live.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-3">
                        <Button size="xl" asChild>
                            <Link href="/explore/greenwood">
                                <span className="whitespace-nowrap">Explore</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
                        <Image
                            className="rounded-lg shadow-md md:ml-20 md:mb-10 object-cover invert dark:mix-blend-lighten dark:invert-0"
                            src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                            alt="Abstract Object"
                            width={800}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
