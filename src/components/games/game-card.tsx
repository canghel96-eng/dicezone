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
import { formatPrice } from "@/lib/games";
import type { Game } from "@/types/game";

export function GameCard({ game, locale }: { game: Game; locale: Locale }) {
  const d = getDictionary(locale);

  return (
    <Card className="cozy-card group flex h-full flex-col overflow-hidden rounded-2xl">
      <CardHeader className="pb-2 pt-5">
        <CardTitle className="font-serif text-lg font-medium">
          <Link
            href={`/library/${game.slug}`}
            className="transition-colors hover:text-primary"
          >
            {game.title}
          </Link>
        </CardTitle>
        <GameBoxArt game={game} className="mt-4" />
        <CardDescription className="line-clamp-2 leading-relaxed">
          {game.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-2 border-t border-border/50 pt-4 text-sm text-muted-foreground">
        <p>
          {game.playerCount} {d.ui.players} · {game.duration} · {game.ageMin}+
        </p>
        {game.rentalPricePerDayCents && game.tags.includes("rentable") && (
          <p className="font-semibold text-primary">
            {d.ui.rentFrom} {formatPrice(game.rentalPricePerDayCents, locale)}
            {d.ui.perDay}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
