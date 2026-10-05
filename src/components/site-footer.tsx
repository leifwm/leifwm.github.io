import englishCV from "../../assets/LeifMagalhaesCV_en.docx?url";
import portugueseCV from "../../assets/LeifMagalhaesCV_pt.docx?url";

import { t } from "@/i18n/locale";
import { routeUrl, siteConfig } from "@/config/site";
import "@/styles/site-footer.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__eyebrow">{t("Let’s talk")}</p>
            <h2>
              {t("Have a service challenge")}
              <br />
              {t("or a role in mind?")}
            </h2>
            <a className="site-footer__email" href="mailto:leifwm@gmail.com">
              {t("leifwm@gmail.com ")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <nav aria-label={t("Contact and CV")} className="site-footer__links">
            <a
              href={siteConfig.links.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              {t("LinkedIn ")}
              <span aria-hidden="true">↗</span>
            </a>
            <a download="LeifMagalhaesCV_en.docx" href={englishCV}>
              {t("CV · English ")}
              <span aria-hidden="true">↓</span>
            </a>
            <a download="LeifMagalhaesCV_pt.docx" href={portugueseCV}>
              {t("CV · Português ")}
              <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <div>
            <p>{t("Leif Magalhães · Service Design Lead")}</p>
            <p>
              {t("São Paulo, Brazil · © ")}
              {new Date().getFullYear()}
            </p>
          </div>
          <nav aria-label={t("Footer navigation")}>
            <a href={routeUrl("/")}>{t("Home")}</a>
            <a href={routeUrl("/#projects")}>{t("Projects")}</a>
            <a href={routeUrl("/about")}>{t("About")}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
