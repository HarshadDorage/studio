'use client';
import { Megaphone } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "../countdown-timer";

export default function AnnouncementBanner() {
    const targetDate = "2024-08-15T23:59:59";

    return (
        <div className="bg-accent text-accent-foreground">
            <div className="container mx-auto px-4 md:px-6 py-2 text-center text-sm">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    <Megaphone className="h-4 w-4" />
                    <span className="font-semibold">Limited Time Offer! New batch starts Aug 15. Enrollment ends in:</span>
                    <CountdownTimer targetDate={targetDate} />
                    <Link href="/contact" className="underline font-bold hover:text-white ml-2">
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    )
}