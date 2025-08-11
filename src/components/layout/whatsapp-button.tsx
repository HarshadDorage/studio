
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppIcon from "../icons/whatsapp-icon";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
    const whatsappNumber = "911234567890";
    const message = "Hello! I'm interested in your courses.";
    
    return (
        <Button asChild
            className={cn("fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50", 
            "bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 hover:scale-110")}
            size="icon"
            aria-label="Chat on WhatsApp"
        >
            <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-8 w-8 text-white" />
            </Link>
        </Button>
    )
}
