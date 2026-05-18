"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { NavLink } from "@/lib/i18n/types";

export function MainNav({
  className,
  links,
  ariaLabel,
  locale,
  languageLabels,
  onDark = true,
}: {
  className?: string;
  links: NavLink[];
  ariaLabel: string;
  locale: Locale;
  languageLabels: { language: string; ro: string; en: string };
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
      <LanguageSwitcher
        locale={locale}
        labels={languageLabels}
        onDark={onDark}
        className="ml-1"
      />
    </nav>
  );
}
