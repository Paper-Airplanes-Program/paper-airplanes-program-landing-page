export function AuroraField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-[28%] -left-[12%] h-[72vw] w-[72vw] animate-aurora rounded-full bg-[radial-gradient(circle,var(--color-iris-600)_0%,transparent_62%)] opacity-55 blur-[110px]" />
      <div className="absolute -top-[18%] right-[-16%] h-[64vw] w-[64vw] animate-aurora-slow rounded-full bg-[radial-gradient(circle,var(--color-aurora-600)_0%,transparent_60%)] opacity-45 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[18%] h-[58vw] w-[58vw] animate-aurora rounded-full bg-[radial-gradient(circle,var(--color-dawn-600)_0%,transparent_62%)] opacity-40 blur-[130px] [animation-delay:-9s]" />
      <div className="absolute top-[34%] left-[42%] h-[34vw] w-[34vw] animate-aurora-slow rounded-full bg-[radial-gradient(circle,var(--color-mint-500)_0%,transparent_65%)] opacity-20 blur-[120px] [animation-delay:-15s]" />
    </div>
  );
}

const PATHS = [
  {
    d: "M -120 620 C 240 470, 520 700, 830 425 S 1250 170, 1580 250",
    dur: "23s",
    delay: "0s",
    stroke: "var(--trail-1)",
    size: 26,
    opacity: 0.9,
  },
  {
    d: "M -120 235 C 300 385, 645 115, 985 305 S 1305 525, 1580 415",
    dur: "31s",
    delay: "-8s",
    stroke: "var(--trail-2)",
    size: 20,
    opacity: 0.7,
  },
  {
    d: "M -100 800 C 380 735, 600 520, 985 630 S 1330 705, 1560 545",
    dur: "27s",
    delay: "-17s",
    stroke: "var(--trail-3)",
    size: 16,
    opacity: 0.55,
  },
];

export function FlightPaths({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        {PATHS.map((p, i) => (
          <linearGradient
            key={i}
            id={`trail-${i}`}
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={p.stroke} stopOpacity="0" />
            <stop offset="0.35" stopColor={p.stroke} stopOpacity="0.55" />
            <stop offset="0.7" stopColor={p.stroke} stopOpacity="0.35" />
            <stop offset="1" stopColor={p.stroke} stopOpacity="0" />
          </linearGradient>
        ))}
        <filter id="plane-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {PATHS.map((p, i) => (
        <path
          key={`line-${i}`}
          d={p.d}
          fill="none"
          stroke={`url(#trail-${i})`}
          strokeWidth="1.5"
          strokeDasharray="10 14"
          className="animate-trail"
          style={{ animationDuration: `${6 + i * 2}s` }}
        />
      ))}

      <g className="motion-reduce:hidden" filter="url(#plane-glow)">
        {PATHS.map((p, i) => (
          <g key={`plane-${i}`} opacity={p.opacity}>
            <g transform={`translate(${-p.size / 2}, ${-p.size / 2})`}>
              <path
                d="M22 2 2 10.2l6.4 2.2L20.2 4.6 10.6 14.4l.3 6.4c0 .5.7.7 1 .3l3-3.7 4.8 3.5c.5.4 1.2 0 1.3-.6L23.6 3c.1-.7-.6-1.2-1.2-1Z"
                fill={p.stroke}
                transform={`scale(${p.size / 24})`}
              />
            </g>
            <animateMotion
              dur={p.dur}
              begin={p.delay}
              repeatCount="indefinite"
              rotate="auto"
              path={p.d}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Starfield({ className = "" }: { className?: string }) {
  const stars = [
    [8, 18], [16, 62], [23, 31], [31, 78], [38, 12], [44, 47],
    [52, 84], [58, 24], [64, 58], [71, 15], [77, 71], [83, 38],
    [89, 66], [94, 22], [12, 88], [47, 68], [68, 91], [27, 52],
  ];
  return (
    <div aria-hidden className={`starfield pointer-events-none absolute inset-0 ${className}`}>
      {stars.map(([left, top], i) => (
        <span
          key={i}
          className="absolute h-[3px] w-[3px] animate-twinkle rounded-full bg-white"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${(i % 7) * 0.65}s`,
            animationDuration: `${3.4 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
