import { getDictionary, type Locale } from "@/lib/i18n";
import type { Game, GameTag } from "@/types/game";

export type RentalTier = "under-100" | "over-100";

export type RentalTerms = {
  tier: RentalTier;
  advancePaymentCents: number;
  rentalPricePerDayCents: number;
};

const RENTAL_TERMS: Record<RentalTier, RentalTerms> = {
  "under-100": {
    tier: "under-100",
    advancePaymentCents: 5000,
    rentalPricePerDayCents: 2000,
  },
  "over-100": {
    tier: "over-100",
    advancePaymentCents: 10000,
    rentalPricePerDayCents: 3500,
  },
};

const GAME_BASE = [
  {
    slug: "codenames",
    title: "Codenames",
    playerCount: "4–8+",
    duration: "15–30 min",
    ageMin: 10,
    tags: ["corporate", "communication", "rentable", "rent-over-100"] as GameTag[],
    featured: true,
  },
  {
    slug: "the-resistance",
    title: "The Resistance",
    playerCount: "5–10",
    duration: "30–45 min",
    ageMin: 13,
    tags: ["corporate", "social-deduction", "rentable", "rent-under-100"] as GameTag[],
    featured: true,
  },
  {
    slug: "wavelength",
    title: "Wavelength",
    playerCount: "2–12+",
    duration: "30–45 min",
    ageMin: 14,
    tags: ["corporate", "communication", "rentable", "rent-over-100"] as GameTag[],
    featured: true,
  },
  {
    slug: "decrypto",
    title: "Decrypto",
    playerCount: "3–8",
    duration: "15–45 min",
    ageMin: 12,
    tags: ["corporate", "communication", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "just-one",
    title: "Just One",
    playerCount: "3–7",
    duration: "20 min",
    ageMin: 8,
    tags: ["corporate", "communication", "kids", "rentable", "rent-under-100"] as GameTag[],
  },
  {
    slug: "dixit",
    title: "Dixit",
    playerCount: "3–6",
    duration: "30 min",
    ageMin: 8,
    tags: ["kids", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "forbidden-island",
    title: "Forbidden Island",
    playerCount: "2–4",
    duration: "30 min",
    ageMin: 10,
    tags: ["kids", "communication", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "ticket-to-ride",
    title: "Ticket to Ride",
    playerCount: "2–5",
    duration: "30–60 min",
    ageMin: 8,
    tags: ["kids", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "splendor",
    title: "Splendor",
    playerCount: "2–4",
    duration: "30 min",
    ageMin: 10,
    tags: ["rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "azul",
    title: "Azul",
    playerCount: "2–4",
    duration: "30–45 min",
    ageMin: 8,
    tags: ["corporate", "kids", "rentable", "rent-over-100"] as GameTag[],
    featured: true,
  },
  {
    slug: "carcassonne",
    title: "Carcassonne",
    playerCount: "2–5",
    duration: "30–45 min",
    ageMin: 7,
    tags: ["kids", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "collectives9",
    title: "Collectives 9",
    playerCount: "2–16",
    duration: "40–90 min",
    ageMin: 12,
    tags: ["corporate", "kids", "rentable", "rent-over-100"] as GameTag[],
  },
  {
    slug: "flip7",
    title: "Flip7",
    playerCount: "3–18",
    duration: "20 min",
    ageMin: 8,
    tags: ["corporate", "kids","party-games","card-game", "rentable", "rent-under-100"] as GameTag[],
  },
  {
    slug: "port-royal",
    title: "Port Royal",
    playerCount: "2–5",
    duration: "20-50 min",
    ageMin: 8,
    tags: ["corporate","card-game", "rentable", "rent-under-100"] as GameTag[],
  },
  {
    slug: "the-mind",
    title: "The Mind",
    playerCount: "2-4",
    duration: "20 min",
    ageMin: 8,
    tags: ["corporate","logic-games","card-game","kids","party-games","communication", "rentable", "rent-under-100"] as GameTag[],
  },
  {
    slug: "love-letter",
    title: "Love Letter",
    playerCount: "2-6",
    duration: "20 min",
    ageMin: 10,
    tags: ["corporate", "party-games", "card-game", "rentable", "rent-under-100"] as GameTag[],
  },
] as const;

export function getGames(locale: Locale): Game[] {
  const dict = getDictionary(locale);
  return GAME_BASE.map((game) => ({
    ...game,
    description:
      dict.games[game.slug]?.description ??
      "Board game experience by DiceZone.",
  }));
}

export function getRentalTerms(game: Pick<Game, "tags">): RentalTerms | undefined {
  if (!game.tags.includes("rentable")) return undefined;

  return game.tags.includes("rent-under-100")
    ? RENTAL_TERMS["under-100"]
    : RENTAL_TERMS["over-100"];
}

export function getGameBySlug(slug: string, locale: Locale): Game | undefined {
  return getGames(locale).find((g) => g.slug === slug);
}

export function getGamesByTag(tag: GameTag, locale: Locale): Game[] {
  return getGames(locale).filter((g) => g.tags.includes(tag));
}

export function getGameSlugs(): string[] {
  return GAME_BASE.map((g) => g.slug);
}

export function formatPrice(cents: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "en-US", {
    style: "currency",
    currency: locale === "ro" ? "RON" : "USD",
  }).format(cents / 100);
}
