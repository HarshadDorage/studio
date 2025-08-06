import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppIcon from "../icons/whatsapp-icon";

export default function WhatsAppButton() {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "911234567890";
    const message = "Hello! I'm interested in your courses.";
    
    return (
        <Button asChild
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#128C7E] z-50"
            size="icon"
            aria-label="Chat on WhatsApp"
        >
            <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-8 w-8 text-white" />
            </Link>
        </Button>
    )
}
