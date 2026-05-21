import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    defaultTitle: "DiceZone | Board game events & rentals",
    description:
      "Board game experiences for teams, families, and curious players.",
  },
  nav: [
    { href: "/corporate", label: "Corporate" },
    { href: "/kids", label: "Kids" },
    { href: "/venue", label: "Venue" },
    { href: "/events", label: "Events" },
    { href: "/rent", label: "Rent" },
    { href: "/library", label: "Library" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  heroPill: "Board games · Teams · Families",
  ui: {
    bookEvent: "Book an event",
    viewAll: "View all",
    contactUs: "Contact us",
    explore: "Explore",
    contact: "Contact",
    players: "players",
    rentFrom: "Rent from",
    perDay: "/day",
    openMenu: "Open menu",
    mainNav: "Main",
    mobileNav: "Mobile",
    language: "Language",
    switchToRo: "Română",
    switchToEn: "English",
  },
  tags: {
    corporate: "corporate",
    communication: "communication",
    "social-deduction": "social deduction",
    kids: "kids",
    rentable: "rentable",
    "venue-only": "venue only",
  },
  siteRegion: "Greater Metro Area",
  images: {
    hero: "Friends laughing while playing board games together",
    groupPlaying: "A group gathered around a table for a board game session",
    tabletop: "Colorful board game pieces and cards laid out on a table",
    corporate: "Colleagues collaborating and enjoying a team activity together",
    family: "Children and adults playing a board game together",
    gameNight: "Hands moving pieces during an engaging tabletop game night",
  },
  footer: {
    blurb:
      "Board game experiences for corporate teams, kids, and players in the {region}. Pull up a chair — we'll bring the games.",
    copyright: "© {year} DiceZone. Made with",
    copyrightEnd: "for people who love to play together.",
    serving: "Serving the {region}",
  },
  socialContact: {
    headline: "Want to book or find out more?",
    subtext:
      "Message us directly on WhatsApp, Instagram, or Facebook and we'll get back to you quickly.",
    whatsapp: "Message us on WhatsApp",
    instagram: "Message on Instagram",
    facebook: "Message on Facebook",
  },
  home: {
    heroTitle: "Board games that bring people together",
    heroAccent:
      "We set up the pieces, open up the conversation, and turn shared time into memories.",
    heroDescription:
      "DiceZone creates board game experiences for friends, families, kids, and teams in the {region}. Laughter, strategy, and real connection around the table.",
    bookCorporate: "Plan a game session",
    browseLibrary: "Browse game library",
    offerEyebrow: "The DiceZone universe",
    offerTitle: "What we offer",
    offerSubtitle:
      "From corporate offsites to kids' workshops, play-at-venue, and rentals — one curated library, many ways to play.",
    offerings: [
      {
        title: "Public events",
        description:
          "Join hosted board game nights and themed sessions open to everyone.",
      },
      {
        title: "Corporate team building",
        description:
          "Communication and social deduction games facilitated at your office or a venue we arrange.",
      },
      {
        title: "Kids education",
        description:
          "Educational board game sessions that build cooperation, patience, and problem-solving.",
      },
      {
        title: "Partner venue library",
        description:
          "Play from our game library at a local restaurant partner — coming soon.",
      },
      {
        title: "Game rental",
        description:
          "Take a game home for a few days. Simple daily pricing from our library.",
      },
    ],
    learnMore: "Learn more",
    howEyebrow: "How it works",
    howTitle: "Three steps to game night",
    howSubtitle: "Three simple steps from inquiry to an unforgettable session.",
    steps: [
      {
        title: "Tell us your goals",
        text: "Team size, dates, and whether you need a venue — we handle the rest.",
      },
      {
        title: "We curate the games",
        text: "Communication and social deduction titles matched to your group.",
      },
      {
        title: "Play & debrief",
        text: "Facilitated session with a short wrap-up tying play to real teamwork.",
      },
    ],
    featuredEyebrow: "Our library",
    featuredTitle: "Featured games",
    featuredSubtitle: "From our corporate and rental library",
    ctaTitle: "Planning a team offsite or school event?",
    ctaText:
      "No gaming experience required. We bring the games, facilitation, and good vibes.",
    galleryEyebrow: "Around the table",
    galleryTitle: "Real moments, real connection",
    gallerySubtitle:
      "From corporate offsites to family game nights — laughter, strategy, and stories that stick.",
    experienceEyebrow: "Why it works",
    experienceTitle: "Play brings people closer",
    experienceText:
      "Board games lower the pressure. Everyone has a role at the table — talking, listening, laughing, and solving problems together. That is the energy we bring to every DiceZone session.",
  },
  corporate: {
    metaTitle: "Corporate team building",
    heroTitle: "Corporate team building through board games",
    heroDescription:
      "Facilitated sessions focused on communication and social deduction — at your office or a venue we arrange for you.",
    bookCta: "Book your event",
    features: [
      {
        title: "Communication games",
        text: "Codenames, Wavelength, Just One, and more — designed to get teams talking and listening.",
      },
      {
        title: "Social deduction",
        text: "The Resistance and similar titles build trust, observation, and healthy debate.",
      },
      {
        title: "Facilitated & debriefed",
        text: "We run the session and tie gameplay to real collaboration skills — no gaming experience needed.",
      },
    ],
    packagesTitle: "Corporate packages",
    packagesSubtitle:
      "Start with the base package, then add facilitation or special moments when you want more structure.",
    packageBase: {
      label: "Package 1",
      title: "Board games delivered to your location",
      price: "20 lei / person",
      description:
        "We bring a suitable selection of board games for your group directly to your office or chosen location.",
      included: [
        "Game selection matched to your participant count",
        "Board games delivered to the location",
        "Recommendations for setup and event flow",
      ],
    },
    packageExtrasTitle: "Extra options",
    packageExtras: [
      {
        title: "Event specialist",
        price: "100 lei / hour",
        description:
          "A DiceZone specialist guides the event, teaches the rules, organizes tables, and helps participants get into the games quickly.",
      },
      {
        title: "Contests or raffles with a prize",
        price: "100 lei",
        description:
          "We organize a competitive moment or raffle to add energy and a small prize for participants.",
      },
    ],
    locationTitle: "Location options",
    locationItems: [
      "Your office — we come to you with games and facilitation.",
      "Venue arranged by DiceZone — café, restaurant, or private room in your area.",
    ],
    locationNote:
      "Typical sessions run 2–3 hours for groups of 8–40 people. Custom formats available on request.",
    gamesTitle: "Games we often use",
    experienceTitle: "Teams that play together, work better together",
    experienceText:
      "Our facilitators guide the room so everyone participates — introverts included. No awkward icebreakers, just structured fun that builds real rapport.",
  },
  kids: {
    metaTitle: "Kids education",
    heroTitle: "Educational board game events for kids",
    heroDescription:
      "Cooperation, turn-taking, and problem-solving through facilitated play — for schools, camps, and parent groups.",
    bookCta: "Book a session",
    features: [
      {
        title: "Cooperation",
        text: "Team-based games that reward working together, not winning alone.",
      },
      {
        title: "Skills through play",
        text: "Logic, patience, and communication without screens or worksheets.",
      },
      {
        title: "Age-appropriate",
        text: "Sessions tailored to your group's age range and setting.",
      },
    ],
    gamesTitle: "Example games",
    experienceTitle: "Learning through play, together",
    experienceText:
      "Kids practice turn-taking, teamwork, and creative thinking without feeling like a lesson. Parents and teachers love watching confidence grow around the table.",
  },
  venue: {
    metaTitle: "Partner venue",
    heroTitle: "Play at our partner venue",
    heroDescription:
      "We're partnering with local restaurants and cafés to host a permanent DiceZone game library — pay a small fee to play on site.",
    comingTitle: "Coming soon",
    comingText:
      "We're signing our first partner venue in the {region}. Want to host a game library at your restaurant, or get notified when we launch?",
    waitlist: "Join the waitlist",
  },
  publicEvents: {
    metaTitle: "Public events",
    heroTitle: "Public board game events",
    heroDescription:
      "Open game nights for everyone: come solo or with friends, we match tables, explain rules, and help you get into the games quickly.",
    listEyebrow: "DiceZone calendar",
    listTitle: "Upcoming events",
    listSubtitle:
      "Reserve your place at one of the planned sessions. The ticket button sends you to the Google signup form.",
    bookTicket: "Book a ticket",
    eventDetails: "Event details",
    events: [
      {
        title: "Beginner-friendly game night",
        date: "Friday, June 14",
        time: "18:30–21:30",
        location: "Bucharest · venue confirmed after signup",
        price: "30 lei / person",
        spots: "24 spots available",
        description:
          "A relaxed evening with easy-to-learn games, guided tables, and recommendations for new groups.",
      },
      {
        title: "Social deduction night",
        date: "Saturday, June 22",
        time: "19:00–22:30",
        location: "Bucharest · venue confirmed after signup",
        price: "35 lei / person",
        spots: "18 spots available",
        description:
          "Bluffing, deduction, and lively discussion for players who enjoy hidden-role games.",
      },
      {
        title: "Family board game afternoon",
        date: "Sunday, June 30",
        time: "15:00–18:00",
        location: "Bucharest · venue confirmed after signup",
        price: "25 lei / person",
        spots: "20 spots available",
        description:
          "Games for kids and adults, with rules explained on the spot and a friendly atmosphere.",
      },
    ],
  },
  rent: {
    metaTitle: "Rent a game",
    heroTitle: "Rent games from our library",
    heroDescription:
      "Take a title home for a few days. Simple daily pricing — message us on WhatsApp to check availability and arrange pickup.",
    browseCta: "Browse library",
    steps: [
      {
        title: "Pick your game",
        text: "Choose from our catalog of family and strategy titles.",
      },
      {
        title: "Message us",
        text: "Send us a WhatsApp, Instagram, or Facebook message to check availability.",
      },
      {
        title: "Pickup & return",
        text: "We'll confirm pickup location and return instructions by message.",
      },
    ],
  },
  about: {
    metaTitle: "About",
    heroTitle: "About DiceZone",
    heroDescription:
      "We believe the best team and learning experiences happen around a table — not a slide deck.",
    intro:
      "DiceZone was founded to bring purposeful play to workplaces and classrooms in the {region}. We specialize in board games that strengthen communication, collaboration, and social awareness — then we facilitate sessions so every participant feels included.",
    whatTitle: "What we do",
    whatItems: [
      "Corporate team-building with communication & social deduction games",
      "Educational board game events for kids and schools",
      "Partner venue game libraries (launching soon)",
      "Game rentals from our curated library",
    ],
    approachTitle: "Our approach",
    approach1:
      "Every event is facilitated by someone who knows the games and your goals. We handle setup, rules, pacing, and a short debrief that connects play to real-world teamwork or learning outcomes.",
    approach2:
      "Whether you're planning an offsite, a school workshop, or a weekend rental, we're here to make it easy and genuinely fun.",
    photoCaption:
      "Every session is built around the table — where conversation, laughter, and teamwork happen naturally.",
  },
  contact: {
    metaTitle: "Contact",
    heroTitle: "Contact us",
    heroDescription:
      "Questions about events, rentals, or partnerships? We serve the {region} and reply within 1–2 business days.",
    emailLabel: "Email:",
  },
  library: {
    metaTitle: "Game library",
    heroTitle: "Game library",
    heroDescription:
      "Our curated collection for corporate events, kids programs, and rentals.",
    filters: [
      { tag: "all", label: "All" },
      { tag: "corporate", label: "Corporate" },
      { tag: "kids", label: "Kids" },
      { tag: "rentable", label: "Rentable" },
      { tag: "communication", label: "Communication" },
      { tag: "social-deduction", label: "Social deduction" },
    ],
    noResults: "No games match this filter.",
    gameFallbackTitle: "Game",
    playersLabel: "Players:",
    durationLabel: "Duration:",
    ageLabel: "Ages:",
    rentalLabel: "Rental:",
    corporateUse: "Use in corporate event",
    venueOnly: "This title is available in facilitated events only.",
    rentCta: "Rent this game",
  },
  notFound: {
    title: "Page not found",
    description:
      "This square isn't on our board. Let's get you back to the table.",
    home: "Back to home",
  },
  games: {
    codenames: {
      description:
        "Teams give one-word clues to help their spymaster identify secret agents. Perfect for sharpening communication and strategic thinking.",
    },
    "the-resistance": {
      description:
        "Social deduction at its finest — loyal agents vs hidden spies. Builds trust, observation, and team discussion under pressure.",
    },
    wavelength: {
      description:
        "A psychic duo gives clues on a spectrum while teammates guess where they land. Hilarious debates and aligned (or misaligned) perspectives.",
    },
    decrypto: {
      description:
        "Encode and decode secret messages while rivals intercept your patterns. Excellent for teams that love wordplay and careful listening.",
    },
    "just-one": {
      description:
        "Cooperative clue-giving with a twist — duplicate clues are discarded. Simple rules, big laughs, great for mixed experience levels.",
    },
    dixit: {
      description:
        "Beautiful illustrated cards inspire creative storytelling and interpretation. Wonderful for kids and adults exploring imagination together.",
    },
    "forbidden-island": {
      description:
        "Work together to capture treasures and escape before the island sinks. Teaches cooperation, planning, and shared decision-making.",
    },
    "ticket-to-ride": {
      description:
        "Build train routes across the map to connect cities. Accessible strategy that rewards planning and friendly competition.",
    },
    splendor: {
      description:
        "Collect gems and develop your Renaissance trading empire. Clean engine-building that scales from family game night to strategy fans.",
    },
    azul: {
      description:
        "Draft colorful tiles to create stunning mosaic patterns. Elegant, tactile, and satisfying for corporate icebreakers or family play.",
    },
    carcassonne: {
      description: "A tile-placement game where you build a medieval landscape and score points by controlling cities, roads, and fields.",
    },
    collectives9: {
      description: "A team-based game with fast communication, trivia, and creative challenges where players work together to score points.",
    },
  },
};
