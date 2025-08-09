'use client'
import { usePathname } from "next/navigation";

export function getCapitalizedLastPath() {
    const pathname = usePathname();
    const parts = pathname.split("/").filter(Boolean);
    const lastPart = parts[parts.length - 1] || "Dashboard";
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
}

