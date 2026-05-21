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
          ? "dz-hero-immersive flex min-h-[32rem] items-center border-primary-foreground/10 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44"
          : "dz-page-hero border-border/60 py-14 sm:py-20",
        className
      )}
    >
      {!immersive && (
        <>
          <Box
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent-bright/25 blur-3xl"
            aria-hidden
          />
          <Box
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/55 blur-3xl"
            aria-hidden
          />
          <Box
            className="pointer-events-none absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
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
              : "dz-page-hero-title max-w-3xl"
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
                : "dz-page-hero-description mt-5"
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
