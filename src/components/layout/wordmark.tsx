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
      <span className="flex h-28 w-28 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
        <Image
          src={onDark ? "/images/logo-white.webp" : "/images/logo-dark.webp"}
          alt={`${SITE_NAME} logo`}
          width={112}
          height={112}
          className={cn(
            "h-28 w-28 object-contain",
            onDark ? "dz-logo-stroke-gold" : "dz-logo-stroke-dark"
          )}
          priority
        />
      </span>
    </Link>
  );
}
