"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";

const TILE_THEMES = [
  {
    bar: "bg-primary",
    surface: "dz-hub-tile-rose",
    panel: "bg-white/45",
    title: "text-stone-950",
    body: "text-stone-950/70",
    image: "/images/teambuilding.webp",
    imagePosition: "center",
    overlay:
      "linear-gradient(135deg, rgb(176 120 48 / 0.65), rgb(13 31 20 / 0.55))",
  },
  {
    bar: "bg-accent-bright",
    surface: "dz-hub-tile-amber",
    panel: "bg-white/40",
    title: "text-amber-950",
    body: "text-amber-950/70",
    image: "/images/kids.webp",
    imagePosition: "center",
    overlay:
      "linear-gradient(135deg, rgb(106 170 122 / 0.55), rgb(13 31 20 / 0.55))",
  },
  {
    bar: "bg-cozy-sage",
    surface: "dz-hub-tile-emerald",
    panel: "bg-white/35",
    title: "text-emerald-950",
    body: "text-emerald-950/70",
    image: "/images/coffeshop.webp",
    imagePosition: "center",
    overlay:
      "linear-gradient(135deg, rgb(77 122 88 / 0.62), rgb(13 31 20 / 0.52))",
  },
  {
    bar: "bg-secondary",
    surface: "dz-hub-tile-sky",
    panel: "bg-white/35",
    title: "text-emerald-950",
    body: "text-emerald-950/70",
    image: "/images/library.webp",
    imagePosition: "center",
    overlay:
      "linear-gradient(135deg, rgb(28 61 37 / 0.68), rgb(176 120 48 / 0.40))",
  },
] as const;

export function HubTile({
  href,
  title,
  description,
  index,
  className,
}: {
  href: string;
  title: string;
  description: string;
  index: number;
  className?: string;
}) {
  const theme = TILE_THEMES[index % TILE_THEMES.length];
  const hasImage = Boolean(theme.image);
  const tileRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const tileStyle = {
    "--reveal-delay": `${index * 90}ms`,
    ...(theme.image
      ? {
          backgroundImage: `${theme.overlay}, url("${theme.image}")`,
          backgroundPosition: theme.imagePosition,
          backgroundSize: "cover",
        }
      : {}),
  } as CSSProperties;

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(tile);

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href={href}
      className={cn(
        "group block h-full min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/35",
        className
      )}
    >
      <article
        ref={tileRef}
        style={tileStyle}
        className={cn(
          "dz-hub-tile dz-hub-tile-reveal relative flex h-full min-h-[18rem] flex-col items-center justify-center overflow-hidden p-5 transition-all duration-300 group-hover:-translate-y-1 sm:min-h-[20rem] sm:p-6",
          isVisible && "dz-hub-tile-visible",
          theme.surface
        )}
      >
        <span className={cn("absolute inset-x-0 top-0 h-1.5", theme.bar)} />
        <Box
          className={cn(
            "dz-hub-tile-panel relative z-[1] rounded-2xl p-5 text-center sm:p-6",
            hasImage ? "dz-hub-tile-image-panel backdrop-blur-[1px]" : theme.panel
          )}
        >
          <Box className="mx-auto my-auto flex max-w-md flex-col items-center justify-center text-center">
            <h3
              className={cn(
                "dz-hub-tile-title font-serif text-2xl font-bold leading-snug",
                hasImage ? "dz-hub-tile-image-text" : theme.title
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "mt-4 text-center text-sm font-medium leading-relaxed",
                hasImage ? "dz-hub-tile-image-text" : theme.body
              )}
            >
              {description}
            </p>
          </Box>
        </Box>
      </article>
    </Link>
  );
}
