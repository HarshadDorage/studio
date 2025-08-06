import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/logo";
import { courses } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-xs">
              Empowering India's tech talent with industry-leading training and mentorship.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary font-headline">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/placements" className="text-muted-foreground hover:text-primary">Placements</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/bookmarks" className="text-muted-foreground hover:text-primary">Bookmarks</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary font-headline">Courses</h3>
            <ul className="mt-4 space-y-2">
              {courses.slice(0, 4).map(course => (
                 <li key={course.id}><Link href={`/courses/${course.slug}`} className="text-muted-foreground hover:text-primary">{course.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-primary font-headline">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="break-all"><a href="mailto:info@samarthview.com" className="hover:text-primary">info@samarthview.com</a></li>
                <li><a href="tel:+911234567890" className="hover:text-primary">+91 12345 67890</a></li>
                <li>Bengaluru, India</li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Samarthview Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
