import Link from "next/link";
import { Dice5 } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  onDark,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-md transition-transform group-hover:scale-105",
          onDark
            ? "from-primary to-primary/80 text-primary-foreground"
            : "from-primary to-primary/80 text-primary-foreground shadow-[var(--shadow-cozy)]"
        )}
      >
        <Dice5 className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <span
        className={cn(
          "font-serif text-xl font-semibold tracking-tight",
          onDark ? "text-surface-dark-foreground" : "text-foreground"
        )}
      >
        {SITE_NAME}
      </span>
    </Link>
  );
}
