
'use client';
import { useState } from 'react';
import type { TeamMember } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
import './flip-card.css';

interface TrainerSliderProps {
  trainers: TeamMember[];
}

const socialIconMap: { [key: string]: React.ElementType } = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Dribbble: Dribbble,
};

const FlipCard = ({ trainer }: { trainer: TeamMember }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card h-[26rem] w-full ${isFlipped ? 'is-flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front">
          <Card className="h-full w-full shadow-lg">
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <Avatar className="mb-4 h-32 w-32 border-4 border-primary/20">
                <AvatarImage src={trainer.avatarUrl} alt={trainer.name} />
                <AvatarFallback>
                  {trainer.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-primary font-headline">
                {trainer.name}
              </h3>
              <p className="text-base text-muted-foreground">{trainer.title}</p>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back p-6 text-primary-foreground" style={{ backgroundColor: 'hsl(var(--primary))' }}>
          <div className="flex h-full flex-col justify-between">
            <div>
              <h4 className="mb-2 text-xl font-bold font-headline text-primary-foreground">About Me</h4>
              <p className="mb-4 text-sm">{trainer.bio}</p>
              
              <h4 className="mb-2 text-xl font-bold font-headline text-primary-foreground">Courses</h4>
              <div className="mb-4 flex flex-wrap gap-2">
                {trainer.coursesTaught?.map((course) => (
                  <span key={course} className="rounded-full bg-white/20 px-3 py-1 text-xs">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {trainer.socials?.map((social) => {
                const Icon = socialIconMap[social.icon as string];
                if (!Icon) return null;
                return (
                    <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    >
                    <Icon className="h-6 w-6" />
                    </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function TrainerSlider({ trainers }: TrainerSliderProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-xs sm:max-w-xl md:max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {trainers.map((trainer) => (
          <CarouselItem key={trainer.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <FlipCard trainer={trainer} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 sm:left-[-50px]" />
      <CarouselNext className="right-0 sm:right-[-50px]" />
    </Carousel>
  );
}
