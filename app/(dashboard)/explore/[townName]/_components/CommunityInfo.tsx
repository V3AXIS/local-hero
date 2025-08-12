"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CommunityInfo({ town, onCreatePost }: { town: any, onCreatePost: (type: string) => void }) {
    return (
        <div className="space-y-4 sticky top-6">
            <Card>
                <CardHeader>
                    <CardTitle>About {town.name}</CardTitle>
                    <CardDescription className="text-xs pt-1">{town.createdAt}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{town.description}</p>
                    <div className="flex justify-around text-center pt-4 mt-4 border-t">
                        <div>
                            <p className="font-bold text-lg">{town.population.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">Population</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">{town.activeUsers.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">Members</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* This button launches the modal for creating a new post, defaulting to 'issue' type */}
                    <Button className="w-full" onClick={() => onCreatePost('issue')}>
                        Create Post
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Community Rules</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="multiple" className="w-full">
                        {town.rules.map((rule: any, index: number) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-sm text-left">
                                    {index + 1}. {rule.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground">
                                    {rule.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}