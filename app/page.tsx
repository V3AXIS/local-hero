import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/server/userAction";
import Link from "next/link";

export default async function HomePage() {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center p-4">
      <h1 className="text-5xl md:text-6xl tracking-tighter font-bold ">
        Welcome to Local Hero
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        The heart of your community. Connect with neighbors, discover local events, and help make your town a better place.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {user ?
          <p>Hi, {user?.name}</p>
          :
          <Button asChild size="lg">
            <Link href="/signin">Sign In</Link>
          </Button>
        }

      </div>
      <p className="mt-12 text-sm flex gap-2 items-center ">
        Just want to look around?{" "}
        <Button asChild >
          <Link href="/explore?townId=1">
            Explore Community
          </Link>
       </Button>
      </p>
    </div>
  );
}