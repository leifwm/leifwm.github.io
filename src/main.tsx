import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "./provider.tsx";

import { detectLocale, getLocale, localeUrl } from "@/i18n/locale";
import "@/styles/globals.css";

async function start() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.slice(base.length);

  if (!/^\/(en|pt)(?:\/|$)/.test(path)) {
    const locale = await detectLocale();

    window.location.replace(
      localeUrl(path + window.location.search + window.location.hash, locale),
    );

    return;
  }
  document.documentElement.lang = getLocale() === "pt" ? "pt-BR" : "en";
  const description =
    getLocale() === "pt"
      ? "Portfólio de Leif Magalhães: pesquisa, design de serviços e liderança em design."
      : "Leif Magalhães’ portfolio: research, service design and design leadership.";

  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:description"]',
    )
    .forEach((meta) => meta.setAttribute("content", description));
  for (const locale of ["pt", "en"] as const) {
    const link = document.createElement("link");

    link.rel = "alternate";
    link.hreflang = locale === "pt" ? "pt-BR" : "en";
    link.href = new URL(localeUrl(path, locale), window.location.origin).href;
    document.head.append(link);
  }
  const { default: App } = await import("./App.tsx");

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
void start();
