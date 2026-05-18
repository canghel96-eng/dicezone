import Link from "next/link";
import { Heart } from "lucide-react";
import { Wordmark } from "@/components/layout/wordmark";
import { Box } from "@/components/ui/box";
import { formatRegion, formatYear, getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function Footer() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const year = new Date().getFullYear();
  const region = d.siteRegion;

  return (
    <footer className="dz-site-footer mt-0">
      <Box className="cozy-container py-14">
        <Box className="grid gap-10 md:grid-cols-3">
          <Box className="space-y-4">
            <Wordmark size="md" />
            <p className="text-sm leading-relaxed text-surface-dark-foreground/70">
              {formatRegion(d.footer.blurb, region)}
            </p>
          </Box>

          <Box>
            <h3 className="dz-eyebrow mb-4 text-surface-dark-foreground/90">
              {d.ui.explore}
            </h3>
            <ul className="space-y-2.5">
              {d.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-dark-foreground/75 transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>

          <Box>
            <h3 className="dz-eyebrow mb-4 text-surface-dark-foreground/90">
              {d.ui.contact}
            </h3>
            <p className="text-sm text-surface-dark-foreground/75">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-accent-bright hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-surface-dark-foreground/65">
              {formatRegion(d.footer.serving, region)}
            </p>
          </Box>
        </Box>

        <p className="mt-12 flex flex-wrap items-center justify-center gap-1.5 border-t border-primary-foreground/10 pt-8 text-center text-xs text-surface-dark-foreground/55">
          <span>{formatYear(d.footer.copyright, year)}</span>
          <Heart className="inline h-3.5 w-3.5 fill-accent-bright/80 text-accent-bright" aria-hidden />
          <span>{d.footer.copyrightEnd}</span>
        </p>
      </Box>
    </footer>
  );
}
