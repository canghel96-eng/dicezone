export type GameTag =
  | "corporate"
  | "communication"
  | "social-deduction"
  | "kids"
  | "rentable"
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
