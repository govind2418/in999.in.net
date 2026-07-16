type LogoMarkProps = {
  className?: string;
};

const NOTCH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      {NOTCH_ANGLES.map((angle) => (
        <line
          key={angle}
          x1={12 + 9.75 * Math.cos((angle * Math.PI) / 180)}
          y1={12 + 9.75 * Math.sin((angle * Math.PI) / 180)}
          x2={12 + 11 * Math.cos((angle * Math.PI) / 180)}
          y2={12 + 11 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ))}
      <path
        d="M12.6 8.4c1.55 0 2.7 1.16 2.7 2.98 0 1.03-.32 2.02-1.03 3.36l-1.87 3.51h-1.72l1.6-2.95a2.9 2.9 0 0 1-.42.03c-1.5 0-2.66-1.13-2.66-2.7 0-1.71 1.25-3.23 3.4-3.23Zm-.02 1.36c-1.05 0-1.72.77-1.72 1.8 0 1 .62 1.67 1.6 1.67.99 0 1.7-.7 1.7-1.7 0-1.04-.65-1.77-1.58-1.77Z"
        fill="currentColor"
      />
    </svg>
  );
}
