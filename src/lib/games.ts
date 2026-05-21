import { getDictionary, type Locale } from "@/lib/i18n";
import type { Game, GameTag } from "@/types/game";

const GAME_BASE = [
  {
    slug: "codenames",
    title: "Codenames",
    playerCount: "4–8+",
    duration: "15–30 min",
    ageMin: 10,
    tags: ["corporate", "communication", "rentable"] as GameTag[],
    rentalPricePerDayCents: 800,
    featured: true,
  },
  {
    slug: "the-resistance",
    title: "The Resistance",
    playerCount: "5–10",
    duration: "30–45 min",
    ageMin: 13,
    tags: ["corporate", "social-deduction", "rentable"] as GameTag[],
    rentalPricePerDayCents: 900,
    featured: true,
  },
  {
    slug: "wavelength",
    title: "Wavelength",
    playerCount: "2–12+",
    duration: "30–45 min",
    ageMin: 14,
    tags: ["corporate", "communication", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1000,
    featured: true,
  },
  {
    slug: "decrypto",
    title: "Decrypto",
    playerCount: "3–8",
    duration: "15–45 min",
    ageMin: 12,
    tags: ["corporate", "communication", "rentable"] as GameTag[],
    rentalPricePerDayCents: 900,
  },
  {
    slug: "just-one",
    title: "Just One",
    playerCount: "3–7",
    duration: "20 min",
    ageMin: 8,
    tags: ["corporate", "communication", "kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 700,
  },
  {
    slug: "dixit",
    title: "Dixit",
    playerCount: "3–6",
    duration: "30 min",
    ageMin: 8,
    tags: ["kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1000,
  },
  {
    slug: "forbidden-island",
    title: "Forbidden Island",
    playerCount: "2–4",
    duration: "30 min",
    ageMin: 10,
    tags: ["kids", "communication", "rentable"] as GameTag[],
    rentalPricePerDayCents: 800,
  },
  {
    slug: "ticket-to-ride",
    title: "Ticket to Ride",
    playerCount: "2–5",
    duration: "30–60 min",
    ageMin: 8,
    tags: ["kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1200,
  },
  {
    slug: "splendor",
    title: "Splendor",
    playerCount: "2–4",
    duration: "30 min",
    ageMin: 10,
    tags: ["rentable"] as GameTag[],
    rentalPricePerDayCents: 1000,
  },
  {
    slug: "azul",
    title: "Azul",
    playerCount: "2–4",
    duration: "30–45 min",
    ageMin: 8,
    tags: ["corporate", "kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1100,
    featured: true,
  },
  {
    slug: "carcassonne",
    title: "Carcassonne",
    playerCount: "2–5",
    duration: "30–45 min",
    ageMin: 7,
    tags: ["kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1000,
  },
  {
    slug: "collectives9",
    title: "Collectives 9",
    playerCount: "2–16",
    duration: "40–90 min",
    ageMin: 12,
    tags: ["corporate", "kids", "rentable"] as GameTag[],
    rentalPricePerDayCents: 1200,
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
