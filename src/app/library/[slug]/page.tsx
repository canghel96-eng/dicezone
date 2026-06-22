import { notFound } from "next/navigation";
import { GameBoxArt } from "@/components/games/game-box-art";
import { SocialContact } from "@/components/shared/social-contact";
import { Badge } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import {
  formatPrice,
  getGameBySlug,
  getGameSlugs,
  getRentalTerms,
} from "@/lib/games";

export function generateStaticParams() {
  return getGameSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const { slug } = await params;
  const game = getGameBySlug(slug, locale);
  return { title: game?.title ?? d.library.gameFallbackTitle };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const { slug } = await params;
  const game = getGameBySlug(slug, locale);

  if (!game) notFound();

  const rentable = game.tags.includes("rentable");
  const rentalTerms = getRentalTerms(game);

  return (
    <section className="cozy-section">
      <Box className="cozy-container grid gap-10 lg:grid-cols-2">
        <GameBoxArt game={game} size="detail" className="cozy-card" />

        <Box>
          <Box className="mb-4 flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {d.tags[tag]}
              </Badge>
            ))}
          </Box>
          <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
            {game.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {game.description}
          </p>
          <ul className="mt-6 space-y-2 rounded-2xl bg-muted/50 p-5 text-sm">
            <li>
              <span className="font-semibold text-foreground">
                {d.library.playersLabel}
              </span>{" "}
              {game.playerCount}
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {d.library.durationLabel}
              </span>{" "}
              {game.duration}
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {d.library.ageLabel}
              </span>{" "}
              {game.ageMin}+
            </li>
            {rentalTerms && rentable && (
              <li className="text-base font-semibold text-primary">
                {d.library.rentalLabel}{" "}
                {formatPrice(rentalTerms.rentalPricePerDayCents, locale)}
                {d.ui.perDay}
              </li>
            )}
            {rentalTerms && rentable && (
              <li>
                <span className="font-semibold text-foreground">
                  {d.library.advancePaymentLabel}
                </span>{" "}
                {formatPrice(rentalTerms.advancePaymentCents, locale)}
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.library.refundableAdvanceNote}
                </p>
              </li>
            )}
          </ul>

          {rentable ? (
            <Box className="mt-8">
              <SocialContact
                headline={d.library.rentCta}
                subtext={d.socialContact.subtext}
                labels={{
                  whatsapp: d.socialContact.whatsapp,
                  instagram: d.socialContact.instagram,
                  facebook: d.socialContact.facebook,
                }}
                compact
              />
            </Box>
          ) : (
            <p className="mt-8 rounded-2xl bg-secondary/50 p-4 text-sm text-muted-foreground">
              {d.library.venueOnly}
            </p>
          )}
        </Box>
      </Box>
    </section>
  );
}
