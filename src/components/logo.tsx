import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <svg
        width="250"
        height="60"
        viewBox="0 0 300 70"
        className="w-auto h-10 md:h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="planetGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="30%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFA500" />
          </radialGradient>
           <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Kalam:wght@300&display=swap');
            `}
          </style>
        </defs>

        {/* Planet Icon */}
        <g transform="translate(5,5)">
          <circle cx="30" cy="30" r="28" fill="url(#planetGradient)" />
           <path
            d="M 5,30 A 25 12 0 0 1 55,30"
            stroke="black"
            strokeWidth="4"
            fill="none"
            transform="rotate(-20 30 30)"
          />
           <path
            d="M 5,30 A 25 12 0 0 0 55,30"
            stroke="black"
            strokeWidth="4"
            fill="none"
            transform="rotate(-20 30 30)"
          />
        </g>
        
        {/* Text */}
        <g transform="translate(80, 5)">
          <text
            x="10"
            y="35"
            fontFamily="'Caveat', cursive"
            fontSize="36"
            fontWeight="700"
            fill="hsl(var(--primary))"
          >
            SamarthView
          </text>
          <line
            x1="10"
            y1="42"
            x2="210"
            y2="42"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          <text
            x="10"
            y="60"
            fontFamily="'Kalam', cursive"
            fontSize="16"
            fontWeight="300"
            fill="hsl(var(--muted-foreground))"
          >
            Imparting Global Skills
          </text>
        </g>
      </svg>
    </Link>
  );
}
