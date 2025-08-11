
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Trainer } from '@/types';

interface TrainerCardProps {
    trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-lg">Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <Image src={trainer.avatarUrl} alt={trainer.name} width={64} height={64} className="rounded-full" data-ai-hint="professional trainer portrait" />
                    <div>
                        <h3 className="font-bold text-foreground">{trainer.name}</h3>
                        <p className="text-sm text-primary">{trainer.title}</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{trainer.bio}</p>
            </CardContent>
        </Card>
    )
}
