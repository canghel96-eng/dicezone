"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n";
import type { NavLink } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function MobileMenu({
  links,
  ariaLabel,
  openLabel,
  bookLabel,
  locale,
  languageLabels,
}: {
  links: NavLink[];
  ariaLabel: string;
  openLabel: string;
  bookLabel: string;
  locale: Locale;
  languageLabels: { language: string; ro: string; en: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const Icon = open ? X : Menu;

  return (
    <div className="relative order-2 ml-auto xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-surface-dark-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright"
        aria-label={openLabel}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <Icon className="h-5 w-5" aria-hidden />
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-[120] w-[min(calc(100vw-2rem),22rem)] rounded-3xl border border-primary-foreground/15 bg-surface-dark/95 p-4 text-surface-dark-foreground shadow-2xl backdrop-blur-md"
        >
          <nav className="grid gap-1" aria-label={ariaLabel}>
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-surface-dark-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-accent-bright",
                    isActive && "bg-primary-foreground/10 text-accent-bright"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-primary-foreground/10 pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="dz-header-cta flex justify-center text-center"
            >
              {bookLabel}
            </Link>
            <LanguageSwitcher
              locale={locale}
              labels={languageLabels}
              onDark
              className="mx-auto mt-4 w-fit"
            />
          </div>
        </div>
      )}
    </div>
  );
}
