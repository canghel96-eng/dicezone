"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";

export function ExperienceSection({
  eyebrow,
  title,
  text,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  imageAlt: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "dz-experience-meet cozy-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
        visible && "dz-experience-meet-visible"
      )}
    >
      <Box className="dz-experience-meet-image aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-cozy-lg)]">
        <Image
          src="/images/AtTheTable.png"
          alt={imageAlt}
          width={1200}
          height={900}
          className="h-full w-full object-cover object-center"
        />
      </Box>

      <Box className="dz-experience-meet-copy">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {text}
        </p>
      </Box>
    </div>
  );
}
