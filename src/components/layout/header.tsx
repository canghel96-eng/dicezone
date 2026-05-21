import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MainNav } from "@/components/layout/main-nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Wordmark } from "@/components/layout/wordmark";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function Header() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <header className="dz-site-header top-0 z-[100] xl:sticky">
      <Box className="cozy-container flex min-h-[4.25rem] items-center justify-between gap-x-3 gap-y-3 py-3 xl:h-[4.25rem] xl:flex-nowrap xl:gap-x-4 xl:py-0">
        <Wordmark onDark />

        <MainNav
          className="hidden flex-1 justify-center xl:flex xl:w-auto"
          links={d.nav}
          ariaLabel={d.ui.mainNav}
          onDark
        />

        <Box className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link href="/contact" className="dz-header-cta">
            {d.ui.bookEvent}
          </Link>
          <LanguageSwitcher
            locale={locale}
            labels={{
              language: d.ui.language,
              ro: d.ui.switchToRo,
              en: d.ui.switchToEn,
            }}
            onDark
          />
        </Box>

        <MobileMenu
          links={d.nav}
          ariaLabel={d.ui.mobileNav}
          openLabel={d.ui.openMenu}
          bookLabel={d.ui.bookEvent}
          locale={locale}
          languageLabels={{
            language: d.ui.language,
            ro: d.ui.switchToRo,
            en: d.ui.switchToEn,
          }}
        />
      </Box>
    </header>
  );
}
