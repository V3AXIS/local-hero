'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Logo = () => {
    return (
        <Link href="/" className="flex gap-2 items-center ">
            <div className="flex aspect-square size-6 items-center justify-center ">
                    <div className={`flex aspect-square items-center justify-center `}>
                        <Image width={100} height={100} alt="logo" src={'https://i.postimg.cc/PqPjvdZq/d98b17a0-b059-4c5b-a407-d9f6b0d1b87c-removalai-preview-1-s.png'} />
                    </div>
            </div>
            <span className=" text-[18px] text-foreground tracking-tighter transition-all  ease-linear hover:text-foreground/90   font-semibold inline-block">
                local <span className=' text-muted-foreground'>hero</span>
            </span>
        </Link>
    )
}

export default Logo