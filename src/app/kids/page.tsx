import Link from "next/link";
import { Heart, Lightbulb, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Box } from "@/components/ui/box";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { getGamesByTag } from "@/lib/games";

const FEATURE_ICONS = [Users, Lightbulb, Heart];

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.kids.metaTitle };
}

export default async function KidsPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const games = getGamesByTag("kids", locale).slice(0, 6);

  return (
    <>
      <PageHero
        title={d.kids.heroTitle}
        description={d.kids.heroDescription}
        variant="immersive"
        className="dz-hero-kids"
      >
        <Link href="/contact" className="dz-btn-hero inline-flex h-12 items-center px-8 text-sm">
          {d.kids.bookCta}
        </Link>
      </PageHero>

      <section className="cozy-section">
        <Box className="cozy-container">
          <Box className="grid gap-6 md:grid-cols-3">
            {d.kids.features.map((item, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <Card key={item.title} className="cozy-card">
                  <CardHeader>
                    <Box className="cozy-icon-wrap mb-3">
                      <Icon className="h-6 w-6" />
                    </Box>
                    <CardTitle className="font-serif font-medium">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.text}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </Box>
        </Box>
      </section>

      <section className="cozy-section-alt">
        <Box className="cozy-container max-w-3xl text-center">
          <SectionHeader title={d.kids.experienceTitle} centered />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {d.kids.experienceText}
          </p>
        </Box>
      </section>

      <section className="cozy-section pb-20">
        <Box className="cozy-container">
          <h2 className="cozy-heading">{d.kids.gamesTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {games.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/library/${g.slug}`}
                  className="block rounded-xl bg-card/80 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </section>
    </>
  );
}
