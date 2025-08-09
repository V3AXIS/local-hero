'use client';
import { Button } from "../ui/button";
import Link from "next/link";

export default function AuthButtons() {
    return (
        <>
            <li className="md:inline-block hidden">
                <Link href="/signin">
                    <Button size={'sm'}>
                        Sign In
                    </Button>
                </Link>
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
