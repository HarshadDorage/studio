
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <>
      <section className="relative bg-secondary text-primary py-20 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Get In Touch</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary/80">
            We're here to help. Whether you have a question about our courses or need support, we're ready to answer.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            <div className="space-y-8">
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                    <Input type="email" placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                    <Input placeholder="Course Inquiry" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                    <Textarea placeholder="Your message..." {...field} rows={6} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg">Send Message</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-foreground">Address</h3>
                                <p>123 Tech Park, Koramangala<br />Bengaluru, Karnataka 560034<br />India</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <a href="mailto:info@samarthview.com" className="hover:text-primary break-all">info@samarthview.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-foreground">Phone</h3>
                                <a href="tel:+911234567890" className="hover:text-primary">+91 12345 67890</a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="font-headline">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-4">
                            <Button asChild variant="outline" size="icon">
                                <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5"/></Link>
                            </Button>
                            <Button asChild variant="outline" size="icon">
                                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5"/></Link>
                            </Button>
                             <Button asChild variant="outline" size="icon">
                                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div>
                 <h2 className="text-3xl font-bold text-center mb-8 font-headline text-primary">Our Location</h2>
                 <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.58334812489!2d77.62472931526487!3d12.93448999088019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc6d%3A0x5462537842603ae1!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689243763268!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Samarthview Technologies Location"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
