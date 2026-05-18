import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";
import { Wordmark } from "@/components/layout/wordmark";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function Header() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <header className="dz-site-header sticky top-0 z-[100]">
      <Box className="cozy-container flex min-h-[4.25rem] flex-wrap items-center justify-between gap-x-3 gap-y-3 py-3 lg:h-[4.25rem] lg:flex-nowrap lg:gap-x-4 lg:py-0">
        <Wordmark priority />

        <MainNav
          className="order-3 w-full flex-1 justify-center lg:order-none lg:w-auto"
          links={d.nav}
          ariaLabel={d.ui.mainNav}
          locale={locale}
          languageLabels={{
            language: d.ui.language,
            ro: d.ui.switchToRo,
            en: d.ui.switchToEn,
          }}
          onDark
        />

        <Link
          href="/corporate/book"
          className="dz-header-cta order-2 ml-auto shrink-0 lg:order-none lg:ml-0"
        >
          {d.ui.bookEvent}
        </Link>
      </Box>
    </header>
  );
}
