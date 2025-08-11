'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOutIcon } from 'lucide-react'
import { signOut } from '@/lib/auth/auth-client'
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const UserMenu = ({ user }: { user: any }) => {
    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger >
                <Avatar className=" hover:cursor-pointer border rounded-md ">
                    <AvatarImage src={user?.image} className=" rounded-md " alt="Profile image" />
                    <AvatarFallback>{user?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{user?.name}</span>
                        <span className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                        </span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={async () => {
                    await signOut();
                    router.refresh();
                    toast.success("Logout successfully!");
                }}>
                    <LogOutIcon size={16} className="opacity-60 " />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserMenu