'use client';
import { Button } from "../ui/button";
import Link from "next/link";

export default function AuthButtons() {
    return (
        <>
            <li className="md:inline-block hidden">
                <Button size={'sm'} asChild>
                    <Link href="/signin">
                        Sign In
                    </Link>
                </Button>
            </li>
            {/* <li className="md:inline-block hidden">
                <Link href="/signup">
                    <Button size={'sm'}>
                        Register
                    </Button>
                </Link>
            </li> */}
        </>

    )
}
