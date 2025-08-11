
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import { Target, Eye, Handshake } from "lucide-react";
import Image from "next/image";
import TrainerSlider from "@/components/trainer-slider";

const coreValues = [
    {
        icon: Target,
        title: "Student Success",
        description: "Our primary goal is the success of our students. We are committed to providing them with the skills and support they need to achieve their career goals."
    },
    {
        icon: Eye,
        title: "Integrity & Transparency",
        description: "We operate with the utmost integrity. We are transparent in our curriculum, pricing, and career support services."
    },
    {
        icon: Handshake,
        title: "Community Building",
        description: "We foster a collaborative and supportive community of learners, mentors, and alumni to encourage lifelong learning and networking."
    },
]

export default function AboutPage() {
    return (
        <>
            <section className="relative py-20 md:py-32 text-primary overflow-hidden isolate">
                <Image 
                    src="https://placehold.co/1920x400.png"
                    alt="Abstract background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 -z-20"
                    data-ai-hint="abstract texture background"
                />
                <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10"></div>

                <div className="container mx-auto px-4 md:px-6 text-center relative">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">About Samarthview Technologies</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
                        We are on a mission to empower India's tech talent through accessible, high-quality education and mentorship.
                    </p>
                </div>
            </section>
            
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight font-headline text-[#1A1A1A]">Our Story</h2>
                            <p className="mt-4">
                                Samarthview Technologies was founded with a simple yet powerful vision: to bridge the gap between academic education and the skills demanded by the fast-evolving tech industry. We saw a nation brimming with potential but lacking the right platforms for practical, industry-relevant training.
                            </p>
                            <p className="mt-4">
                                From our humble beginnings, we have grown into a leading tech training institute, dedicated to creating a generation of skilled professionals ready to lead and innovate. Our approach combines a hands-on curriculum, expert mentorship, and robust career support to ensure our students don't just learn, but thrive.
                            </p>
                        </div>
                        <div className="order-first md:order-last">
                            <Image src="https://placehold.co/600x400.png" alt="Our Team" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="collaborative team meeting" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 sm:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-[#1A1A1A]">Our Core Values</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto">
                           The principles that guide our mission and define our culture.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {coreValues.map((value) => (
                             <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border-t-4 border-accent hover:-translate-y-2">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="mt-4">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 sm:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-[#1A1A1A]">Meet Our Leadership</h2>
                         <p className="mt-4 text-lg max-w-2xl mx-auto">
                           The passionate individuals driving our mission forward.
                        </p>
                    </div>
                    <div className="mt-16">
                        <TrainerSlider trainers={team} />
                    </div>
                </div>
            </section>
        </>
    );
}
