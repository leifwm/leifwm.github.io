import { localeUrl } from "@/i18n/locale";

export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const routeUrl = localeUrl;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LeifWM",
  description: "Design Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/#projects",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/#projects",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/leif-magalhaes",
  },
};
