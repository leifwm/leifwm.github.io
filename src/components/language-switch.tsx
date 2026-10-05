import { getLocale, languageSwitchUrl, saveLocale } from "@/i18n/locale";

export function LanguageSwitch() {
  const locale = getLocale();

  return (
    <nav
      aria-label={locale === "pt" ? "Idioma" : "Language"}
      className="language-switch"
    >
      <a
        aria-current={locale === "pt" ? "true" : undefined}
        aria-label="Português"
        href={languageSwitchUrl("pt")}
        hrefLang="pt-BR"
        lang="pt-BR"
        onClick={() => saveLocale("pt")}
      >
        PT
      </a>
      <span aria-hidden="true">/</span>
      <a
        aria-current={locale === "en" ? "true" : undefined}
        aria-label="English"
        href={languageSwitchUrl("en")}
        hrefLang="en"
        lang="en"
        onClick={() => saveLocale("en")}
      >
        EN
      </a>
    </nav>
  );
}
