export type GameTag =
  | "corporate"
  | "communication"
  | "social-deduction"
  | "party-games"
  | "family-games"
  | "strategy-games"
  | "logic-games"
  | "word-games"
  | "math-games"
  | "card-game"
  | "memory-games"
  | "science-games"
  | "history-games"
  | "kids"
  | "rentable"
  | "rent-under-100"
  | "rent-over-100"
  | "venue-only"
  | "card-game"
  | "engine-building"
  | "resource-management"
  | "area-control"
  | "1v1"
  | "2-player"
  | "3-player"
  | "4-player"
  | "5-player"
  | "6-player"
  | "bluffing"
  | "card-drafting";

export interface Game {
  slug: string;
  title: string;
  description: string;
  playerCount: string;
  duration: string;
  ageMin: number;
  tags: GameTag[];
  rentalPricePerDayCents?: number;
  featured?: boolean;
}
