'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const calculateTimeLeft = (targetDate: string) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null;
  }
  
  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }

    return (
      <span key={interval} className="font-bold text-white tabular-nums">
        {String(timeLeft[interval]).padStart(2, '0')}{interval[0]}
      </span>
    );
  });

  return (
    <div className="flex gap-2">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
