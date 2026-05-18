import Link from "next/link";
import {
  Dice5,
  MessagesSquare,
  Users,
} from "lucide-react";
import { GameCard } from "@/components/games/game-card";
import { HubTile } from "@/components/home/hub-tile";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatRegion, getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { getGames } from "@/lib/games";

const OFFERING_HREFS = ["/corporate", "/kids", "/venue", "/rent"];

export default async function HomePage() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const region = d.siteRegion;
  const featured = getGames(locale).filter((g) => g.featured).slice(0, 4);

  return (
    <>
      <PageHero
        variant="immersive"
        pill={d.heroPill}
        title={d.home.heroTitle}
        accent={d.home.heroAccent}
        description={formatRegion(d.home.heroDescription, region)}
      >
        <Link href="/corporate/book" className="dz-btn-hero inline-flex h-12 items-center px-8 text-sm">
          {d.home.bookCorporate}
        </Link>
        <Link
          href="/library"
          className="dz-btn-hero-outline inline-flex h-12 items-center px-8 text-sm"
        >
          {d.home.browseLibrary}
        </Link>
      </PageHero>

      <section className="cozy-section bg-background">
        <Box className="cozy-container">
          <SectionHeader
            eyebrow={d.home.offerEyebrow}
            title={d.home.offerTitle}
            subtitle={d.home.offerSubtitle}
            centered
          />
          <Box className="dz-offerings-grid mt-12">
            {d.home.offerings.map((item, i) => (
              <HubTile
                key={OFFERING_HREFS[i]}
                href={OFFERING_HREFS[i]}
                title={item.title}
                description={item.description}
                index={i}
              />
            ))}
          </Box>
        </Box>
      </section>

      <section className="cozy-section-alt">
        <Box className="cozy-container max-w-3xl text-center">
          <SectionHeader
            eyebrow={d.home.galleryEyebrow}
            title={d.home.galleryTitle}
            subtitle={d.home.gallerySubtitle}
            centered
          />
        </Box>
      </section>

      <section className="cozy-section">
        <Box className="cozy-container max-w-3xl text-center">
          <SectionHeader
            eyebrow={d.home.experienceEyebrow}
            title={d.home.experienceTitle}
            centered
          />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {d.home.experienceText}
          </p>
        </Box>
      </section>

      <section className="cozy-section-alt">
        <Box className="cozy-container">
          <SectionHeader
            eyebrow={d.home.howEyebrow}
            title={d.home.howTitle}
            subtitle={d.home.howSubtitle}
            centered
          />
          <Box className="mt-12 grid gap-6 md:grid-cols-3">
            {d.home.steps.map((s, i) => (
              <Card
                key={i}
                className={`dz-step-card dz-step-card-${i} relative overflow-hidden`}
              >
                <CardHeader>
                  <span className="font-sans text-5xl font-extrabold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="font-serif text-xl font-semibold">
                    {s.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {s.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Box>
        </Box>
      </section>

      <section className="cozy-section">
        <Box className="cozy-container">
          <Box className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow={d.home.featuredEyebrow}
              title={d.home.featuredTitle}
              subtitle={d.home.featuredSubtitle}
            />
            <Button asChild variant="outline" className="shrink-0 rounded-full">
              <Link href="/library">{d.ui.viewAll}</Link>
            </Button>
          </Box>
          <Box className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} locale={locale} />
            ))}
          </Box>
        </Box>
      </section>

      <section className="cozy-section pb-20">
        <Box className="cozy-container">
          <Box className="cozy-cta-band text-center">
            <Users className="relative mx-auto h-11 w-11 opacity-90" />
            <h2 className="relative mt-4 font-serif text-2xl font-semibold sm:text-3xl">
              {d.home.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-base leading-relaxed opacity-95">
              {d.home.ctaText}
            </p>
            <Box className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full font-bold uppercase tracking-wide">
                <Link href="/corporate/book">
                  <MessagesSquare className="mr-2 h-4 w-4" />
                  {d.home.ctaBook}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-primary-foreground/10 font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Link href="/contact">{d.ui.contactUs}</Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}
