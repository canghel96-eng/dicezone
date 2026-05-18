import Link from "next/link";
import { GameCard } from "@/components/games/game-card";
import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { getGames } from "@/lib/games";
import type { GameTag } from "@/types/game";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.library.metaTitle };
}

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const { tag: tagParam } = await searchParams;
  const games = getGames(locale);
  const activeTag = tagParam as GameTag | undefined;
  const filtered =
    activeTag && d.library.filters.some((f) => f.tag === activeTag)
      ? games.filter((g) => g.tags.includes(activeTag))
      : games;

  return (
    <>
      <PageHero
        title={d.library.heroTitle}
        description={d.library.heroDescription}
      />

      <section className="cozy-section pb-20 pt-2">
        <Box className="cozy-container">
          <Box className="mb-8 flex flex-wrap gap-2">
            {d.library.filters.map((f) => (
              <Link
                key={f.tag}
                href={f.tag === "all" ? "/library" : `/library?tag=${f.tag}`}
              >
                <Badge
                  variant={
                    (!activeTag && f.tag === "all") || activeTag === f.tag
                      ? "default"
                      : "outline"
                  }
                  className="cursor-pointer px-3 py-1"
                >
                  {f.label}
                </Badge>
              </Link>
            ))}
          </Box>

          <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((game) => (
              <GameCard key={game.slug} game={game} locale={locale} />
            ))}
          </Box>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">
              {d.library.noResults}
            </p>
          )}
        </Box>
      </section>
    </>
  );
}
