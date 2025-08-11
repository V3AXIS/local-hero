import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <main className="overflow-hidden h-screen flex justify-center select-none ">
            <div className="container mx-auto flex items-center max-w-6xl  flex-col px-6 lg:flex-row mt-10">

                {/* Text Content */}
                <div className="text-section max-w-lg mx-auto text-center lg:mx-0 lg:w-1/2 lg:text-left py-8">
                    <h1 className="headline text-4xl font-semibold tracking-tight md:text-5xl">
                        Where Neighbors become Local <span className=' text-muted-foreground'>Heroes</span> .
                    </h1>
                    <p className="subheadline mt-4 text-lg ">
                        Stay connected, take action, and see your community thrive. Local Hero brings neighbors, events, and opportunities together right where you live.
                    </p>
                    <div className="cta-container mt-6 flex flex-col items-center gap-2 sm:flex-row lg:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#link">
                                <span className="cta-text whitespace-nowrap">Explore</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="image-section relative lg:w-1/2 ">
                    <Image
                        className="hero-image h-56 w-full ml-32 mb-10 object-cover rounded-lg shadow-md sm:h-72 lg:h-auto lg:max-h-[600px]  lg:w-full  invert  dark:mix-blend-lighten dark:invert-0" 
                        src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                        alt="Abstract Object"
                        height={600} //Adjusted height and width
                        width={800}
                        style={{ objectFit: "cover" }} // Ensure the image covers the area without distortion
                    />
                </div>
            </div>
        </main>

    )
}