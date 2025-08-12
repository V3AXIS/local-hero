import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" text-center ">
        <h1 className=" text-3xl font-bold tracking-tighter">404</h1>
        <p className="my-3">Could not find requested resource</p>
        <Link href="/"><Button >Return Home</Button></Link>
      </div>
    </div>
  );
}
