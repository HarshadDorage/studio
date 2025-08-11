
import { placements } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Animated from "./animated";

export default function AlumniGallery() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <Animated className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl font-headline">Our Alumni Success Stories</h2>
                    <p className="mt-4 text-lg text-[#696969] max-w-2xl mx-auto">
                        Our graduates are making an impact at top companies across the tech industry.
                    </p>
                </Animated>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {placements.map((placement, index) => (
                        <Animated key={placement.name} delay={index * 150}>
                            <Card className="overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border hover:border-accent/50 h-full">
                                <CardContent className="p-6 flex flex-col items-center h-full">
                                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary/10">
                                        <AvatarImage src={placement.avatarUrl} alt={placement.name} data-ai-hint="student headshot" />
                                        <AvatarFallback>{placement.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <p className="text-muted-foreground italic mb-4 flex-grow">"{placement.quote}"</p>
                                    <h3 className="font-bold text-lg">{placement.name}</h3>
                                    <p className="text-sm text-primary font-semibold mb-4">Placed at</p>
                                    <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all">
                                        <Image src={placement.companyLogoUrl} alt={`${placement.company} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    )
}
