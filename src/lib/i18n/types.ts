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
    back: string;
    continue: string;
    submitInquiry: string;
    submitting: string;
    sendMessage: string;
    sending: string;
    viewAll: string;
    contactUs: string;
    explore: string;
    contact: string;
    players: string;
    rentFrom: string;
    perDay: string;
    perDayWord: string;
    thankYou: string;
    messageSent: string;
    openMenu: string;
    mainNav: string;
    mobileNav: string;
    loadingForm: string;
    networkError: string;
    somethingWrong: string;
    language: string;
    switchToRo: string;
    switchToEn: string;
  };
  tags: Record<GameTag, string>;
  bookingSteps: [string, string, string, string];
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
    ctaBook: string;
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
    bookMetaTitle: string;
    bookHeroTitle: string;
    bookHeroDescription: string;
    bookFormTitle: string;
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
    bookMetaTitle: string;
    bookHeroTitle: string;
    bookHeroDescription: string;
    bookFormTitle: string;
  };
  venue: {
    metaTitle: string;
    heroTitle: string;
    heroDescription: string;
    comingTitle: string;
    comingText: string;
    waitlist: string;
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
    writeTitle: string;
    emailLabel: string;
    formHint: string;
    formHintCorporate: string;
    formHintKids: string;
    formHintAnd: string;
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
  };
  booking: {
    errors: {
      contactRequired: string;
      dateRequired: string;
      teamSizeRequired: string;
      childCountRequired: string;
    };
    companyLabel: string;
    schoolLabel: string;
    companyPlaceholder: string;
    schoolPlaceholder: string;
    contactName: string;
    email: string;
    phone: string;
    teamSize: string;
    childCount: string;
    ageRange: string;
    agePlaceholder: string;
    preferredDate: string;
    alternateDate: string;
    location: string;
    atOffice: string;
    atSchool: string;
    dicezoneVenue: string;
    address: string;
    addressPlaceholder: string;
    details: string;
    reviewOrg: string;
    reviewContact: string;
    reviewTeam: string;
    reviewChildren: string;
    reviewDates: string;
    reviewLocation: string;
    reviewYourSite: string;
    reviewArranged: string;
    reviewAddress: string;
    stepLabel: string;
  };
  rental: {
    title: string;
    priceNote: string;
    startDate: string;
    endDate: string;
    available: string;
    maybeUnavailable: string;
    yourName: string;
    submit: string;
  };
  contactForm: {
    thankYouBody: string;
    rental: string;
    booking: string;
    sentBack: string;
    failedSend: string;
    name: string;
    subject: string;
    message: string;
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
