import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GameBoxArt } from "@/components/games/game-box-art";
import { getDictionary, type Locale } from "@/lib/i18n";
import { formatPrice, getRentalTerms } from "@/lib/games";
import type { Game } from "@/types/game";

export function GameCard({
  game,
  locale,
  variant = "default",
}: {
  game: Game;
  locale: Locale;
  variant?: "default" | "featured";
}) {
  const d = getDictionary(locale);
  const featured = variant === "featured";
  const rentalTerms = getRentalTerms(game);

  return (
    <Card className="cozy-card group flex h-full flex-col overflow-hidden rounded-2xl">
      {featured && (
        <Link href={`/library/${game.slug}`} className="block">
          <GameBoxArt
            game={game}
            size="featured"
            className="rounded-b-none border-x-0 border-t-0 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      )}
      <CardHeader className={featured ? "space-y-3 pb-3 pt-5" : "pb-2 pt-5"}>
        <CardTitle
          className={
            featured
              ? "font-serif text-xl font-semibold leading-tight [overflow-wrap:anywhere]"
              : "font-serif text-lg font-medium leading-tight [overflow-wrap:anywhere]"
          }
        >
          <Link
            href={`/library/${game.slug}`}
            className="transition-colors hover:text-primary"
          >
            {game.title}
          </Link>
        </CardTitle>
        {!featured && <GameBoxArt game={game} className="mt-4" />}
        <CardDescription className="line-clamp-2 leading-relaxed">
          {game.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-2 border-t border-border/50 pt-4 text-sm text-muted-foreground">
        <p>
          {game.playerCount} {d.ui.players} · {game.duration} · {game.ageMin}+
        </p>
        {rentalTerms && (
          <div className="space-y-1 font-semibold text-primary">
            <p>
              {d.ui.rentFrom}{" "}
              {formatPrice(rentalTerms.rentalPricePerDayCents, locale)}
              {d.ui.perDay}
            </p>
            <p className="text-xs text-muted-foreground">
              {d.library.advancePaymentLabel}{" "}
              {formatPrice(rentalTerms.advancePaymentCents, locale)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
