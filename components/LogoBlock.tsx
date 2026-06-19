import { cn } from "@/lib/utils";

/**
 * LogoBlock — placeholder brand mark (no copyrighted assets).
 * A geometric monogram that reads as institutional, not childish.
 */
export function LogoBlock({
  size = 36,
  label = "A",
  className,
}: {
  size?: number;
  label?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex items-center justify-center rounded-md border border-white/10 bg-graphite-800",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 rounded-md opacity-60"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, var(--win-glow), transparent 60%)",
        }}
      />
      <span
        className="relative font-mono font-semibold tracking-tight text-accent"
        style={{ fontSize: size * 0.42 }}
      >
        {label}
      </span>
    </span>
  );
}
