import Link from "next/link";
import { MessageCircle, Shield, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Box } from "@/components/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { getGamesByTag } from "@/lib/games";

const FEATURE_ICONS = [MessageCircle, Shield, Users];

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.corporate.metaTitle };
}

export default async function CorporatePage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const games = getGamesByTag("corporate", locale).slice(0, 6);

  return (
    <>
      <PageHero
        title={d.corporate.heroTitle}
        description={d.corporate.heroDescription}
        variant="immersive"
        className="dz-hero-corporate"
      >
        <Link href="/contact" className="dz-btn-hero inline-flex h-12 items-center px-8 text-sm">
          {d.corporate.bookCta}
        </Link>
      </PageHero>

      <section className="cozy-section">
        <Box className="cozy-container">
          <Box className="grid gap-6 md:grid-cols-3">
            {d.corporate.features.map((item, i) => {
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
        <Box className="cozy-container">
          <SectionHeader
            title={d.corporate.packagesTitle}
            subtitle={d.corporate.packagesSubtitle}
            centered
          />
          <Box className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="cozy-card overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/12 via-accent/25 to-secondary/50">
                <span className="cozy-pill w-fit">
                  {d.corporate.packageBase.label}
                </span>
                <CardTitle className="font-serif text-2xl font-semibold">
                  {d.corporate.packageBase.title}
                </CardTitle>
                <p className="text-3xl font-black text-primary">
                  {d.corporate.packageBase.price}
                </p>
                <CardDescription className="max-w-2xl text-base leading-relaxed">
                  {d.corporate.packageBase.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {d.corporate.packageBase.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Box className="space-y-4">
              <h3 className="dz-eyebrow">{d.corporate.packageExtrasTitle}</h3>
              {d.corporate.packageExtras.map((extra) => (
                <Card key={extra.title} className="cozy-card">
                  <CardHeader>
                    <Box className="flex flex-wrap items-start justify-between gap-3">
                      <CardTitle className="font-serif text-xl font-semibold">
                        {extra.title}
                      </CardTitle>
                      <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
                        {extra.price}
                      </span>
                    </Box>
                    <CardDescription className="text-base leading-relaxed">
                      {extra.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </section>

      <section className="cozy-section-alt">
        <Box className="cozy-container max-w-3xl text-center">
          <SectionHeader title={d.corporate.experienceTitle} centered />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {d.corporate.experienceText}
          </p>
        </Box>
      </section>

      <section className="cozy-section">
        <Box className="cozy-container max-w-3xl">
          <h2 className="cozy-heading">{d.corporate.locationTitle}</h2>
          <ul className="mt-5 list-inside list-disc space-y-3 leading-relaxed text-muted-foreground">
            {d.corporate.locationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-card/80 p-4 text-sm leading-relaxed text-muted-foreground">
            {d.corporate.locationNote}
          </p>
        </Box>
      </section>

      <section className="cozy-section-alt pb-20">
        <Box className="cozy-container">
          <h2 className="cozy-heading">{d.corporate.gamesTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {games.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/library/${g.slug}`}
                  className="block rounded-xl bg-secondary/50 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
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
