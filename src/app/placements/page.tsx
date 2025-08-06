import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Users, Award } from "lucide-react";
import AlumniGallery from "@/components/alumni-gallery";
import { companyLogos, placementAssistance } from "@/lib/data";

export default function PlacementsPage() {
    return (
        <>
            <section className="relative bg-secondary text-primary py-20 md:py-28 overflow-hidden">
                 <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Your Career, Our Commitment</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-primary/80">
                        We are dedicated to helping our students launch successful careers in the tech industry through comprehensive placement support.
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Our Graduates Work At</h2>
                        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                            We have a strong network of hiring partners, from top MNCs to innovative startups.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                        {companyLogos.map((company) => (
                            <div key={company.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                <Image src={company.logoUrl} alt={`${company.name} logo`} width={140} height={70} objectFit="contain" data-ai-hint="company logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <AlumniGallery />

            <section className="py-16 sm:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                     <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Comprehensive Placement Assistance</h2>
                        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                           We provide end-to-end support to ensure you are job-ready.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {placementAssistance.map((item) => (
                            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="mt-4 font-headline text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 sm:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <Card className="bg-secondary text-primary shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold font-headline">Internship Opportunities</h2>
                                <p className="mt-4 text-lg text-primary/80">
                                    Gain valuable real-world experience with our internship program. We connect top students with leading companies for exciting internship roles.
                                </p>
                                <div className="mt-6">
                                    <Button asChild size="lg">
                                        <Link href="/contact">
                                            Inquire Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:block h-full w-full relative">
                                <Image src="https://placehold.co/600x400.png" alt="Intern working at a desk" className="h-full w-full object-cover" width={600} height={400} data-ai-hint="student intern working" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}
