import { useState } from "react";
import { Link } from "@heroui/react";
import clsx from "clsx";

import { t } from "@/i18n/locale";
import { routeUrl, siteConfig } from "@/config/site";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { LinkedIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2" href={routeUrl("/")}>
            <Logo />
            <p className="font-bold text-inherit">{t("DESIGN")}</p>
          </a>
          <ul className="hidden lg:flex gap-4 ml-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={clsx(
                    "text-foreground hover:text-accent transition-colors font-medium",
                    "data-[active=true]:text-accent data-[active=true]:font-medium",
                  )}
                  href={routeUrl(item.href)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            aria-label={t("LinkedIn")}
            href={siteConfig.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          <LanguageSwitch />

          <div className="hidden md:flex" />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitch />
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label={t("Toggle menu")}
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator lg:hidden">
          <ul className="flex flex-col gap-2 px-4 pb-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    "block py-2 text-lg no-underline",
                    index === 2
                      ? "text-accent"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "text-danger"
                        : "text-foreground",
                  )}
                  href={routeUrl(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
