import type { CSSProperties } from "react";
import type { Game } from "@/types/game";
import { cn } from "@/lib/utils";

const BOX_ART_IMAGES: Record<
  string,
  {
    image: string;
    cardPosition?: string;
    cardSize?: string;
    featuredSize?: string;
    position?: string;
  }
> = {
  codenames: {
    image: "/images/games/codenames.jpg",
    cardPosition: "center 24%",
  },
  "the-resistance": {
    image: "/images/games/theResistance.png",
    cardPosition: "center 22%",
  },
  wavelength: {
    image: "/images/games/wavelenght.png",
    cardPosition: "center 50%",
    featuredSize: "132% auto",
  },
  decrypto: {
    image: "/images/games/Decrypto.png",
    cardPosition: "center 28%",
  },
  "just-one": {
    image: "/images/games/JustOne.png",
    cardPosition: "center 46%",
  },
  dixit: {
    image: "/images/games/Dixit.png",
    cardPosition: "center 34%",
  },
  "forbidden-island": {
    image: "/images/games/ForbiddenIsland.png",
    cardPosition: "center 18%",
  },
  "ticket-to-ride": {
    image: "/images/games/TicketToRide.png",
    cardPosition: "center 26%",
  },
  splendor: {
    image: "/images/library.png",
  },
  azul: {
    image: "/images/games/Azul.png",
    cardPosition: "center 50%",
    featuredSize: "132% auto",
  },
  carcassonne: {
    image: "/images/games/Carcassonne.png",
    cardPosition: "center 18%",
  },
  collectives9: {
    image: "/images/games/Collectives9.png",
    cardPosition: "center 50%",
  },
};

const FALLBACK_IMAGE = "/images/library.png";

export function GameBoxArt({
  game,
  className,
  size = "card",
}: {
  game: Pick<Game, "slug" | "title" | "playerCount" | "duration" | "ageMin">;
  className?: string;
  size?: "card" | "featured" | "detail";
}) {
  const theme = BOX_ART_IMAGES[game.slug] ?? {
    image: FALLBACK_IMAGE,
  };
  const backgroundPosition =
    size === "card"
      ? (theme.cardPosition ?? theme.position ?? "center")
      : (theme.position ?? "center");
  const backgroundSize =
    size === "card"
      ? (theme.cardSize ?? "cover")
      : size === "featured"
        ? (theme.featuredSize ?? "cover")
        : "cover";
  const backgroundStyle = {
    backgroundImage: `url("${theme.image}")`,
    backgroundPosition,
    backgroundRepeat: "no-repeat",
    backgroundSize,
  } satisfies CSSProperties;

  return (
    <div
      role="img"
      aria-label={`${game.title} box art`}
      style={backgroundStyle}
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-white/60 bg-transparent shadow-[0_18px_30px_-18px_rgb(30_42_90_/_0.5)]",
        size === "detail"
          ? "aspect-square min-h-80"
          : size === "featured"
            ? "aspect-[3/4] min-h-[18rem]"
            : "aspect-[4/3]",
        className
      )}
    />
  );
}
