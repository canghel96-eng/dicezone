import type { CSSProperties } from "react";
import type { Game } from "@/types/game";
import { cn } from "@/lib/utils";

const BOX_ART_IMAGES: Record<
  string,
  {
    image: string;
    cardPosition?: string;
    cardSize?: string;
    cardZoom?: number;
    detailPosition?: string;
    detailZoom?: number;
    featuredSize?: string;
    featuredZoom?: number;
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
  "sheriff-of-nottingham": {
    image: "/images/games/SheriffOfNottingham.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "7wonders": {
    image: "/images/games/7Wonders.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "skull": {
    image: "/images/games/Skull.webp",
    cardPosition: "center 10%",
    detailPosition: "center 30%",
  },
  "zenith": {
    image: "/images/games/Zenith.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "toy-battle": {
    image: "/images/games/ToyBattle.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "my-gold-mine": {
    image: "/images/games/MyGoldMine.webp",
    cardPosition: "center 60%",
    detailPosition: "center 10%",
  },
  "welcome-to-the-dungeon": {
    image: "/images/games/WelcomeToTheDungeon.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "alias-party": {
    image: "/images/games/AliasParty.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "coup": {
    image: "/images/games/Coup.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "coatl": {
    image: "/images/games/Coatl.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "one-night-ultimate-werewolf": {
    image: "/images/games/OneNightUltimateWerewolf.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "marvel-united": {
    image: "/images/games/MarvelUnited.webp",
    cardPosition: "center 15%",
    detailPosition: "center 30%",
  },
  "activity": {
    image: "/images/games/Activity.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "angel-fury": {
    image: "/images/games/AngelFury.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "arkham-horror-tcg": {
    image: "/images/games/ArkhamHorrorTCG.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "battlelore": {
    image: "/images/games/BattleLore.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "binding-of-isaac-four-souls": {
    image: "/images/games/BindingOfIsaacFourSouls.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "bloodborne-card-game": {
    image: "/images/games/BloodborneCardGame.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "brew-crafters": {
    image: "/images/games/BrewCrafters.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "captain-marvel-secret-skrulls": {
    image: "/images/games/CaptainMarvelSecretSkrulls.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "century-big-box": {
    image: "/images/games/CenturyBigBox.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "chronicles-of-crime": {
    image: "/images/games/ChroniclesOfCrime.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "citadels": {
    image: "/images/games/Citadels.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "codenames-duet": {
    image: "/images/games/CodenamesDuet.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "concordia": {
    image: "/images/games/Concordia.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "destinies": {
    image: "/images/games/Destinies.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "disney-villainous": {
    image: "/images/games/DisneyVillainous.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "disney-villainous-wicked-to-the-core": {
    image: "/images/games/DisneyVillainousWickedToTheCore.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "disney-villainous-evil-comes-prepared": {
    image: "/images/games/DisneyVillainousEvilComesPrepared.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "disney-villainous-perfectly-wretched": {
    image: "/images/games/DisneyVillainousPerfectlyWretched.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "disney-villainous-despicable-plots": {
    image: "/images/games/DisneyVillainousDespicablePlots.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "dungeon-mayhem": {
    image: "/images/games/DungeonMayhem.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "dungeon-mayhem-monster-madness": {
    image: "/images/games/DungeonMayhemMonsterMadness.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "elder-sign": {
    image: "/images/games/ElderSign.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "everdell": {
    image: "/images/games/Everdell.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "gizmos": {
    image: "/images/games/Gizmos.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "gloom": {
    image: "/images/games/Gloom.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "god-of-war-card-game": {
    image: "/images/games/GodOfWarCardGame.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "grimm-forest": {
    image: "/images/games/GrimmForest.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "hansa-teutonica": {
    image: "/images/games/HansaTeutonica.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "istanbul-big-box": {
    image: "/images/games/IstanbulBigBox.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "legendary-marvel": {
    image: "/images/games/LegendaryMarvel.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "mansions-of-madness": {
    image: "/images/games/MansionsOfMadness.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "marvel-champions": {
    image: "/images/games/MarvelChampions.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "monopoly-cheaters": {
    image: "/images/games/MonopolyCheaters.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "munchkin": {
    image: "/images/games/Munchkin.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "paladins-west-kingdom": {
    image: "/images/games/PaladinsWestKingdom.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "pass-the-bomb": {
    image: "/images/games/PassTheBomb.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "prodigals-club": {
    image: "/images/games/ProdigalsClub.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "regatul-lui-enroh": {
    image: "/images/games/RegaturlLuiEnroh.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "rise-of-queensdale": {
    image: "/images/games/RiseOfQueensdale.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "root": {
    image: "/images/games/Root.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "slay-the-spire": {
    image: "/images/games/SlayTheSpire.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "star-realms": {
    image: "/images/games/StarRealms.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "stone-age": {
    image: "/images/games/StoneAge.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "stygian-society": {
    image: "/images/games/StygianSociety.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "tekhenu": {
    image: "/images/games/Tekhenu.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "terraforming-mars": {
    image: "/images/games/TerraformingMars.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "thanos-rising": {
    image: "/images/games/ThanosRising.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "this-war-of-mine": {
    image: "/images/games/ThisWarOfMine.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
  "unconscious-mind": {
    image: "/images/games/UnconsciousMind.webp",
    cardPosition: "center 20%",
    detailPosition: "center 20%",
  },
};

const FALLBACK_IMAGE = "/images/library.webp";

export function GameBoxArt({
  game,
  className,
  size = "card",
  zoom,
}: {
  game: Pick<Game, "slug" | "title" | "playerCount" | "duration" | "ageMin">;
  className?: string;
  size?: "card" | "featured" | "detail";
  zoom?: number;
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

  const resolvedZoom =
    zoom ??
    (size === "card"
      ? theme.cardZoom
      : size === "detail"
        ? theme.detailZoom
        : theme.featuredZoom);

  const backgroundSize = resolvedZoom
    ? `${resolvedZoom * 100}% auto`
    : size === "card"
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
