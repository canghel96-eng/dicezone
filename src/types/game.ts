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
  | "venue-only";

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
