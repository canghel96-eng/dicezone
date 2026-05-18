"use client";

import { useRouter } from "next/navigation";
import { Box } from "@/components/ui/box";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  labels,
  className,
  onDark,
}: {
  locale: Locale;
  labels: { language: string; ro: string; en: string };
  className?: string;
  onDark?: boolean;
}) {
  const router = useRouter();

  function setLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  return (
    <Box
      className={cn(
        "flex items-center gap-0.5 rounded-full p-0.5",
        onDark
          ? "border border-primary-foreground/20 bg-primary-foreground/10"
          : "border border-border bg-secondary/40 shadow-sm",
        className
      )}
      role="group"
      aria-label={labels.language}
    >
      {(["ro", "en"] as const).map((code) => {
        const active = locale === code;
        const ariaLabel = code === "ro" ? labels.ro : labels.en;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "min-w-[2.25rem] rounded-full px-2 py-1.5 text-xs font-bold uppercase tracking-wide transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-1",
              onDark && "focus-visible:ring-offset-surface-dark",
              active
                ? onDark
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-primary text-primary-foreground shadow-sm"
                : onDark
                  ? "text-surface-dark-foreground/75 hover:bg-primary-foreground/10 hover:text-surface-dark-foreground"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
            )}
            aria-pressed={active}
            aria-label={ariaLabel}
          >
            {code}
          </button>
        );
      })}
    </Box>
  );
}
