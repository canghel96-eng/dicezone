import { en } from "./en";
import { ro } from "./ro";
import type { Dictionary, Locale } from "./types";
import { DEFAULT_LOCALE } from "./types";

export { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE } from "./types";
export type { Dictionary, Locale };

const dictionaries: Record<Locale, Dictionary> = { ro, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "ro" || value === "en";
}

export function formatRegion(text: string, region: string): string {
  return text.replace(/\{region\}/g, region);
}

export function formatYear(text: string, year: number): string {
  return text.replace(/\{year\}/g, String(year));
}
