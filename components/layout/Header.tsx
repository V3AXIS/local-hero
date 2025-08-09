import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white dark:bg-gray-950 px-4 md:px-6">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                Local Hero
              </Link>
              <Link href="/town-hub/1">Town Hub</Link>
              <Link href="/explore?townId=1">Explore</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link href="#" className="font-bold text-xl">Local Hero</Link>
      </div>
      <div>
        {/* User avatar/menu can go here */}
      </div>
    </header>
  );
}