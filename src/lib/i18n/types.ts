import type { GameTag } from "@/types/game";

export type Locale = "ro" | "en";

export const LOCALES: Locale[] = ["ro", "en"];
export const DEFAULT_LOCALE: Locale = "ro";
export const LOCALE_COOKIE = "dicezone_locale";

export type NavLink = { href: string; label: string };

export type Dictionary = {
  meta: {
    defaultTitle: string;
    description: string;
  };
  nav: NavLink[];
  heroPill: string;
  ui: {
    bookEvent: string;
    viewAll: string;
    contactUs: string;
    explore: string;
    contact: string;
    players: string;
    rentFrom: string;
    perDay: string;
    openMenu: string;
    mainNav: string;
    mobileNav: string;
    language: string;
    switchToRo: string;
    switchToEn: string;
  };
  tags: Record<GameTag, string>;
  siteRegion: string;
  images: {
    hero: string;
    groupPlaying: string;
    tabletop: string;
    corporate: string;
    family: string;
    gameNight: string;
  };
  footer: {
    blurb: string;
    copyright: string;
    copyrightEnd: string;
    serving: string;
  };
  socialContact: {
    headline: string;
    subtext: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
  home: {
    heroTitle: string;
    heroAccent: string;
    heroDescription: string;
    bookCorporate: string;
    browseLibrary: string;
    offerEyebrow: string;
    offerTitle: string;
    offerSubtitle: string;
    learnMore: string;
    howEyebrow: string;
    offerings: { title: string; description: string }[];
    howTitle: string;
    howSubtitle: string;
    steps: { title: string; text: string }[];
    featuredEyebrow: string;
    featuredTitle: string;
    featuredSubtitle: string;
    ctaTitle: string;
    ctaText: string;
    galleryEyebrow: string;
    galleryTitle: string;
    gallerySubtitle: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceText: string;
  };
  corporate: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    bookCta: string;
    features: { title: string; text: string }[];
    packagesTitle: string;
    packagesSubtitle: string;
    packageBase: {
      label: string;
      title: string;
      price: string;
      description: string;
      included: string[];
    };
    packageExtrasTitle: string;
    packageExtras: { title: string; price: string; description: string }[];
    locationTitle: string;
    locationItems: [string, string];
    locationNote: string;
    gamesTitle: string;
    experienceTitle: string;
    experienceText: string;
  };
  kids: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    bookCta: string;
    features: { title: string; text: string }[];
    gamesTitle: string;
    experienceTitle: string;
    experienceText: string;
  };
  venue: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    comingTitle: string;
    comingText: string;
    waitlist: string;
  };
  publicEvents: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    listEyebrow: string;
    listTitle: string;
    listSubtitle: string;
    bookTicket: string;
    eventDetails: string;
    events: {
      title: string;
      date: string;
      time: string;
      location: string;
      price: string;
      spots: string;
      description: string;
    }[];
  };
  rent: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    browseCta: string;
    steps: { title: string; text: string }[];
  };
  about: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    intro: string;
    whatTitle: string;
    whatItems: string[];
    approachTitle: string;
    approach1: string;
    approach2: string;
    photoCaption: string;
  };
  contact: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    emailLabel: string;
  };
  library: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    filters: { tag: string; label: string }[];
    noResults: string;
    gameFallbackTitle: string;
    playersLabel: string;
    durationLabel: string;
    ageLabel: string;
    rentalLabel: string;
    corporateUse: string;
    venueOnly: string;
    rentCta: string;
  };
  notFound: {
    title: string;
    description: string;
    home: string;
  };
  games: Record<
    string,
    { description: string }
  >;
};
