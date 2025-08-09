import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center p-4">
      <h1 className="text-5xl md:text-6xl tracking-tighter font-bold ">
        Welcome to Local Hero
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        The heart of your community. Connect with neighbors, discover local events, and help make your town a better place.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
      <p className="mt-12 text-sm ">
        Just want to look around?{" "}
        <Link href="/explore?townId=1" className="underline ">
          Explore a community
        </Link>
      </p>
    </div>
  );
}