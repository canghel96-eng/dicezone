import type { ReactNode } from "react";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  pill,
  accent,
  children,
  className,
  variant = "page",
}: {
  title: string;
  description?: string;
  pill?: string;
  accent?: string;
  children?: ReactNode;
  className?: string;
  variant?: "immersive" | "page";
}) {
  const immersive = variant === "immersive";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        immersive
          ? "dz-hero-immersive flex min-h-[32rem] items-center border-primary-foreground/10 py-20 sm:py-28 lg:py-32"
          : "cozy-hero-pattern border-border/60 bg-gradient-to-b from-cozy-warm/80 via-secondary/30 to-background py-14 sm:py-20",
        className
      )}
    >
      {!immersive && (
        <>
          <Box
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <Box
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
        </>
      )}

      <Box
        className={cn(
          "cozy-container relative z-[2] w-full",
          immersive && "text-center"
        )}
      >
        {pill && (
          <span className={cn(immersive ? "dz-hero-pill" : "cozy-pill mb-4")}>
            {pill}
          </span>
        )}
        <h1
          className={cn(
            immersive
              ? "dz-hero-title mx-auto max-w-4xl"
              : "max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          )}
        >
          {title}
        </h1>
        {accent && immersive && (
          <p className="dz-hero-accent mx-auto mt-5 max-w-2xl">{accent}</p>
        )}
        {description && (
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              immersive
                ? "dz-hero-description mx-auto mt-6"
                : "mt-5 text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
        {children && (
          <Box
            className={cn(
              "mt-9 flex flex-wrap gap-4",
              immersive && "justify-center"
            )}
          >
            {children}
          </Box>
        )}
      </Box>
    </section>
  );
}
