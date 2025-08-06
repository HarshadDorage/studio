import { Megaphone } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBanner() {
    return (
        <div className="bg-accent text-accent-foreground">
            <div className="container mx-auto px-4 md:px-6 py-2 text-center text-sm">
                <p className="flex items-center justify-center gap-2">
                    <Megaphone className="h-4 w-4" />
                    <span>New batch starts Aug 15 &ndash;</span>
                    <Link href="/contact" className="underline font-semibold hover:text-white">
                        Enroll Now
                    </Link>
                </p>
            </div>
        </div>
    )
}
