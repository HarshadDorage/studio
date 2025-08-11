
'use client';

import { cn } from '@/lib/utils';
import { useRef, useEffect, useState, type HTMLAttributes } from 'react';

interface AnimatedProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export default function Animated({
  children,
  className,
  animation = 'fade-in slide-in-from-bottom-8',
  delay = 0,
  duration = 500,
  triggerOnce = true,
  ...props
}: AnimatedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
            if (!triggerOnce) {
                setIsInView(false);
            }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        isInView ? `animate-in ${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
