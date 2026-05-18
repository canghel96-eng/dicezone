import type { Game } from "@/types/game";
import { cn } from "@/lib/utils";

const BOX_ART_THEMES: Record<string, { cover: string; badge: string; glow: string }> = {
  codenames: {
    cover: "from-red-500 via-orange-400 to-yellow-300",
    badge: "bg-slate-950 text-yellow-100",
    glow: "bg-yellow-200/40",
  },
  "the-resistance": {
    cover: "from-slate-950 via-violet-800 to-fuchsia-500",
    badge: "bg-white/90 text-violet-950",
    glow: "bg-fuchsia-300/35",
  },
  wavelength: {
    cover: "from-indigo-600 via-fuchsia-500 to-orange-300",
    badge: "bg-white/90 text-indigo-950",
    glow: "bg-cyan-200/40",
  },
  decrypto: {
    cover: "from-emerald-700 via-teal-400 to-lime-200",
    badge: "bg-slate-950 text-lime-100",
    glow: "bg-lime-200/45",
  },
  "just-one": {
    cover: "from-sky-500 via-cyan-300 to-yellow-200",
    badge: "bg-white/90 text-sky-950",
    glow: "bg-white/40",
  },
  dixit: {
    cover: "from-violet-500 via-pink-400 to-rose-200",
    badge: "bg-white/90 text-violet-950",
    glow: "bg-pink-100/45",
  },
  "forbidden-island": {
    cover: "from-cyan-700 via-emerald-400 to-amber-200",
    badge: "bg-slate-950 text-emerald-100",
    glow: "bg-cyan-100/45",
  },
  "ticket-to-ride": {
    cover: "from-blue-700 via-sky-400 to-amber-300",
    badge: "bg-white/90 text-blue-950",
    glow: "bg-amber-100/45",
  },
  splendor: {
    cover: "from-purple-800 via-rose-500 to-amber-300",
    badge: "bg-white/90 text-purple-950",
    glow: "bg-amber-100/45",
  },
  azul: {
    cover: "from-blue-600 via-cyan-300 to-white",
    badge: "bg-blue-950 text-cyan-100",
    glow: "bg-white/55",
  },
};

export function GameBoxArt({
  game,
  className,
  size = "card",
}: {
  game: Pick<Game, "slug" | "title" | "playerCount" | "duration" | "ageMin">;
  className?: string;
  size?: "card" | "detail";
}) {
  const theme = BOX_ART_THEMES[game.slug] ?? BOX_ART_THEMES.codenames;

  return (
    <div
      role="img"
      aria-label={`${game.title} box art`}
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br p-4 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.45),0_18px_30px_-18px_oklch(0.25_0.08_285_/_0.55)]",
        theme.cover,
        size === "detail" ? "aspect-square min-h-80 p-7" : "aspect-[4/3]",
        className
      )}
    >
      <div className={cn("absolute -right-10 -top-12 h-32 w-32 rounded-full blur-2xl", theme.glow)} />
      <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.28)_1px,transparent_0)] bg-[length:18px_18px] opacity-60" />
      <div className="absolute inset-y-3 left-3 w-3 rounded-full bg-black/10 shadow-inner" />

      <div className="relative flex h-full flex-col justify-between pl-4">
        <span
          className={cn(
            "w-fit rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] shadow-sm",
            theme.badge
          )}
        >
          DiceZone
        </span>

        <div>
          <p
            className={cn(
              "max-w-[11rem] text-balance font-sans font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_8px_oklch(0.2_0.08_285_/_0.35)]",
              size === "detail" ? "text-5xl sm:text-6xl" : "text-3xl"
            )}
          >
            {game.title}
          </p>
          <p className="mt-3 w-fit rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
            {game.playerCount} | {game.duration} | {game.ageMin}+
          </p>
        </div>
      </div>
    </div>
  );
}
