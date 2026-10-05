import portuguese from "./pt.json";

export type Locale = "en" | "pt";
export function formatNumber(value: number): string {
  return new Intl.NumberFormat(getLocale() === "pt" ? "pt-BR" : "en-US").format(
    value,
  );
}
const dictionary: Record<string, string> = portuguese;

export function getLocale(): Locale {
  const path = window.location.pathname.replace(
    import.meta.env.BASE_URL.replace(/\/$/, ""),
    "",
  );

  return /^\/pt(?:\/|$)/.test(path) ? "pt" : "en";
}
export function t(
  english: string,
  values: (string | number | undefined)[] = [],
): string {
  const key = english.trim();
  const value = getLocale() === "pt" ? dictionary[key] : undefined;
  const translated =
    value === undefined ? english : english.replace(key, () => value);

  return translated.replace(/\{(\d+)\}/g, (_, index) =>
    String(values[Number(index)] ?? ""),
  );
}
export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem("portfolio-language", locale);
  } catch {
    /* Browsing with storage disabled is supported. */
  }
}
export function localeUrl(path: string, locale = getLocale()): string {
  const clean = path.replace(/^\/(en|pt)(?=\/|$)/, "");

  return `${import.meta.env.BASE_URL}${locale}${clean.startsWith("/") ? clean : `/${clean}`}`;
}
export function languageSwitchUrl(locale: Locale) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return localeUrl(
    window.location.pathname.slice(base.length) +
      window.location.search +
      window.location.hash,
    locale,
  );
}
const portugueseCountries = new Set([
  "BR",
  "PT",
  "AO",
  "MZ",
  "CV",
  "GW",
  "ST",
  "TL",
]);
let pendingDetection: Promise<Locale> | undefined;

export function detectLocale(): Promise<Locale> {
  if (pendingDetection) return pendingDetection;
  pendingDetection = (async () => {
    try {
      const saved = localStorage.getItem("portfolio-language");

      if (saved === "pt" || saved === "en") return saved;
      const cached = sessionStorage.getItem("portfolio-detected-language");

      if (cached === "pt" || cached === "en") return cached;
    } catch {
      /* Continue without browser storage. */
    }
    const fallback: Locale = navigator.language.toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 1800);
    let locale = fallback;

    try {
      const response = await fetch("https://ipapi.co/country/", {
        signal: controller.signal,
        credentials: "omit",
        referrerPolicy: "no-referrer",
      });

      if (response.ok) {
        const country = (await response.text()).trim().toUpperCase();

        if (/^[A-Z]{2}$/.test(country))
          locale = portugueseCountries.has(country) ? "pt" : "en";
      }
    } catch {
      /* Use browser language when the country service is unavailable. */
    } finally {
      window.clearTimeout(timeout);
    }
    try {
      sessionStorage.setItem("portfolio-detected-language", locale);
    } catch {
      /* Cache is optional. */
    }

    return locale;
  })();

  return pendingDetection;
}
