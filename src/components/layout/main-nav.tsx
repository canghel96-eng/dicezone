"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/i18n/types";

export function MainNav({
  className,
  links,
  ariaLabel,
  children,
  onDark = true,
}: {
  className?: string;
  links: NavLink[];
  ariaLabel: string;
  children?: ReactNode;
  onDark?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("cozy-nav", className)} aria-label={ariaLabel}>
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              onDark ? "dz-nav-link" : "cozy-nav-btn",
              onDark && isActive && "dz-nav-link-active",
              !onDark && isActive && "cozy-nav-btn-active"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </nav>
  );
}
