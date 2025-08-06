import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <svg
        width="250"
        height="60"
        viewBox="0 0 300 70"
        className="w-auto h-8 md:h-10"
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
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </radialGradient>
        </defs>

        <g transform="translate(5,5)">
          <circle cx="30" cy="30" r="28" fill="hsl(var(--accent))" />
          <path
            d="M 5,30 A 25 12 0 0 1 55,30"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="5"
            fill="none"
            transform="rotate(-20 30 30)"
          />
          <path
            d="M 5,30 A 25 12 0 0 0 55,30"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="5"
            fill="none"
            transform="rotate(-20 30 30)"
          />
        </g>
        
        <g transform="translate(80, 5)">
          <text
            x="10"
            y="35"
            fontFamily="Poppins, sans-serif"
            fontSize="28"
            fontWeight="600"
            fill="hsl(var(--primary))"
          >
            SamarthView
          </text>
          <line
            x1="10"
            y1="42"
            x2="190"
            y2="42"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          <text
            x="10"
            y="60"
            fontFamily="Poppins, sans-serif"
            fontSize="14"
            fill="hsl(var(--muted-foreground))"
          >
            Imparting Global Skills
          </text>
        </g>
      </svg>
    </Link>
  );
}
