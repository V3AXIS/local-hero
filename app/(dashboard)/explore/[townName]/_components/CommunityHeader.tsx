import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommunityHeader({ town }: { town: any }) {
    return (
        <div>
            <div className="h-36 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${town.banner})` }}></div>
            <div >
                <div className="flex items-end -mt-14 ml-10 space-x-4 py-4">
                    <Avatar className="h-24 w-24 border-4 dark:border-accent border-background shadow-none rounded-xl ">
                        <AvatarImage src={town.banner} alt={town.name} />
                        <AvatarFallback>{town.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow pt-12">
                        <h1 className="text-3xl font-bold">{town.name}</h1>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">e/{town.name.toLowerCase().replace(' ', '')}</p>
                    </div>
                    <Button>Join</Button>
                </div>
            </div>
        </div>
    );
}