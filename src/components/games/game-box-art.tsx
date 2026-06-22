import type { CSSProperties } from "react";
import type { Game } from "@/types/game";
import { cn } from "@/lib/utils";

const BOX_ART_IMAGES: Record<
  string,
  {
    image: string;
    cardPosition?: string;
    cardSize?: string;
    detailPosition?: string;
    featuredSize?: string;
    position?: string;
  }
> = {
  codenames: {
    image: "/images/games/codenames.webp",
    cardPosition: "center 20%",
    detailPosition: "center 18%",
  },
  "the-resistance": {
    image: "/images/games/theResistance.webp",
    cardPosition: "center 15%",
    detailPosition: "center 18%",
  },
  wavelength: {
    image: "/images/games/wavelenght.webp",
    cardPosition: "center 50%",
    detailPosition: "center 48%",
    featuredSize: "132% auto",
  },
  decrypto: {
    image: "/images/games/Decrypto.webp",
    cardPosition: "center 15%",
    detailPosition: "center 18%",
  },
  "just-one": {
    image: "/images/games/JustOne.webp",
    cardPosition: "center 46%",
    detailPosition: "center 42%",
  },
  dixit: {
    image: "/images/games/Dixit.webp",
    cardPosition: "center 34%",
    detailPosition: "center 36%",
  },
  "forbidden-island": {
    image: "/images/games/ForbiddenIsland.webp",
    cardPosition: "center 18%",
    detailPosition: "center 20%",
  },
  "ticket-to-ride": {
    image: "/images/games/TicketToRide.webp",
    cardPosition: "center 40%",
    detailPosition: "center 42%",
  },
  splendor: {
    image: "/images/library.webp",
    detailPosition: "center",
  },
  azul: {
    image: "/images/games/Azul.webp",
    cardPosition: "center 50%",
    detailPosition: "center 48%",
    featuredSize: "132% auto",
  },
  carcassonne: {
    image: "/images/games/Carcassonne.webp",
    cardPosition: "center 18%",
    detailPosition: "center 20%",
  },
  collectives9: {
    image: "/images/games/Collectives9.webp",
    cardPosition: "center 50%",
    detailPosition: "center 48%",
  },
  flip7: {
    image: "/images/games/Flip7.webp",
    cardPosition: "center 50%",
    detailPosition: "center 46%",
  },
  "port-royal": {
    image: "/images/games/PortRoyal.webp",
    cardPosition: "center 20%",
    detailPosition: "center 22%",
  },
  "the-mind": {
    image: "/images/games/TheMind.webp",
    cardPosition: "center 25%",
    detailPosition: "center 24%",
  },
  "love-letter": {
    image: "/images/games/LoveLetter.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
};

const FALLBACK_IMAGE = "/images/library.webp";

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
      : size === "detail"
        ? (theme.detailPosition ??
          theme.position ??
          theme.cardPosition ??
          "center")
        : (theme.position ?? theme.cardPosition ?? "center");
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
