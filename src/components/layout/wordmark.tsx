import Image from "next/image";
import Link from "next/link";
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
      <span className="flex h-10 w-10 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
        <Image
          src={onDark ? "/images/logo-white.webp" : "/images/logo-dark.webp"}
          alt={`${SITE_NAME} logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          priority
        />
      </span>
      <span
        className={cn(
          "text-2xl tracking-wide",
          onDark ? "text-surface-dark-foreground" : "text-primary"
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {SITE_NAME}
      </span>
    </Link>
  );
}
