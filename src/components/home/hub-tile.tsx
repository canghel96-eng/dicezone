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
    title: "text-rose-950",
    body: "text-rose-950/70",
    image: "/images/teambuilding.png",
  },
  {
    bar: "bg-accent-bright",
    surface: "dz-hub-tile-amber",
    panel: "bg-white/45",
    title: "text-amber-950",
    body: "text-amber-950/70",
    image: "/images/kids.png",
  },
  {
    bar: "bg-cozy-sage",
    surface: "dz-hub-tile-emerald",
    panel: "bg-white/40",
    title: "text-emerald-950",
    body: "text-emerald-950/70",
    image: "/images/coffeshop.png",
  },
  {
    bar: "bg-secondary",
    surface: "dz-hub-tile-sky",
    panel: "bg-cyan-50/80",
    title: "text-sky-950",
    body: "text-sky-950/70",
    image: "/images/library.png",
  },
] as const;

export function HubTile({
  href,
  title,
  description,
  index,
}: {
  href: string;
  title: string;
  description: string;
  index: number;
}) {
  const theme = TILE_THEMES[index % TILE_THEMES.length];
  const hasImage = Boolean(theme.image);
  const tileRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const tileStyle = {
    "--reveal-delay": `${index * 90}ms`,
    ...(theme.image
      ? {
          backgroundImage: `linear-gradient(oklch(0.12 0.05 285 / 0.45), oklch(0.12 0.05 285 / 0.58)), url("${theme.image}")`,
          backgroundPosition: "center",
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
    <Link href={href} className="group block h-full min-w-0">
      <article
        ref={tileRef}
        style={tileStyle}
        className={cn(
          "dz-hub-tile dz-hub-tile-reveal relative flex h-full min-h-[24rem] flex-col items-center justify-center overflow-hidden p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1",
          isVisible && "dz-hub-tile-visible",
          theme.surface
        )}
      >
        <span className={cn("absolute inset-x-0 top-0 h-1.5", theme.bar)} />
        <Box
          className={cn(
            "dz-hub-tile-panel relative z-[1] rounded-xl p-4 text-center",
            hasImage ? "dz-hub-tile-image-panel backdrop-blur-[1px]" : theme.panel
          )}
        >
          <Box className="mx-auto my-auto flex max-w-[13rem] flex-col items-center justify-center text-center">
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
